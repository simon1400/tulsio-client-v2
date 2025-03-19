import type { ChangeEvent, FC, HTMLAttributes } from 'react'

import { SliderThumb, Typography } from '@mui/material'
import BlockValue from 'components/Calculator/BlockValue'

import { AirbnbSlider, RangeS } from './styled'

interface AirbnbThumbComponentProps extends HTMLAttributes<unknown> {}

const AirbnbThumbComponent = (props: AirbnbThumbComponentProps) => {
  const { children, ...other } = props
  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  )
}

const lavelData: Record<number, string> = {
  0: 'nízký',
  3: 'střední',
  6: 'velký',
}

const Range: FC<{
  value: number | number[]
  handle: (e: Event | ChangeEvent<HTMLInputElement>, newValue: number | number[]) => void
  label: string
  min: number
  max: number
  step: number
  defaultValue?: number // Делаем defaultValue НЕОБЯЗАТЕЛЬНЫМ
  kg?: boolean
}> = ({ value, handle, label, min, max, step, defaultValue, kg = false }) => {
  return (
    <RangeS>
      <div className="labels">
        <Typography gutterBottom>{label}</Typography>
        {!kg && <Typography gutterBottom>{lavelData[value as number] || ''}</Typography>}
        {kg && <BlockValue state="has" value={`${value}`} type="kg" handle={handle} />}
      </div>
      <AirbnbSlider
        slots={{ thumb: AirbnbThumbComponent }}
        defaultValue={defaultValue ?? min} // Используем min, если defaultValue не передан
        value={value}
        onChange={handle}
        step={step}
        min={min}
        max={max}
      />
    </RangeS>
  )
}

export default Range