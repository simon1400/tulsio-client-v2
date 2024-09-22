import type { FC } from 'react'

import { parseDate } from 'helpers/parseDate'

import { DateS } from './styles'

export interface IDate {
  color: string
  data: string
}

const DateComponent: FC<IDate> = ({ color, data }) => {
  const parseNewDate = parseDate(data)
  return (
    <DateS color={color}>
      <span>
        {'Aktualizováno '}
        {parseNewDate.day}
        {'.'}
        {parseNewDate.month}
        {'.'}
        {parseNewDate.year}
      </span>
    </DateS>
  )
}

export default DateComponent
