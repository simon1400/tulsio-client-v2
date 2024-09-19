import React from "react"
import { PriceS } from "./styled"

const Price: React.FC<{ price: number }> = ({ price }) => {
  const formattedPrice = new Intl.NumberFormat('cs-CZ', {
    style: 'currency',
    currency: 'CZK',
  }).format(price);

  return (
    <PriceS>
      <div>
        <b>{formattedPrice}</b>
      </div>
      <div>
        <span>včetně DPH</span>
        <label>Skladem</label>
      </div>
    </PriceS>
  );
};


export default Price