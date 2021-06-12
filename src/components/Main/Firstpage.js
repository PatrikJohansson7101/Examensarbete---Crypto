/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coin from './Coin';
import CurrencyPicker from './CurrencyPicker';
import { useAuth } from '../../contexts/AuthContext';

function firstpage() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const [currentCurrency, changeCurrency] = useState('USD');

  // Get data from API when component renders.
  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currentCurrency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, [currentCurrency]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const setCurrency = (currency) => {
    changeCurrency(currency);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a crypto currency</h1>
        <form>
          <input
            type="text"
            placeholder="Search"
            className="coin-input"
            onChange={handleChange}
          />
        </form>
      </div>
      <div className="currency-picker">
        <CurrencyPicker
          setCurrency={setCurrency}
          currentCurrency={currentCurrency}
        />
      </div>

      {filteredCoins.map((coin) => (
        <Coin
          currentCurrency={currentCurrency}
          key={coin.id}
          name={coin.name}
          image={coin.image}
          symbol={coin.symbol}
          marketcap={coin.market_cap}
          price={coin.current_price}
          priceChange={coin.price_change_percentage_24h}
          volume={coin.total_volume}
        />
      ))}
    </div>
  );
}

export default firstpage;
