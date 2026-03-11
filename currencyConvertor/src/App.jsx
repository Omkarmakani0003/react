import { useState } from 'react'
import Inputcard from './components/Inputcard'
import useCurrency from './hooks/useCurrency'

import './App.css'

function App() {

  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedamount] = useState(0)
  const [FromCurrency, setCurrency] = useState("usd")
  const [ToCurrency, setConvertedcurrency] = useState("inr")
 
  const Currencyinfo = useCurrency(FromCurrency)
  const Options = Object.keys(Currencyinfo)

  const Convert = () =>{
     setConvertedamount(amount * Currencyinfo[ToCurrency])
  }
 
  const swap = ()=>{
      setCurrency(ToCurrency)
      setConvertedcurrency(FromCurrency)
      setAmount(convertedAmount)
      setConvertedamount(amount)
  }

  return (
  <div className="wrapper">
    <h2>Currency Converter</h2>
    <div className="container">
      
      <Inputcard 
         label="From"
         amount={amount}
         currencyOptions={Options} 
         selectedcurrency = {FromCurrency}
         onChangeAmount={(Amount)=>{ setAmount(Amount) }} 
         onChangeCurrency={(Currency)=>{ setCurrency(Currency) }}
      />
      <button className="swap-btn" onClick={swap}>⇅</button>
      
      <Inputcard 
          label="To" 
          amount={convertedAmount}
          currencyOptions={Options} 
          selectedcurrency = {ToCurrency}
          onChangeAmount={(convertedAmount)=>{ setConvertedamount(convertedAmount) }}
          onChangeCurrency={(convertedCurrency)=>{ setConvertedcurrency(convertedCurrency) }}
          disable={true}
      />
      <button className="convert-btn" onClick={Convert}>Convert Currency</button>
    </div>
  </div>
  )
}

export default App
