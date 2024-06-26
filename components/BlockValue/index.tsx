import { ChangeEvent, FC, useState } from "react";
import { BlockValueS } from "./styled";
import { ClickAwayListener } from "@mui/material";

const BlockValue: FC<{
  value: string;
  handle: (e: Event | ChangeEvent<HTMLInputElement>, newValue: number) => void;
  type: string;
  center?: boolean
  state: string
}> = ({ value, handle, type, center = false, state }) => {

  const [focus, setFocus] = useState(false)

  return (
    <ClickAwayListener onClickAway={() => setFocus(false)}>
      <BlockValueS center={center} focus={focus} onClick={() => setFocus(state === 'has')}>
        <input value={value} disabled={state !== 'has'} onChange={(e) => handle(e, +e.target.value)} />
        <span>{type}</span>
      </BlockValueS>
    </ClickAwayListener>
  );
};

export default BlockValue;
