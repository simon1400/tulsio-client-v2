import type { FC } from 'react'

import { Grid } from '@mui/material'

import { ColorLabelS } from './styled'

const colorMap: { [key: string]: { background: string; text: string } } = {
  red: { background: '#A50D5A', text: '#FFFFFF' },
  green: { background: '#99FF99', text: '#000000' },
  yellow: { background: '#FFF899', text: '#000000' },
  purple: { background: '#4545FF', text: '#FFFFFF' },
}

export interface LabelData {
  attributes: {
    title: string
    color: string
  }
}

interface ColorLabelProps {
  labels: LabelData[]
  direction?: 'row' | 'column'
}

const ColorLabel: FC<ColorLabelProps> = ({ labels, direction = 'row' }) => {
  return labels.length > 0 ? (
    <Grid container direction={direction} spacing={2}>
      {labels.map((label, index) => {
        const { background, text } = colorMap[label.attributes.color]
        return (
          <Grid item key={index}>
            <ColorLabelS color={text} style={{ backgroundColor: background }}>
              {label.attributes.title}
            </ColorLabelS>
          </Grid>
        )
      })}
    </Grid>
  ) : null
}

export default ColorLabel
