import React, { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { PublicKey, Transaction, SystemProgram } from "@solana/web3.js";
import { Connection } from "@solana/web3.js";

const SendMoney = () => {
  const { publicKey, sendTransaction, connected } = useWallet(); // Check if wallet is connected
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionStatus, setTransactionStatus] = useState(null);

  // Connect to Solana devnet
  const connection = new Connection(
    "https://api.devnet.solana.com",
    "confirmed"
  );

  const handleSend = async () => {
    if (!connected) {
      alert("Please connect your wallet before sending the transaction.");
      return;
    }

    if (!publicKey || !recipient || !amount) {
      alert("Please fill in all fields and ensure the wallet is connected.");
      return;
    }

    try {
      const recipientPubKey = new PublicKey(recipient);
      const lamports = parseFloat(amount) * 1_000_000_000;

      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: recipientPubKey,
          lamports,
        })
      );

      const signature = await sendTransaction(transaction, connection);
      await connection.confirmTransaction(signature, "processed");

      setTransactionStatus(`Transaction successful! Signature: ${signature}`);
    } catch (error) {
      console.error("Transaction failed", error);
      setTransactionStatus(`Transaction failed: ${error.message}`);
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl mb-4 text-gray-800 dark:text-white">Send SOL</h2>
      <input
        type="text"
        placeholder="Recipient Address"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        className="input-field mb-4"
      />
      <input
        type="number"
        placeholder="Amount in SOL"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="input-field mb-4"
      />
      <button onClick={handleSend} className="swipe-button w-full">
        Swipe to Send
      </button>

      {transactionStatus && (
        <p className="mt-4 text-lg font-semibold">{transactionStatus}</p>
      )}
    </div>
  );
};

export default SendMoney;
