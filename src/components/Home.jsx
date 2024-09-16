// Home.jsx
import React from "react";
import MarketCap from "./MarketCap";
import TrendingCoins from "./TrendingCoins";
import CryptoList from "./CryptoList";
import HeroSection from "./HeroSection";
import BalanceDisplay from "./BalanceDisplay";
import { Outlet } from "react-router-dom"; // Import Outlet for nested routing

const Home = () => {
  return (
    <div className="container mx-auto p-6 pt-16 sm:pt-24">
      {/* Hero Section with Connect Wallet */}
      <HeroSection />

      {/* Show Balance if Wallet is Connected */}
      <BalanceDisplay />

      {/* Market Cap Section */}
      <MarketCap />

      {/* Trending Coins Section */}
      <TrendingCoins />

      {/* Crypto List Section */}
      <CryptoList />
    </div>
  );
};

export default Home;
