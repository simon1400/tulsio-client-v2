"use client"; 
import { css } from '@emotion/react';
import React, { useRef, useState, useCallback, useEffect } from 'react';
import ProgressContainer from './components/progress/progress';
import { formatTime } from './helpers/formatTime';
import { Container, PlayerBg, TopControl, VolumeControl, SpeedControl, Speed, Shevron, DropdownContent, SpeedOption, PlayerControl, TimeDisplay, LinksContainer, Links } from './styles';

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
      controlRef.style.background = `linear-gradient(to right, #4545ff 0%, #4545ff ${value}%, rgb(92, 92, 92) ${value}%, rgb(92, 92, 92) 100%)`;
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
        <PlayerBg>
          <TopControl>
            <audio
              ref={audioRef}
              src={"https://admin.tulsio.cz"+url}
              onLoadedMetadata={handleLoadedMetadata}
              onTimeUpdate={handleTimeUpdate}
            ></audio>
            <VolumeControl>
              <img
                ref={volumeImgRef}
                onClick={handleVolumeIconClick}
                src="/img/volume.svg"
                alt="volume"
              />
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
                <img
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
                <img ref={playPauseImgRef} src="/img/play.svg" alt="Play" />
              </button>

              <div onClick={handleForwardClick}>
                <img
                  src="/img/arrow1.svg"
                  alt="forward"
                  style={{ transform: transformStyle, transition: 'transform 0.5s' }}
                />
                <span>10</span>
              </div>
            </PlayerControl>

            <SpeedControl>
              <Speed 
                showDropdown={showSpeedOptions} 
                onClick={toggleDropdown}
                ref={dropdownRef}
              >
                <p>{`${playbackRate}×`}</p>
                <Shevron 
                  src="/img/shevron.svg" 
                  alt="speed" 
                  clicked={showSpeedOptions} 
                />
                <DropdownContent showDropdown={showSpeedOptions}>
                  {[0.5, 0.75, 1, 1.25, 1.5, 1.75, 2].map((option) => (
                    <SpeedOption
                      key={option}
                      onClick={() => handleSpeedChange(option)}
                    >
                      {`${option}×`}
                    </SpeedOption>
                  ))}
                </DropdownContent>
              </Speed>
            </SpeedControl>
          </TopControl>
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
        </PlayerBg>
        <LinksContainer>
          <Links>
            <p>Poslouchejte na</p>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src='/img/apple-podcasts-icon.svg' alt="Apple Podcasts" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src='/img/googlepodcasts.svg' alt="Google Podcasts" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src='/img/spotify-icon.svg' alt="Spotify" />
            </a>
          </Links>
        </LinksContainer>
      </Container>

        </>
  );
};

export default AudioPlayer;
