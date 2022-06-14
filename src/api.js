export const getBTCPrice = () => {
  const url = 'https://api.blockchain.com/v3/exchange/tickers/BTC-USDT';
  const params = {
    method: 'GET',
  };
  return fetch(url, params)
    .then((res) => res.json())
    .then((data) => data?.last_trade_price);
};

export const getTransactions = () => {
  const url = 'https://blockstream.info/api/mempool/recent';
  const params = {
    method: 'GET',
  };
  return fetch(url, params)
    .then((res) => res.json());
};
