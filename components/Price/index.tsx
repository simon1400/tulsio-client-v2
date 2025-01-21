import React from 'react'

import { PriceS } from './styled'

const Price: React.FC<{ price: number; availability?: boolean }> = ({ price, availability }) => {
  const formattedPrice = new Intl.NumberFormat('cs-CZ', {
    style: 'currency',
    currency: 'CZK',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)

  const availabilityLabel = availability ? 'Skladem' : 'Není skladem'

  return (
    <PriceS availability={availability}>
      <div>
        <b>{formattedPrice}</b>
      </div>
      <div>
        <span>{'včetně DPH'}</span>
        <label>{availability !== undefined ? availabilityLabel : ''}</label>
      </div>
    </PriceS>
  )
}

export default Price
