"use client"; 
import { css } from '@emotion/react';
import React, { useRef, useState, useCallback, useEffect } from 'react';
import { formatTime } from './helpers/formatTime';
import { Container, VolumeControl, SpeedControl, PlayerControl, TimeDisplay } from './styles';
import ProgressContainer from './progress';
import Image from 'next/image';

const APP_API = process.env.APP_API

const AudioPlayer: React.FC<{url:string}> = ({ url }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [volume, setVolume] = useState<number>(0.6);
  const volumeControlRef = useRef<HTMLInputElement | null>(null);
  const volumeImgRef = useRef<HTMLImageElement | null>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [hoverTime, setHoverTime] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playbackRate, setPlaybackRate] = React.useState<number>(1);
  const [showSpeedOptions, setShowSpeedOptions] = React.useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const playPauseImgRef = useRef<HTMLImageElement>(null);
  const [transformStyle, setTransformStyle] = useState('none');
  const [transformStyle1, setTransformStyle1] = useState('none');

  // volume
  const updateVolumeImage = useCallback((imgRef: HTMLImageElement | null, volume: number) => {
    if (imgRef) {
      if (volume === 0) {
        imgRef.src = '/img/volume-xmark-light.svg';
      } else if (volume < 0.5) {
        imgRef.src = '/img/volume-low-light.svg';
      } else {
        imgRef.src = '/img/volume-light.svg';
      }
    }
  }, []);

  const updateVolumeControl = useCallback((controlRef: HTMLInputElement | null, volume: number) => {
    if (controlRef) {
      const value = volume * 100;
      controlRef.style.background = `linear-gradient(to right, #4545ff 0%, #4545ff ${value}%, #FFFFFF4D ${value}%, #FFFFFF4D 100%)`;
    }
  }, []);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const volumeValue = parseFloat(e.target.value);
    setVolume(volumeValue);

    if (audioRef.current) {
      audioRef.current.volume = volumeValue;
    }

    updateVolumeImage(volumeImgRef.current, volumeValue);
    updateVolumeControl(volumeControlRef.current, volumeValue);
  };

  const handleVolumeIconClick = () => {
    const newVolume = volume > 0 ? 0 : 0.6;
    setVolume(newVolume);

    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }

    updateVolumeImage(volumeImgRef.current, newVolume);
    updateVolumeControl(volumeControlRef.current, newVolume);
  };

  useEffect(() => {
    updateVolumeControl(volumeControlRef.current, volume);
    updateVolumeImage(volumeImgRef.current, volume);
  }, [volume, updateVolumeControl, updateVolumeImage]);


// 
  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      const handleLoadedMetadata = () => {
        setDuration(audioElement.duration);
      };

      audioElement.addEventListener('loadedmetadata', handleLoadedMetadata);

      if (audioElement.readyState >= 1) {
        handleLoadedMetadata();
      }

      return () => {
        audioElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }
  }, []);

  const handleLoadedMetadata = useCallback(() => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
      setCurrentTime(0);
    }
  }, []);

  const handleTimeUpdate = useCallback(() => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  }, []);

  const handleProgressChange = useCallback((newTime: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  }, []);
