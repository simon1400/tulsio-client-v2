import { SliderThumb, Typography } from "@mui/material";
import { FC, HTMLAttributes, useState } from "react";
import { AirbnbSlider, RangeS } from "./styled";
import BlockValue from "components/BlockValue";

interface AirbnbThumbComponentProps extends HTMLAttributes<unknown> {}

function AirbnbThumbComponent(props: AirbnbThumbComponentProps) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  );
}

const lavelData = {
  20: "hovno",
  40: "mensi hovno",
  60: "uz lip",
  80: "chybi pivo",
  100: "du na pivo"
}

const Range: FC<{
  value: number | number[];
  handle: (e: Event, newValue: number | number[]) => void;
  label: string;
  min: number;
  max: number;
  step: number;
  defaultValue: number;
  kg?: boolean;
}> = ({ value, handle, label, min, max, step, defaultValue, kg = false }) => {
  return (
    <RangeS>
      <div className="labels">
        <Typography gutterBottom>{label}</Typography>
        {/* @ts-ignore */}
        {!kg && <Typography gutterBottom>{lavelData[value]}</Typography>}
        {kg && <BlockValue value={`${value} kg`}/>}
      </div>
      <AirbnbSlider
        slots={{ thumb: AirbnbThumbComponent }}
        defaultValue={defaultValue}
        value={value}
        onChange={handle}
        step={step}
        min={min}
        max={max}
      />
    </RangeS>
  );
};

export default Range;
