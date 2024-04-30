import { SliderThumb, Typography } from "@mui/material";
import { ChangeEvent, FC, HTMLAttributes, useState } from "react";
import { AirbnbSlider, RangeS } from "./styled";
import BlockValue from "components/BlockValue";

interface AirbnbThumbComponentProps extends HTMLAttributes<unknown> {}

const AirbnbThumbComponent = (props: AirbnbThumbComponentProps) => {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  );
};

const lavelData = {
  0: "nízký",
  3: "střední",
  6: "velký",
};

const Range: FC<{
  value: number | number[];
  handle: (
    e: Event | ChangeEvent<HTMLInputElement>,
    newValue: number | number[]
  ) => void;
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
        {kg && <BlockValue state="has" value={`${value}`} type="kg" handle={handle} />}
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
