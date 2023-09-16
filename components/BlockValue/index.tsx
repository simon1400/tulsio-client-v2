import { ChangeEvent, FC } from "react";
import { BlockValueS } from "./styled";

const BlockValue: FC<{
  value: string;
  handle: (e: Event | ChangeEvent<HTMLInputElement>, newValue: number | number[]) => void;
  type: string;
}> = ({ value, handle, type }) => {
  return (
    <BlockValueS>
      <input value={value} onChange={(e) => handle(e, +e.target.value)} />
      <span>{type}</span>
    </BlockValueS>
  );
};

export default BlockValue;
