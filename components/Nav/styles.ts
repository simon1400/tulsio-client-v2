import styled from "@emotion/styled";
import { Tab } from "@mui/material";
import theme from "styles/theme";

export const CSubMenu = styled.div<{removeMargin?: boolean; mobile: boolean; subMenu?: boolean;}>(({subMenu, theme, removeMargin, mobile}) => `
  margin-bottom: ${removeMargin ? '0' : '80px'};
  padding-right: ${mobile ? '30px' : ""};
  padding-left: ${mobile ? '30px' : ""};
  padding-bottom: ${mobile ? '30px' : ""};

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
  
  ${theme.breakpoints.down('sm')} {
    margin-left: ${mobile ? 0 : "-10px"};
    width: ${mobile ? 'auto' : "calc(100% + 20px)"};
  }
  .MuiTabs-root {
    min-height: auto;
  }
  .MuiTabs-indicator{
    display: ${mobile ? "none" : "flex"};
    height: 100%;
    border-radius: 20px;
    min-height: auto;
    z-index: -1;
    justify-content: center;
  }
`)

export const TabS = styled(Tab)<{mobile: boolean}>(({mobile}) => `
  color: rgba(255, 255, 255, .85);
  text-decoration: none;
  text-transform: none;
  font-size: 20px;
  line-height: 1.25;
  font-weight: 600;
  padding: 3px 15px 3px;
  min-width: auto;
  display: block;
  min-height: auto;
  transition: all .5s ease;
  vertical-align: middle;
  ${mobile ? `
    max-width: auto;
    align-self: flex-end;
  ` : ""}
  &:hover{
    color: white;
  }
  &[aria-label="iconMenu"] {
    padding: 3px 5px 3px;
    margin-left: 10px;
  }
  .MuiTouchRipple-root {
    border-radius: 20px;
  }
  &.Mui-selected {
    color: white;
    background: ${mobile ? theme.palette.primary.main : "transparent"};
    box-shadow: ${mobile ? "0 3px 6px 0 rgba(0, 0, 0, 0.16)" : "none"};
    border-radius: 20px;
  }
  svg{
    color: rgba(255, 255, 255, .85);
    fill: rgba(255, 255, 255, .85);
    transition: all .2s ease;
    margin-top: 2px;
    margin-bottom: -2px;
    &:hover{
      fill: white;
    }
  }
`)