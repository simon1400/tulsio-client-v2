import styled from "@emotion/styled";

export const Search = styled.div`
  margin-bottom: 80px;
  svg{
    fill: white;
  }
  input{
    color: white;
    font-size: 1.25em;
    font-weight: 600;
    &::placeholder{
      color: rgba(255, 255, 255, 0.85);
      opacity: 1;
    }
  }
  .MuiInputBase-root{
    padding: 12px 15px;
    max-width: 480px;
    width: 100%;
    &:before{
      display: none;
    }
    &::after {
      background: #2b2b2b;
      border-radius: 33px;
      z-index: -1;
      height: 100%;
      border-bottom: none;
    }
    &:hover{
      &:before{
        visibility: hidden;
      }
    }
    .MuiInputAdornment-positionEnd{
      cursor: pointer;
    }
    &.activeInput{
      &::after {
        transform: scaleX(1) translateX(0);
        left: 0;
        right: none;
      }
    }
  }
`