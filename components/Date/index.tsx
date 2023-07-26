import { FC } from "react";
import { DateS } from "./styles"
import { parseDate } from "helpers/parseDate";

export interface IDate {
  color: string;
  data: string;
}

const DateComponent: FC<IDate> = ({color, data}) => {
  const parseNewDate = parseDate(data)
  return (
    <DateS color={color}>
      <span>Aktualizováno {parseNewDate.day}.{parseNewDate.month}.{parseNewDate.year}</span>
    </DateS>
  )
}

export default DateComponent