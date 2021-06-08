/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coin from './Coin';
import { Button } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"

 function firstpage() {
    const [coins, setCoins] = useState([]);
     const [search, setSearch] = useState('');
     const [error, setError] = useState("")
     const { currentUser, logout } = useAuth()
     const history = useHistory()

      // Get data from API when component renders.
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      }).catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
    const foo = 'bar';
  };

  const filteredCoins = coins
    .filter((coin) => coin.name.toLowerCase()
      .includes(search.toLowerCase()));
  
async function handleLogout() {
        setError("")
    
        try {
          await logout()
          history.push("/login")
        } catch {
          setError("Failed to log out")
        }
      }
     return (
        
         
         <div className="coin-app">
               <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
        <div className="coin-search">
          <h1 className="coin-text">Search a currency</h1>
          <form>
            <input type="text" placeholder="Search" className="coin-input" onChange={handleChange} />
          </form>
        </div>       
        {filteredCoins.map((coin) => (
          <Coin
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
        
    )
}

export default firstpage;
