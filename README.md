# CryptoTracker - Solana Wallet and Cryptocurrency Tracker

![CryptoTracker](/thumbnail.png)

CryptoTracker is a web app built using React, Solana, and the CoinGecko API. It allows users to connect their Solana wallet, send and receive SOL, check wallet balances, and track real-time cryptocurrency prices and trends.

---

## 📖 Overview

CryptoTracker combines the power of **Solana Wallet Adapter** and the **CoinGecko API** to offer an all-in-one cryptocurrency platform. Users can:

- Connect their Solana wallet to check balances.
- Send and receive SOL to and from other wallets.
- View real-time prices and market data for popular cryptocurrencies.
- Discover trending coins based on CoinGecko's insights.

---

## 🎨 Features

1. **Wallet Connection**: Easily connect your Solana wallet (Phantom Wallet supported) to interact with the blockchain.
2. **Send and Receive SOL**: Transfer SOL to other wallets using their public addresses.
3. **Check Wallet Balance**: View your wallet’s balance directly on the app.
4. **Real-Time Cryptocurrency Prices**: Get up-to-date price information for top cryptocurrencies.
5. **Trending Coins**: Discover trending coins in the market and see which coins are gaining popularity.

---

## 🚀 Technologies Used

- **React**: Frontend framework for building the user interface.
- **Solana Wallet Adapter**: Integration for connecting Solana wallets.
- **Solana Web3.js**: Used for blockchain transactions like sending and receiving SOL.
- **CoinGecko API**: For fetching real-time cryptocurrency data such as prices and market trends.
- **Tailwind CSS**: For styling and responsive design.
- **React Router**: For handling navigation between different views in the app.

---

## 📸 Screenshots

![CryptoTracker Screenshot](https://your-image-url.com/screenshot.png)

---

## 🔧 Installation and Setup

To get started with this project locally, follow these steps:

### 1. Clone the repository

```
git clone https://github.com/your-username/cryptotracker.git
cd cryptotracker
```

2. Install dependencies
   Ensure you have Node.js installed, then run the following command to install the required dependencies:

```
npm install
```

3. Start the development server
   To run the app locally, use:

```
npm run dev
```

The app will be available at http://localhost:5173.

📦 Deployment
To create a production build and deploy the project:

Build the app for production:

```
npm run build
```

Serve the build:

```
npm run serve
```

Or deploy it to your preferred hosting platform like Netlify, Vercel, or GitHub Pages.

🛠️ Project Structure

```
src/
│
├── components/
│   ├── HeroSection.jsx         // Hero section with connect wallet, send, and receive features
│   ├── SendMoney.jsx           // Form to send SOL to another wallet
│   ├── ReceiveMoney.jsx        // Display wallet address and QR code for receiving SOL
│   ├── BalanceDisplay.jsx      // Display connected wallet balance
│   ├── CryptoList.jsx          // Fetch and display cryptocurrency list
│   ├── TrendingCoins.jsx       // Display trending coins from CoinGecko API
│   └── MarketCap.jsx           // Display global cryptocurrency market data
│
├── hooks/
│   └── useCryptoData.js        // Custom hook for fetching cryptocurrency data
│
├── App.jsx                     // Main app component and routing
├── index.jsx                   // React entry point
└── ...
```

### 🧑‍💻 How to Use

Connect Wallet: Click the "Connect Wallet" button to connect your Solana wallet (Phantom wallet is supported).
Send SOL: Enter the recipient’s wallet address and the amount of SOL you wish to send.
Receive SOL: Click "Receive Money" to view your wallet address and QR code for receiving SOL.
View Balance: Once connected, your SOL balance will automatically appear on the home page.
Check Prices: Scroll down to see real-time prices of popular cryptocurrencies, including the latest market trends.

### ⚡ Future Enhancements

#### In future releases, we plan to add:

Historical Price Data: Display historical price charts for individual coins.
Custom Alerts: Allow users to set alerts for coin prices.
Multi-Currency Support: Enable the ability to send and receive tokens other than SOL.
More Wallet Integrations: Add support for additional Solana wallets.

### 🤝 Contributing

Contributions are welcome! If you'd like to contribute to the project, please fork the repository and submit a pull request. For major changes, open an issue to discuss what you'd like to change.

#### 📄 License

This project is licensed under the MIT License. See the LICENSE file for more information.

#### 🌟 Acknowledgments

Solana for providing the infrastructure and tools to build decentralized apps.
CoinGecko for their amazing cryptocurrency data API.
React & Tailwind CSS for making it easy to build modern UIs.
