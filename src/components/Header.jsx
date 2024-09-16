// components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import BalanceDisplay from "./BalanceDisplay";

const Header = ({ toggleDarkMode }) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="container mx-auto p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          CryptoTracker
        </h1>
        <nav className="hidden md:flex items-center">
          <Link
            to="/"
            className="text-gray-600 dark:text-gray-200 hover:text-blue-600 mx-4"
          >
            Home
          </Link>

          {/* Add more navigation links if needed */}
        </nav>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {/* Mobile menu implementation can be added here */}
          <button>
            {/* Menu icon */}
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            </svg>
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <BalanceDisplay />
          <WalletMultiButton className="wallet-adapter-button-trigger" />
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-600"
            aria-label="Toggle Dark Mode"
          >
            🌓
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
