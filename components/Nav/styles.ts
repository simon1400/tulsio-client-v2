import styled from "@emotion/styled";

export const CSubMenu = styled.div<{removeMargin?: boolean; mobile: boolean; subMenu?: boolean;}>(({subMenu, theme, removeMargin, mobile}) => `
  margin-bottom: ${removeMargin ? '0' : '80px'};
  padding-right: ${mobile ? '30px' : "0"};
  padding-left: ${mobile ? '30px' : "0"};
  padding-bottom: ${mobile ? '30px' : "0"};

  overflow-y: hidden;
  height: ${subMenu ? "41px" : "42px"};

  margin-left: ${subMenu ? '-15px' : 0};
  width: ${subMenu ? 'calc(100% + 30px)' : 'auto'};
  
  ul{
    margin: 0;

    padding: ${subMenu ? "7px" : "2px"} 0 0 15px;
    white-space: ${subMenu ? "nowrap" : "wrap"};
    ${subMenu ? "overflow-x: scroll;" : ""}
    ${subMenu ? "height: calc(100% + 20px);" : ""}
    li{
      display: ${mobile ? "block" : "inline-block"};
      ${mobile ? "text-align: right; margin-bottom: 10px;" : ""}
      &:not(:first-of-type) {
        margin-left: ${mobile ? "0" : "15px"};
      }
      &:not(:last-of-type) {
        margin-right: ${mobile ? "0" : "15px"};
      }
      &.active{
        a{
          color: white;
          opacity: 1;
          &:before{
            display: block;
          }
        }
      }
      a{
        color: ${theme.palette.text.secondary};
        font-size: ${mobile ? "27px" : "20px"};
        opacity: .85;
        font-weight: 600;
        line-height: 1.25;
        text-decoration: none;
        transition: all .5s ease;
        display: ${mobile ? "block" : "flex"};
        position: relative;
        &:before{
          content: '';
          display: none;
          position: absolute;
          width: calc(100% + 30px);
          left: -15px;
          top: -6px;
          height: 38px;
          background: ${mobile ? "transparent" : theme.palette.primary.main};
          border-radius: 20px;
          z-index: -1;
        }
        &:hover{
          color: ${theme.palette.text.secondary};
          opacity: 1;
          &:after{
            display: block;
          }
        }
        svg{
          fill: ${theme.palette.text.secondary};
          position: relative;
          opacity: .85;
          top: 5px;
          &:hover{
            opacity: 1;
          }
        }
      }
    }
  }

  ${[theme.breakpoints.down("xxl")]} {
    margin-bottom: ${removeMargin ? '0' : '50px'};
  }
  ${[theme.breakpoints.down("xl")]} {
    margin-bottom: ${removeMargin ? '0' : '40px'};
  }
  ${[theme.breakpoints.down("lg")]} {
    margin-bottom: ${removeMargin ? '0' : '30px'};
  }

  ${[theme.breakpoints.down("md")]} {
    display: flex;
    justify-content: ${subMenu ? "flex-start" : "flex-end"};
  }
  
  ${theme.breakpoints.down('sm')} {
    margin-left: ${mobile ? 0 : "-10px"};
    width: ${mobile ? 'auto' : "calc(100% + 20px)"};
    height: ${subMenu ? "41px" : "auto"};
    ul{
      margin: 0;
      padding: 0${subMenu ? " 15px" : ""};
      padding-top: ${subMenu ? "3px" : ""};
      li{
        &:not(:first-of-type) {
          margin-left: ${subMenu ? "10px" : "0"};
        }
        &:not(:last-of-type) {
          margin-right: ${subMenu ? "10px" : "0"};
        }
        &.active{
          a{
            color: ${subMenu ? "#ffffff" : theme.palette.primary.main};
          }
        }
        a{
          font-size: ${subMenu ? "15px" : "27px"};
          &:before{
            width: calc(100% + 15px);
            left: -7px;
            height: 30px;
            top: -5px;
          }
        }
      }
    }
  }
  
`)