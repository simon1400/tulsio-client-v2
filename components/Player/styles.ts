import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 922px;
  margin: 0 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const PlayerBg = styled.div`
  position: relative;
  max-width: 922px;
  width: 100%;
  height: 159px;
  background-color: rgb(24, 24, 24, 0.7);
  border-radius: 20px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;

  @media (max-width: 499px) {
    height: 116px;
    border-radius: 10px;
  }
`;

export const TopControl = styled.div`
  max-width: 870px;
  width: 100%;
  height: 101px;
  margin: 0 15px;
  display: flex;
  justify-content: space-between;
  align-content: center;

  @media (max-width: 499px) {
    height: 78px;
    margin: 0 15px;
  }
`;

export const TimeDisplay = styled.div`
  position: absolute;
  top: 85px;
  max-width: 900px;
  width: 100%;

  @media (max-width: 499px) {
    top: 60px;
  }

  div {
    margin: 0 15px;
  }

  ul {
    padding-inline-start: 0;
    list-style-type: none;
    display: flex;
    justify-content: space-between;
  }

  li {
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #fff;

    @media (max-width: 499px) {
      font-size: 11px;
    }
  }
`;

export const VolumeControl = styled.div`
  display: flex;
  align-items: center;
  gap: 19px;

  img {
    width: 36px;
    height: 28px;
    opacity: 0.7;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 1;
    }

    @media (max-width: 499px) {
      width: 21px;
      height: 17px;
    }
  }

  input {
    appearance: none;  
    width: 131px;
    height: 5px;
    background: rgb(92, 92, 92);
    background-image: url('/img/Line 54.svg');
    background-position: center;
    background-repeat: no-repeat;
    outline: none;
    border-radius: 10px;
    transition: background 0.3s;

    @media (max-width: 599px) {
      display: none;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 30px;
      height: 30px;
      background-color: #4545ff;
      background-image: url('/img/Line 54.svg');
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 50%;
      transition: background 0.3s;

      @media (max-width: 599px) {
        display: none;
      }
    }

    &::-moz-range-thumb {
      width: 30px;
      height: 30px;
      background-color: #4545ff;
      background-image: url('/img/Line 54.svg');
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 50%;
      transition: background 0.3s;

      @media (max-width: 599px) {
        display: none;
      }
    }
  }
`;

export const PlayerControl = styled.div`
  max-width: 210px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 499px) {
    max-width: 136px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    color: rgba(255, 255, 255);
    opacity: 0.7;
    position: relative;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 1;
    }

    span {
      position: absolute;
      font-family: 'Manrope', sans-serif;
      font-weight: 600;
      font-size: 14px;
      height: 20px;

      @media (max-width: 499px) {
        font-size: 9px;
        height: 13px;
        width: 12px;
      }
    }

    img {
      width: 40px;
      @media (max-width: 499px) {
        width: 27px!important;
      }
    }
    
    @media (max-width: 499px) {
      width: 27px!important;
    }
  }


  button {
    border: none;
    background: none;
    outline: none;
    height: 84px;
    width: 84px;
    background-color: #4545FF;
    border-radius: 50%;
    box-shadow: 0px 3px 6px #00000029;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: height 0.3s ease, width 0.3s ease;

    &:hover {
      height: 92px;
      width: 92px;

      @media (max-width: 499px) {
        height: 56px;
        width: 56px;
      }
    }

    @media (max-width: 499px) {
      height: 56px;
      width: 56px;
    }

    img {
      width: 28px;
      height: 35px;
      
      @media (max-width: 499px) {
        width: 19px;
        height: 22px;
        padding-left: 0;
        padding-top: 0;
      }
    }
  }
`;

export const SpeedControl = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;

  p {
    font-weight: 600!important;
    color: #fff;
    font-family: 'Manrope';
    font-size: 16px;

    @media (max-width: 499px) {
      font-size: 11px;
    }
  }
`;

  export const Speed = styled.div<{showDropdown?: boolean;}>`
  position: relative;
  width: 72px;
  height: 40px;
  background-color: rgb(49, 49, 49);
  border-radius: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  cursor: pointer;

  &:hover {
    background-color: rgb(49, 49, 49);
  }

  @media (max-width: 499px) {
    gap: 8px;
    width: 48px;
    height: 26px;
    border-radius: 7px;
  }
`;

export const Shevron = styled.img<{clicked?: boolean;}>`
  transition: transform 0.3s;
  width: 9px;
  transform: ${({ clicked }) => (clicked ? 'rotate(180deg)' : 'none')};

  @media (max-width: 499px) {
    width: 6px;
  }
`;

export const DropdownContent = styled.div<{ showDropdown?: boolean }>`
  display: ${({ showDropdown }) => (showDropdown ? 'block' : 'none')};
  position: absolute;
  top: 100%; 
  background-color: rgb(49, 49, 49);
  width: 72px;
  border-radius: 11px;
  z-index: 10; 
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  margin-top: 5px;

  @media (max-width: 499px) {
    width: 48px;
    border-radius: 7px;
  }
`;

export const SpeedOption = styled.div`
  padding: 5px 20px;
  opacity: 0.7;
  text-align: start;
  border-radius: 11px;
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  color: #fff;
  font-size: 16px;
  cursor: pointer; 

  &:hover {
    background-color: rgb(75, 75, 75);
    border-radius: 0%;
    opacity: 1;
  }

  &:hover:first-of-type {
    background-color: rgb(75, 75, 75);
    border-top-left-radius: 11px;
    border-top-right-radius: 11px;
    opacity: 1;

    @media (max-width: 499px) {
      border-top-left-radius: 7px;
      border-top-right-radius: 7px;
    }
  }

  &:hover:last-of-type {
    background-color: rgb(75, 75, 75);
    border-bottom-left-radius: 11px;
    border-bottom-right-radius: 11px;
    opacity: 1;

    @media (max-width: 499px) {
      border-bottom-left-radius: 7px;
      border-bottom-right-radius: 7px;
    }
  }

  @media (max-width: 499px) {
    border-radius: 7px;
    padding: 2px 10px;
    font-size: 11px;
  }
`;


export const LinksContainer = styled.div`
  margin-top: 18px;
  display: flex;
  justify-content: flex-end;
  max-width: 922px;
  width: 100%;

  @media (max-width: 499px) {
    margin-top: 15px;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 22px; 
  margin-right: 25px;

  @media (max-width: 499px) {
    gap: 12px;
  }

  p {
    color: #FFFFFFB3;
    font-family: manrope;
    font-size: 16px;
    @media (max-width: 499px) {
      font-size: 11px;
    }
  }

  a {
    position: relative;
    display: inline-block;

    img {
      width: 34px;
      background: none;
      transition: transform 0.3s; 

      @media (max-width: 499px) {
        width: 24px;
      }
    }

    &:hover::before {
      content: "";
      position: absolute;
      top: -10px; 
      left: -10px; 
      width: 54px;
      height: 54px;
      background-image: url('/img/links-bg.svg');
      background-size: cover;
      background-color: rgb(37, 37, 37); 
      border-radius: 50%;
      z-index: -1; 
    }
  }
`;
