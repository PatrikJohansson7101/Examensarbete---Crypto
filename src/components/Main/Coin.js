import React from 'react';

const Coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
  currentCurrency,
}) => (
  <div className="coin-container">
    <div className="coin-row">
      <div className="coin">
        <img src={image} alt="crypto" />
        <h1>{name}</h1>
        <p className="coin-symbol">{symbol}</p>
      </div>
      <div className="coin-data">
        {currentCurrency === 'USD' ? (
          <p className="coin-price">$ {price}</p>
        ) : (
          <p className="coin-price">{price} SEK</p>
        )}
        {currentCurrency === 'USD' ? (
          <p className="coin-volume">$ {volume.toLocaleString()}</p>
        ) : (
          <p className="coin-volume">{volume.toLocaleString()} SEK</p>
        )}
        {priceChange < 0 ? (
          <p className="coin-percet red">{priceChange.toFixed(2)} %</p>
        ) : (
          <p className="coin-percet green">{priceChange.toFixed(2)} %</p>
        )}
        {currentCurrency === 'USD' ? (
          <p className="coin-marketcap">
            Mkt Cap: $ {marketcap.toLocaleString()}
          </p>
        ) : (
          <p className="coin-marketcap">
            Mkt Cap: {marketcap.toLocaleString()} SEK
          </p>
        )}
      </div>
    </div>
  </div>
);

export default Coin;
