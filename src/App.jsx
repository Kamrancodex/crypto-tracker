import React, { useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import Home from "./components/Home";
import SendMoney from "./components/SendMoney";
import ReceiveMoney from "./components/ReceiveMoney";
import "@solana/wallet-adapter-react-ui/styles.css";

const App = () => {
  const network = clusterApiUrl("devnet");
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

  return (
    <ConnectionProvider endpoint={network}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <Router>
            <Routes>
              {/* Define the parent route with children */}
              <Route path="/" element={<Home />}>
                {/* These are the nested routes */}
                <Route path="send" element={<SendMoney />} />
                <Route path="receive" element={<ReceiveMoney />} />
              </Route>
            </Routes>
          </Router>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default App;
