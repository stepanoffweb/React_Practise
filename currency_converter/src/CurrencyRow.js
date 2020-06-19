import React from 'react'

export default function CurrencyRow({currencyOptions, actualCurrency, changeCurrency, changeAmount, amount}) {
  return <>
    <input type="number" className="input" onChange={changeAmount} value={amount} />
    <select className="select" value={actualCurrency} onChange={changeCurrency} >
    {currencyOptions.map(currency =>
      <option key={currency} value={currency}>${currency} </option>
      )
    }
    </select>
  </>
}
