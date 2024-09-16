// useCryptoData.js
import { useState, useEffect } from "react";
import axios from "axios";

const useCryptoData = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets",
        {
          params: {
            vs_currency: "usd",
            order: "market_cap_desc",
            per_page: 100,
            page: 1,
            sparkline: false,
            price_change_percentage: "24h,7d",
          },
        }
      );
      setCoins(response.data);
    };

    fetchData();
  }, []);

  return coins;
};

export default useCryptoData;
