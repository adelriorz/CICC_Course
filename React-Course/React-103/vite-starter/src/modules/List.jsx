import React, { Component } from 'react'

const cryptos = [
    {
        name: "Bitcoin",
        id: 1,
        symbol: "BTC",
        quotes: { CAD: { price: 7199.2314567345 } }
    },
    {
        name: "Ethereum",
        id: 2,
        symbol: "ETH",
        quotes: { CAD: { price: 590.098765 } }
    },
    {
        name: "Dogecoin",
        id: 3,
        symbol: "DGC",
        quotes: { CAD: { price: 117.21536458 } }
    }
];

const CryptoListItem = ({ name, symbol, quotes }) => (
    <li>
        <h3>{name} ({symbol})</h3>
        <p>{quotes.CAD.price.toFixed(2)}</p>

    </li>
)

const CryptoList = ({ currencies }) => (
    <ul>
        {currencies.map(currency => (
            <CryptoListItem
                key={currency.id}
                // name={currency.name}
                // symbol={currency.symbol}
                // quotes={currency.quotes}
                {...currency}
            />
        ))}
    </ul>
)

export default class List extends Component {
    render() {
        return (
            <>
                <h1>List</h1>
                <CryptoList currencies={cryptos} />
            </>
        )
    }
}
