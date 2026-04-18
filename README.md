☁️ AA Drive – Decentralized File Sharing System
A Blockchain-Powered Alternative to Traditional Cloud Storage

🚀 Overview
AA Drive is a decentralized file-sharing application inspired by modern cloud storage platforms like Google Drive — but built entirely on blockchain and distributed storage technologies.

Instead of relying on centralized servers, this application uses:

Ethereum Smart Contracts to manage file access and ownership
IPFS (via Pinata) to store actual file content

This ensures security, transparency, and user-controlled access.

🧠 Core Concept
Unlike traditional storage systems:
📁 File Content → Stored on IPFS (decentralized storage)
🔗 File References (URLs) → Stored on Ethereum blockchain

This separation allows for scalable, secure, and tamper-resistant file sharing.

✨ Features

🔐 Wallet-Based Access
Connect using MetaMask
Files are linked to your Ethereum wallet address

📤 Upload Files
Upload files directly from your browser
Files are pinned to IPFS using Pinata
IPFS hash is stored on-chain

👀 View Files
View your uploaded files
Access files shared by others (with permission)

🤝 Secure Sharing
Grant access to other Ethereum addresses
Revoke access anytime

🧾 On-Chain Metadata
All file references are securely stored in a smart contract

🎨 Familiar UI
Clean interface inspired by cloud storage platforms

🛠️ Tech Stack
🔗 Blockchain
Solidity – Smart contract development
Hardhat – Development and deployment environment
Ethereum – Blockchain network

🌐 Frontend
React.js – UI development
JavaScript – Logic and interaction
Ethers.js – Blockchain interaction

☁️ Storage
IPFS (via Pinata) – Decentralized file storage

⚙️ How It Works
🔌 Connect your MetaMask wallet
📤 Upload a file
☁️ File is stored on IPFS via Pinata
🔗 IPFS hash is saved in the smart contract
🔐 Grant access to other users
👥 Authorized users can view your files

⚠️ Important Notes
Uses a hardcoded contract address (local Hardhat deployment)
Requires MetaMask and Ethereum provider
Pinata API keys are currently exposed (not production-safe)
Designed for learning and prototype purposes

⭐ Final Note
AA Drive is more than just a project — it represents my step into the world of decentralized applications (dApps) and my commitment to learning cutting-edge technologies.


This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