// 

  // speed
  const toggleDropdown = () => {
    setShowSpeedOptions(prev => !prev);
  };

  const handleSpeedChange = (newRate: number) => {
    setPlaybackRate(newRate);
    setShowSpeedOptions(false); 

    if (audioRef.current) {
      audioRef.current.playbackRate = newRate;
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setShowSpeedOptions(false);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // player-container
  const handlePlayPause = useCallback(() => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, [audioRef, setIsPlaying]);

  const handleForwardClick = useCallback(() => {
    if (!audioRef.current) return;

    const maxTime = audioRef.current.duration;
    if (maxTime) {
      const newTime = Math.min(maxTime, audioRef.current.currentTime + 10);
      audioRef.current.currentTime = newTime;

      setTransformStyle('matrix(0.71, 0.71, -0.71, 0.71, 0, 0)');
      setTimeout(() => {
        setTransformStyle('none');
      }, 500);
    }
  }, [audioRef]);

  const handleBackwardClick = useCallback(() => {
    if (!audioRef.current) return;

    const newTime = Math.max(0, audioRef.current.currentTime - 10);
    audioRef.current.currentTime = newTime;

    setTransformStyle1('matrix(0.71, -0.71, 0.71, 0.71, 0, 0)');
    setTimeout(() => {
      setTransformStyle1('none');
    }, 500);
  }, [audioRef]);

  useEffect(() => {
    const audioElement = audioRef.current;

    if (audioElement) {
      const handleEnded = () => {
        setIsPlaying(false);
        if (playPauseImgRef.current) {
          playPauseImgRef.current.src = '/img/play.svg';
          playPauseImgRef.current.alt = 'Play';
        }
      };

      audioElement.addEventListener('ended', handleEnded);

      return () => {
        audioElement.removeEventListener('ended', handleEnded);
      };
    }
  }, [audioRef, setIsPlaying]);

  useEffect(() => {
    if (playPauseImgRef.current) {
      playPauseImgRef.current.src = isPlaying ? '/img/pause.svg' : '/img/play.svg';
      playPauseImgRef.current.alt = isPlaying ? 'Pause' : 'Play';

      if (isPlaying) {
        playPauseImgRef.current.style.marginLeft = '0px';
      } else {
        playPauseImgRef.current.style.marginLeft = '5px';
      }
    }
  }, [isPlaying]);


  return (
    <>
      <Container>
        <div className='central-container'>
          <div className='player-bg'>
            <div className='top-control'>
              <audio
                ref={audioRef}
                src={APP_API+url}
                onLoadedMetadata={handleLoadedMetadata}
                onTimeUpdate={handleTimeUpdate}
              ></audio>
              <VolumeControl>
                <div>
                <Image
                  ref={volumeImgRef}
                  onClick={handleVolumeIconClick}
                  src="/img/volume.svg"
                  alt="volume"
                />
                </div>
                <input
                  type="range"
                  id="volumeControl"
                  ref={volumeControlRef}
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                />
              </VolumeControl>
            
              <PlayerControl>
                <div onClick={handleBackwardClick}>
                  <Image
                    src="/img/arrow.svg"
                    alt="backward"
                    style={{ transform: transformStyle1, transition: 'transform 0.5s' }}
                  />
                  <span
                    css={css`
                      @media (max-width: 499px) {
                        width: 7px;
                      }`}>
                    10</span>
                </div>
                
                <button onClick={handlePlayPause}>
                  <Image ref={playPauseImgRef} src="/img/play.svg" alt="Play" />
                </button>

                <div onClick={handleForwardClick}>
                  <Image
                    src="/img/arrow1.svg"
                    alt="forward"
                    style={{ transform: transformStyle, transition: 'transform 0.5s' }}
                  />
                  <span>10</span>
                </div>
              </PlayerControl>

              <SpeedControl>
                <div
                  className={`speed ${showSpeedOptions ? 'speed-dropdown-visible' : ''}`}
                  onClick={toggleDropdown}
                  ref={dropdownRef}
                >
                  <p>{`${playbackRate}×`}</p>
                  <img
                    src="/img/shevron.svg"
                    alt="speed"
                    className={`shevron ${showSpeedOptions ? 'clicked' : ''}`}
                  />
                  <div className={`dropdown-content ${showSpeedOptions ? 'show' : ''}`}>
                    {[0.5, 0.75, 1, 1.25, 1.5, 1.75, 2].map((option) => (
                      <div
                        key={option}
                        className="speed-option"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSpeedChange(option);
                        }}
                      >
                        {`${option}×`}
                      </div>
                    ))}
                  </div>
                </div>
              </SpeedControl>
            </div>
            <ProgressContainer
              audioRef={audioRef}
              currentTime={currentTime}
              formatTime={formatTime} 
              duration={duration}
              setHoverTime={setHoverTime}
              onProgressChange={handleProgressChange}
            />
            <TimeDisplay>
              <div>
                <ul>
                  <li id="currentTime">
                    {formatTime(currentTime)}
                  </li>
                  <li id="duration">
                    {formatTime(duration)}
                  </li>
                </ul>
              </div>
            </TimeDisplay>
          </div>
        </div>
      </Container>

    </>
  );
};

export default AudioPlayer;
