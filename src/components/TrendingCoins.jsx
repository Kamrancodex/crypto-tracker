// src/components/TrendingCoins.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/20/solid"; // Use 20px icons for smaller size

const TrendingCoins = () => {
  const [trending, setTrending] = useState([]);
  const [coinsData, setCoinsData] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        setTrending(response.data.coins);
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      }
    };
    fetchTrending();
  }, []);

  useEffect(() => {
    const fetchCoinsData = async () => {
      if (trending.length > 0) {
        try {
          const ids = trending.map((coin) => coin.item.id).join(",");
          const response = await axios.get(
            "https://api.coingecko.com/api/v3/coins/markets",
            {
              params: {
                vs_currency: "usd",
                ids: ids,
                order: "market_cap_desc",
                sparkline: false,
                price_change_percentage: "24h",
              },
            }
          );
          setCoinsData(response.data);
        } catch (error) {
          console.error("Error fetching coin data:", error);
        } finally {
          setLoading(false); // Set loading to false after data is fetched
        }
      }
    };
    fetchCoinsData();
  }, [trending]);

  if (loading) {
    return (
      <div className="bg-white p-6 shadow rounded-lg mt-6">
        <h3 className="font-semibold text-2xl mb-4">Trending Coins</h3>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 shadow rounded-lg mt-6">
      <h3 className="font-semibold text-2xl mb-4">Trending Coins</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {coinsData.map((coin) => (
          <div key={coin.id} className="border p-2 rounded-lg hover:shadow">
            <div className="flex items-center space-x-2">
              <img src={coin.image} alt={coin.name} className="w-8 h-8" />
              <div>
                <a
                  href={`https://www.coingecko.com/en/coins/${coin.id}`}
                  className="text-sm font-bold text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {coin.name}
                </a>
                <p className="text-xs text-gray-600 uppercase">{coin.symbol}</p>
              </div>
            </div>
            <div className="mt-2">
              <p className="text-gray-800 font-semibold text-sm">
                ${coin.current_price.toLocaleString()}
              </p>
              <p
                className={`flex items-center text-xs ${
                  coin.price_change_percentage_24h > 0
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {coin.price_change_percentage_24h > 0 ? (
                  <ArrowUpIcon className="h-4 w-4" />
                ) : (
                  <ArrowDownIcon className="h-4 w-4" />
                )}
                {coin.price_change_percentage_24h.toFixed(2)}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCoins;
