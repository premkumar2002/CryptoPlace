import React, { useContext, useEffect, useState } from "react";
import { CoinContext } from "../context/CoinContext";
import {Link} from 'react-router-dom'

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState('');

  // Function to filter coins based on input
  const filterCoins = (inputValue) => {
    if (!inputValue) {
      setDisplayCoin(allCoin);
      return;
    }
    const filteredCoins = allCoin.filter((item) =>
      item.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setDisplayCoin(filteredCoins);
  };

  // Handle input changes
  const inputHandler = (event) => {
    const value = event.target.value;
    setInput(value);
    filterCoins(value); // Filter coins in real-time
  };

  // Handle search button click
  const searchHandler = (event) => {
    event.preventDefault();
    filterCoins(input); // Re-filter coins based on current input
  };

  // Set initial display coins when allCoin changes
  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  return (
    <div className="mt-[5%] flex flex-col items-center justify-center">
      <div className="max-w-md w-full py-4 text-white">
        <h1 className="text-4xl font-bold mb-4 text-center pb-4">
          Largest <br /> Crypto Marketplace
        </h1>
        <p className="text-gray-400 mb-6 text-center text-sm">
          Welcome to the world's largest cryptocurrency marketplace. Sign up to explore more about cryptos.
        </p>
        <form onSubmit={searchHandler} className="flex items-center bg-white text-black shadow-lg overflow-hidden rounded-full">
          <input
            type="text"
            onChange={inputHandler}
            value={input}
            placeholder="Search crypto..."
            list='coinlist'
            className="flex-grow px-4 py-2 border-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
          />

          <datalist id='coinlist'>
            {allCoin.map((item,index)=>(<option key={index} value={item.name}/>))}
          </datalist>
          <button
            type="submit"
            className="px-4 py-1 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mr-1"
          >
            Search
          </button>
        </form>
      </div>

      <div className="mt-6 w-full max-w-4xl md:w-[80%] overflow-hidden rounded-xl bg-gradient-to-b from-[#0b004e] via-[#1d152f] to-[#002834] shadow-lg">
        <div className="grid grid-cols-5 gap-2 px-6 py-4 text-sm font-semibold text-white">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p>24h Change</p>
          <p>Market Cap</p>
        </div>
        <div className="divide-y divide-gray-700">
          {displayCoin.slice(0, 10).map((item) => (
            <Link to={`/coin/${item.id}`} key={item.id} className="grid grid-cols-5 gap-2 px-6 py-4 text-sm text-gray-200">
              <span>{item.market_cap_rank}</span>
              <span className="flex items-center space-x-2">
                <img loading="lazy" src={item.image} className="h-5 w-5" alt={item.name} />
                <span>{item.name} - {item.symbol}</span>
              </span>
              <span>{currency.symbol} {item.current_price.toLocaleString()}</span>
              <span className={item.market_cap_change_percentage_24h < 0 ? 'text-red-500' : 'text-green-500'}>
                {Math.floor(item.market_cap_change_percentage_24h * 100) / 100}%
              </span>
              <span>{currency.symbol} {item.market_cap.toLocaleString()}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;