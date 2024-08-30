import styled from '@emotion/styled';

export const ProgressWrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 135px;
  max-width: 900px;
  width: 100%;
  height: 25px;

  @media (max-width: 499px) {
    top: 92px;
    height: 5px;
  }

  input {
    cursor: pointer;
    box-sizing: border-box;
    width: 100%;
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    z-index: 1;

    &::-webkit-slider-runnable-track {
      height: 25px;
      background: transparent;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 0;
      height: 0;
      background: transparent;
    }

    &::-moz-range-thumb {
      width: 0;
      height: 0;
      background: transparent;
    }
  }
`;

export const RectGen = styled.div`
  box-sizing: border-box;
  padding: 0 15px;
  position: absolute;
  width: 100%;
  display: flex;
  gap: 2px;
  pointer-events: none;
  transform: rotateX(180deg);
`;

export const Rect = styled.div<{ className?: string }>`
  display: inline-block;
  background-color: #FFFFFF2E;
  transition: background-color 0.3s ease, height 0.3s ease;

  &.hover-left {
    background-color: rgba(69, 69, 255, 0.5);
  }

  &.played {
    background-color: #4545FF;
  }
`;

export const HoverRect = styled.div`
  position: absolute;
  background-color: rgb(55, 55, 55);
  color: white;
  font-size: 14px;
  text-align: center;
  line-height: 30px;
  border-radius: 5px;
  z-index: 10;
  font-family: manrope;
`;