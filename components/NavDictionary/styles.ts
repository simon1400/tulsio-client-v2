import styled from "@emotion/styled";

export const CSubMenu = styled.div<{removeMargin?: boolean; mobile: boolean; subMenu?: boolean;}>(({subMenu, theme, removeMargin, mobile}) => `
  margin-bottom: ${removeMargin ? '0' : '80px'};
  margin-left: ${subMenu ? '-15px' : 0};

  padding-right: ${mobile ? '30px' : "0"};
  padding-left: ${mobile ? '30px' : "0"};
  padding-bottom: ${mobile ? '30px' : "0"};

  width: ${subMenu ? 'calc(100% + 30px)' : 'auto'};
  height: 30px;
  overflow: hidden;

  ${[theme.breakpoints.down("xxl")]} {
    margin-bottom: ${removeMargin ? '0' : '50px'};
  }
  ${[theme.breakpoints.down("xl")]} {
    margin-bottom: ${removeMargin ? '0' : '40px'};
  }
  ${[theme.breakpoints.down("lg")]} {
    margin-bottom: ${removeMargin ? '0' : '30px'};
  }
  
  ${theme.breakpoints.down('sm')} {
    margin-left: ${mobile ? 0 : "-10px"};
    width: auto;
  }
  ul{
    margin: 0;
    padding: 0 15px;
    white-space: nowrap;
    overflow-x: scroll;
    height: calc(100% + 40px);
    li{
      display: inline-block;
      &:not(:first-of-type) {
        margin-left: 20px;
      }
      &:not(:last-of-type) {
        margin-right: 20px;
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
        font-size: 20px;
        font-weight: 600;
        line-height: 1.25;
        text-decoration: none;
        transition: all .5s ease;
        display: flex;
        position: relative;
        &:before{
          content: '';
          display: none;
          position: absolute;
          width: calc(100% + 30px);
          left: -15px;
          top: 0px;
          height: 110%;
          background: ${theme.palette.primary.main};
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