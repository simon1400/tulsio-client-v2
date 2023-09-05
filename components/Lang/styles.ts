import styled from "@emotion/styled";

export const LangS = styled.div(({theme}) => `
  position: relative;
  margin-left: 40px;
  ${theme.breakpoints.down("md")} {
    margin-top: 13px;
    margin-right: 10px;
    margin-left: 0;
  }
  .button-lang{
    width: 88px;
    height: 40px;
    border: solid 1.5px ${theme.palette.text.secondary}4D;
    border-radius: 22px;
    padding: 4px 23px;
    background-color: rgba(69, 69, 255, 0);
    font-size: 16px;
    text-transform: uppercase;
    display: flex;
    color: ${theme.palette.text.secondary};
    justify-content: space-between;
    cursor: pointer;
    transition: all .2s ease;
    &:hover{
      border-color: ${theme.palette.text.secondary};
    }
    ${theme.breakpoints.down("md")} {
      height: 24px;
      width: 59px;
      font-size: 13px;
      padding: 0px 9px;
    }
    svg{
      fill: ${theme.palette.text.secondary};
      min-width: 25px;
      margin-left: 7px;
      
      transform-origin: center;
      transition: all .2s ease;
      ${theme.breakpoints.down("md")} {
        margin-left: 2px;
      }
    }
    &.active {
      svg{
        transform: rotate(180deg);
      }
    }
  }
  .dropdown-lang{
    position: absolute;
    background: #393939CC;
    border-radius: 22px;
    min-width: 140px;
    left: 50%;
    margin-top: 10px;
    transform: translateX(-50%);
    overflow: hidden;
    display: none;
    z-index:1000;
    ${theme.breakpoints.down("md")} {
      background: #393939;
    }
    &.active {
      display: block;
    }
    ul{
      margin: 0;
      padding: 0;
      li{
        display: block;
        padding-left: 0;
        a{
          display: flex;
          color: white;
          text-decoration: none;
          padding: 9px 20px;
          font-size: 16px;
          line-height: 1.56;
          transition: all .5s ease;
          justify-content: space-between;
          align-items: center;
          white-space: nowrap;
          &:hover{
            background-color: rgba(255, 255, 255, 0.2);
          }
          svg{
            fill: white;
            width: 25px;
          }
        }
      }
    }
  }
`)