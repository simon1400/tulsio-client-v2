import styled from "@emotion/styled";

export const CSubMenu = styled.div<{removeMargin?: boolean; mobile: boolean; subMenu?: boolean;}>(({subMenu, theme, removeMargin, mobile}) => `
  margin-bottom: ${removeMargin ? '0' : '80px'};
  padding-right: ${mobile ? '30px' : "0"};
  padding-left: ${mobile ? '30px' : "0"};
  padding-bottom: ${mobile ? '30px' : "0"};

  margin-left: ${subMenu ? '-15px' : 0};
  width: ${subMenu ? 'calc(100% + 30px)' : 'auto'};

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
    justify-content: flex-end;
  }
  
  ${theme.breakpoints.down('sm')} {
    margin-left: ${mobile ? 0 : "-10px"};
    width: ${mobile ? 'auto' : "calc(100% + 20px)"};
  }
  overflow-y: hidden;
  height: ${subMenu ? "30px" : "auto"};
  
  ul{
    margin: 0;
    padding: 0${subMenu ? " 15px" : " 0"};
    white-space: ${subMenu ? "nowrap" : "wrap"};
    ${subMenu ? "overflow-x: scroll" : ""};
    ${subMenu ? "height: 150%" : ""};
    li{
      display: ${mobile ? "block" : "inline-block"};
      ${mobile ? "text-align: right; margin-bottom: 10px;" : ""}
      &:not(:first-of-type) {
        margin-left: ${mobile ? "0" : "20px"};
      }
      &:not(:last-of-type) {
        margin-right: ${mobile ? "0" : "20px"};
      }
      &.active{
        a{
          &:before{
            display: block;
          }
        }
      }
      a{
        color: rgba(255, 255, 255, 0.85);
        font-size: ${mobile ? "27px" : "20px"};
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
          top: -2px;
          height: 130%;
          background: ${mobile ? "transparent" : theme.palette.primary.main};
          border-radius: 20px;
          z-index: -1;
        }
        &:hover{
          color: white;
        }
        svg{
          fill: white;
          position: relative;
          top: 5px;
        }
      }
    }
    
  }
  
`)