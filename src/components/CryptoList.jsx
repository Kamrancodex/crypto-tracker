import React, { useState } from "react";
import useCryptoData from "../hooks/useCryptoData";

const CryptoList = () => {
  const coins = useCryptoData();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white dark:bg-gray-800 p-4 md:p-6 shadow rounded-lg mt-6">
      <input
        type="text"
        placeholder="Search coins"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border rounded w-full mb-4 text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700"
      />
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b dark:border-gray-700">
              <th className="py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                #
              </th>
              <th className="py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Coin
              </th>
              <th className="py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Price
              </th>
              <th className="py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                24h %
              </th>
              <th className="py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                7d %
              </th>
              <th className="py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Market Cap
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredCoins.map((coin, index) => (
              <tr
                key={coin.id}
                className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <td className="py-4 text-sm text-gray-800 dark:text-gray-200">
                  {index + 1}
                </td>
                <td className="py-4 flex items-center text-sm text-gray-800 dark:text-gray-200">
                  <img
                    src={coin.image}
                    alt={coin.name}
                    className="w-6 h-6 mr-2"
                  />
                  <span className="font-medium">{coin.name}</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-2 uppercase">
                    ({coin.symbol})
                  </span>
                </td>
                <td className="py-4 text-right text-sm text-gray-800 dark:text-gray-200">
                  ${coin.current_price.toLocaleString()}
                </td>
                <td
                  className={`py-4 text-right text-sm ${
                    coin.price_change_percentage_24h > 0
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {coin.price_change_percentage_24h !== undefined
                    ? coin.price_change_percentage_24h.toFixed(2)
                    : "0.00"}
                  %
                </td>
                <td
                  className={`py-4 text-right text-sm ${
                    coin.price_change_percentage_7d_in_currency > 0
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {coin.price_change_percentage_7d_in_currency !== undefined
                    ? coin.price_change_percentage_7d_in_currency.toFixed(2)
                    : "0.00"}
                  %
                </td>
                <td className="py-4 text-right text-sm text-gray-800 dark:text-gray-200">
                  ${coin.market_cap.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CryptoList;
