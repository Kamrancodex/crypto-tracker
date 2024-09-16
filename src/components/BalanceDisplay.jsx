// components/BalanceDisplay.jsx
import React, { useEffect, useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

const BalanceDisplay = () => {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    if (publicKey) {
      connection.getBalance(publicKey).then((balance) => {
        setBalance(balance / LAMPORTS_PER_SOL);
      });
    }
  }, [connection, publicKey]);

  if (!publicKey) return null;

  return (
    <div className="text-gray-800 dark:text-gray-200">
      Balance: {balance ? balance.toFixed(4) : "Loading..."} SOL
    </div>
  );
};

export default BalanceDisplay;
