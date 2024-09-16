// components/MarketCap.js
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/solid";

const MarketCap = () => {
  return (
    <div className="bg-white p-6 shadow rounded-lg">
      {/* Use flex-col on small screens, flex-row on larger screens */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h3 className="text-2xl font-bold mb-4 md:mb-0">
          Cryptocurrency Prices by Market Cap
        </h3>
        <div className="flex space-x-8">
          <div className="text-right">
            <h4 className="text-xl font-semibold">$2,123,534,526,856</h4>
            <p className="flex items-center text-red-600">
              <ArrowDownIcon className="h-5 w-5 mr-1" />
              Market Cap &nbsp; <span className="text-sm">▼ 4.6%</span>
            </p>
          </div>
          <div className="text-right">
            <h4 className="text-xl font-semibold">$65,213,378,213</h4>
            <p className="flex items-center text-green-600">
              <ArrowUpIcon className="h-5 w-5 mr-1" />
              24h Trading Volume
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketCap;
