import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const CoinContext = createContext();

const CoinContextProvider = (props) => {

    const [allCoin, setAllCoin] = useState([]);
    const [currency, setCurrency] = useState({
        name: "usd",
        symbol: "$"
    })

    const fetchAllCoin = async () => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              'x-cg-demo-api-key': 'CG-NuACXagg8iw4bMXTB9jpq778'
            }
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(res => res.json())
            .then(res => setAllCoin(res))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        fetchAllCoin();
    },[currency])
    const contextvalue = {
        allCoin, currency, setCurrency
    }
    return (
        <CoinContext.Provider value={contextvalue}>
            {props.children} 
        </CoinContext.Provider>
    )
}

export default CoinContextProvider;