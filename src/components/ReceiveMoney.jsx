// components/ReceiveMoney.jsx
import React from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import QRCode from "react-qr-code";

const ReceiveMoney = () => {
  const { publicKey } = useWallet();

  if (!publicKey) {
    return <div>Please connect your wallet first.</div>;
  }

  const walletAddress = publicKey.toBase58();

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl mb-4">Receive SOL</h2>
      <p className="mb-4">Your Wallet Address:</p>
      <p className="font-mono bg-gray-200 p-2 rounded">{walletAddress}</p>
      <div className="mt-6">
        <QRCode value={walletAddress} size={128} />
      </div>
    </div>
  );
};

export default ReceiveMoney;
