import React from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { Link, Outlet, useLocation } from "react-router-dom";

const HeroSection = () => {
  const { publicKey } = useWallet();
  const location = useLocation();

  const isSendRoute = location.pathname === "/send";
  const isReceiveRoute = location.pathname === "/receive";

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 md:p-8 rounded-lg shadow-lg text-center mb-8">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Welcome to CryptoTracker
      </h1>
      <p className="text-md md:text-lg text-gray-100 mb-6">
        "The future of money is digital and decentralized."
      </p>
      <div className="flex justify-center mb-6">
        <WalletMultiButton className="wallet-adapter-button-custom" />
      </div>

      {publicKey && (
        <div className="mt-6">
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mb-6">
            <Link
              to="/send"
              className="wallet-action-button bg-green-500 hover:bg-green-600"
            >
              Swipe to Send Money
            </Link>
            <Link
              to="/receive"
              className="wallet-action-button bg-blue-500 hover:bg-blue-600"
            >
              Receive Money
            </Link>
          </div>

          <div className="mt-6">
            {(isSendRoute || isReceiveRoute) && (
              <div className="mt-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <Outlet />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
