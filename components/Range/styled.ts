import styled from "@emotion/styled";
import { Slider } from "@mui/material";

export const AirbnbSlider = styled(Slider)(({ theme }) => `
  height: 5px;
  padding: 13px 0;
  & .MuiSlider-thumb {
    height: 30px;
    width: 30px;
    background-color: ${theme.palette.primary.main};
    border: 1px solid currentColor;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    &:hover {
      box-shadow: 0 0 0 8px rgba(58, 133, 137, 0.16);
    }
    & .airbnb-bar {
      height: 10px;
      width: 2px;
      border-radius: 5px;
      background-color: rgba(255, 255, 255, 0.8);
      margin-left: 1px;
      margin-right: 1px;
    }
  }
  & .MuiSlider-track {
    height: 5px;
    background-color: ${theme.palette.primary.main};
  }
  & .MuiSlider-rail {
    color: rgba(255, 255, 255, 0.3);
    height: 5px;
    border-radius: 2.5px;
  }
`);

export const RangeS = styled.div(({theme}) => `
  width: 100%;
  margin-bottom: 75px;
  .labels{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > * {
      font-weight: bold;
    }
  }
`)