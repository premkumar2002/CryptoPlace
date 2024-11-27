import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CoinContext } from '../context/CoinContext';
import LimeChart from '../components/LimeChart';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full border-t-4 border-b-4 border-gray-200 h-16 w-16"></div>
    </div>
  );
};

const Coin = () => {
  const { id } = useParams();
  const [coinData, setCoinData] = useState(null);
  const [hisCoinData, setHisCoinData] = useState(null);
  const { currency } = useContext(CoinContext);

  const fetchCoinData = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': 'CG-NuACXagg8iw4bMXTB9jpq778'
      }
    };

    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`, options);
      const data = await response.json();
      setCoinData(data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchHisCoinData = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': 'CG-NuACXagg8iw4bMXTB9jpq778'
      }
    };
    
    fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options)
      .then(res => res.json())
      .then(res => setHisCoinData(res))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchCoinData();
    fetchHisCoinData();
  }, [currency]);

  if (!coinData || !hisCoinData) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <img src={coinData.image.large} alt={coinData.name} className="w-16 h-16 mr-4" />
        <h1 className="text-3xl font-bold">
          {coinData.name} <span className="text-gray-500">{coinData.symbol.toUpperCase()}</span>
        </h1>
      </div>
      
      <div className="mb-8">
        <LimeChart hisCoinData={hisCoinData}/>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <div className="bg-white rounded-lg shadow-md p-6 bg-opacity-10">
          <h2 className="text-lg font-semibold mb-2 text-white">Crypto Market Rank</h2>
          <p className="text-3xl font-bold text-blue-600">{coinData.market_cap_rank}</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6  bg-opacity-10">
          <h2 className="text-lg font-semibold mb-2  text-white">Current Price</h2>
          <p className="text-3xl font-bold text-green-600">
            {currency.symbol} {coinData.market_data.current_price[currency.name].toLocaleString()}
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 px-4  bg-opacity-10">
          <h2 className="text-lg font-semibold mb-2  text-white">Market Cap</h2>
          <p className="text-3xl font-bold text-purple-600">
            {currency.symbol} {coinData.market_data.market_cap[currency.name].toLocaleString()}
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6  bg-opacity-10">
          <h2 className="text-lg font-semibold mb-2  text-white">24 Hour High</h2>
          <p className="text-3xl font-bold text-red-600">
            {currency.symbol} {coinData.market_data.high_24h[currency.name].toLocaleString()}
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6  bg-opacity-10">
          <h2 className="text-lg font-semibold mb-2  text-white">24 Hour Low</h2>
          <p className="text-3xl font-bold text-indigo-600">
            {currency.symbol} {coinData.market_data.low_24h[currency.name].toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;

