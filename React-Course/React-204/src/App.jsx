import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { configKeys } from './config'

function App() {
  const [exchangeRate, setExchangeRate] = useState(0)

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': configKeys.xRapidAPIKey,
      'X-RapidAPI-Host': configKeys.xRapidAPIHost
    }
  };

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch('https://currency-exchange.p.rapidapi.com/exchange?from=CAD&to=JPY&q=1', options)
      const data = await response.json()
      setExchangeRate(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="App">
      <h2>Exchange Rate of CAD to JPY</h2>
      <h5>{exchangeRate}</h5>
    </div>
  )
}

export default App
