"use client"; 
import React, { useRef, useEffect, useCallback, useState } from 'react';
import { formatTime } from '../../helpers/formatTime';
import { ProgressWrapper, RectGen, Rect, HoverRect } from './styles';

interface ProgressContainerProps {
  currentTime: number;
  duration: number;
  onProgressChange: (newTime: number) => void;
  audioRef: React.RefObject<HTMLAudioElement>;
  formatTime: (time: number) => string;
  setHoverTime: React.Dispatch<React.SetStateAction<number>>;
}

const ProgressContainer: React.FC<ProgressContainerProps> = ({
  currentTime,
  duration,
  onProgressChange
}) => {
  const progressContainerRef = useRef<HTMLDivElement | null>(null);
  const progressBarRef = useRef<HTMLInputElement | null>(null);
  const hoverRectRef = useRef<HTMLDivElement | null>(null);

  const [rectangles, setRectangles] = useState<JSX.Element[]>([]);
  
  const heightPattern = [9.5, 17.5, 23, 19.5, 15.97, 17.5, 9.5, 19.5, 17.5, 23, 13.5, 17.5];

  const generateRectangles = useCallback(() => {
    const screenWidth = window.innerWidth;
    const rectWidth = '5px';
    const totalRectangles = Math.floor((progressContainerRef.current?.clientWidth || 0) / parseInt(rectWidth));

    const newRectangles = Array.from({ length: totalRectangles }, (_, i) => {
      const rectHeight = heightPattern[i % heightPattern.length];
      return <Rect key={i} style={{ height: `${rectHeight}px`, width: rectWidth }} />;
    });

    setRectangles(newRectangles);
  }, []);

  useEffect(() => {
    generateRectangles();
    window.addEventListener('resize', generateRectangles);

    return () => {
      window.removeEventListener('resize', generateRectangles);
    };
  }, [generateRectangles]);

  const handleProgressBarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const progressBarValue = parseFloat(e.target.value);
    const newTime = (progressBarValue / 100) * duration;
    onProgressChange(newTime);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressBarRef.current && hoverRectRef.current && progressContainerRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const hoverX = e.clientX - rect.left;
      const width = progressBarRef.current.clientWidth;
      const hoverTime = (hoverX / width) * duration;

      hoverRectRef.current.style.width = '60px';
      hoverRectRef.current.style.height = '30px';
      hoverRectRef.current.style.left = `${hoverX - 30}px`;
      hoverRectRef.current.style.top = `-35px`;
      hoverRectRef.current.textContent = formatTime(hoverTime);
      hoverRectRef.current.style.display = 'block';

      const totalRectangles = progressContainerRef.current.children.length;
      const hoverIndex = Math.floor((hoverX / width) * totalRectangles);
      for (let i = 0; i < totalRectangles; i++) {
        if (i <= hoverIndex) {
          progressContainerRef.current.children[i].classList.add('hover-left');
        } else {
          progressContainerRef.current.children[i].classList.remove('hover-left');
        }
      };
    }
  };

  useEffect(() => {
    if (progressContainerRef.current) {
      const totalRectangles = progressContainerRef.current.children.length;
      const currentRectIndex = Math.floor((currentTime / duration) * totalRectangles);
      for (let i = 0; i < totalRectangles; i++) {
        if (i <= currentRectIndex && currentTime > 0) {
          progressContainerRef.current.children[i].classList.add('played');
        } else {
          progressContainerRef.current.children[i].classList.remove('played');
        }
      }
    }
  }, [currentTime, duration]);

  const handleMouseLeave = () => {
    if (hoverRectRef.current && progressContainerRef.current) {
      hoverRectRef.current.style.display = 'none';

      const totalRectangles = progressContainerRef.current.children.length;
      for (let i = 0; i < totalRectangles; i++) {
        progressContainerRef.current.children[i].classList.remove('hover-left');
      }
    }
  };


  return (
    <ProgressWrapper onMouseMove={handleMouseMove} onMouseLeave=  {handleMouseLeave}>
      <RectGen ref={progressContainerRef}>
        {rectangles}
      </RectGen>
      <input
        ref={progressBarRef}
        id="progressBar"
        type="range"
        min="0"
        max="100"
        step="0.01"
        value={duration ? (currentTime / duration) * 100 : 0}
        onChange={handleProgressBarChange}
      />
      <HoverRect ref={hoverRectRef}></HoverRect>
    </ProgressWrapper>
  );
};

export default ProgressContainer;
