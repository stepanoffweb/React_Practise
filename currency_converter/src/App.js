import React, {useState, useEffect} from 'react'
import './App.css'
import CurrencyRow from './CurrencyRow'

function App() {
  const BASE_URL = 'https://api.exchangeratesapi.io/latest'
  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [amount, setAmount] = useState(1)
  const [amountFromTo, setAmountFromTo] = useState(true)
  const [rate, setRate] = useState(1)

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        const firstCurrency = Object.keys(data.rates)[0]
        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
        setFromCurrency(data.base)
        setToCurrency(firstCurrency)
        setRate(data.rates[firstCurrency])
      })
  }, [])

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
        .then(res => res.json())
        .then(data => setRate(data.rates[toCurrency]))
    }
  }, [fromCurrency, toCurrency])

  const handleChangeFromAmount = (e) => {
    setAmount(e.target.value)
    setAmountFromTo(true)
  }

  const handleChangeToAmount = (e) => {
    setAmount(e.target.value)
    setAmountFromTo(false)
  }

  let fromAmount, toAmount
    if (amountFromTo) {
      fromAmount = amount
      toAmount = amount * rate
    } else {
      toAmount = amount
      fromAmount = amount / rate
    }

  return <>
    <h1>Convert Your Currency:</h1>
      <CurrencyRow
        currencyOptions={currencyOptions}
        actualCurrency={fromCurrency}
        changeCurrency={e => setFromCurrency(e.target.value)}
        amount={fromAmount}
        changeAmount={handleChangeFromAmount}
      />

      <div className="equals" >=</div>

      <CurrencyRow
        currencyOptions={currencyOptions}
        actualCurrency={toCurrency}
        changeCurrency={e => setToCurrency(e.target.value)}
        amount={toAmount}
        changeAmount={handleChangeToAmount}
       />
    </>
}

export default App
