import styled from "@emotion/styled";
import { Tab, Tabs } from "@mui/material";

export const CSubMenu = styled.div<{removeMargin?: boolean}>(({removeMargin}) => `
  margin-bottom: ${removeMargin ? '0' : '90px'};
  .wrap-sub-menu{
    margin-left: -15px;
  }
  .MuiTabs-root {
    min-height: auto;
  }
  .MuiTabs-indicator{
    display: flex;
    height: 100%;
    border-radius: 20px;
    min-height: auto;
    z-index: -1;
    justify-content: center;
  }
`)

export const TabS = styled(Tab)`
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  text-transform: none;
  font-size: 1.25em;
  font-weight: 600;
  padding: 3px 15px 5px;
  min-width: auto;
  display: block;
  min-height: auto;
  transition: all .5s ease;
  &:hover{
    color: white;
  }
  .MuiTouchRipple-root {
    border-radius: 20px;
  }
  &.Mui-selected {
    color: white;
  }
`