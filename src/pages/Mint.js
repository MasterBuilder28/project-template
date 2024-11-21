// pages/Mint.js
import React, { useState } from 'react';
import { ethers } from 'ethers';
import contractABI from '../FDCSignleImage.json';  // Update path if needed

const contractAddress = "0xb6C8733bb088933520E79cAE9fE9e1C0d1A24ff5";  // Replace with your deployed contract address

function Mint() {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");

  // Request access to the user's Ethereum wallet
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);

        // Set up provider and signer
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();

        // Connect to the contract
        const contractInstance = new ethers.Contract(contractAddress, contractABI, signer);
        setContract(contractInstance);
      } catch (error) {
        console.error("Error connecting wallet", error);
      }
    } else {
      alert("MetaMask is not installed. Please install it to use this app: https://metamask.io/download.html");
    }
  };

  // Function to mint NFT
  const mintNFT = async () => {
    if (window.ethereum && contract) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();

        // Ensure the contract has the correct signer
        const contractWithSigner = contract.connect(signer);

        const price = await contractWithSigner.mintPrice();
        console.log("Mint price fetched:", price.toString());

        // Mint an NFT to the connected account
        const tx = await contractWithSigner.mint(account, { value: price });
        console.log("Transaction submitted:", tx);

        await tx.wait(); // Wait for the transaction to be mined
        setStatusMessage("NFT Minted Successfully!");
      } catch (error) {
        console.error("Error minting NFT", error);
        setStatusMessage("Error minting NFT. Please try again.");
      }
    } else {
      alert("Please connect your wallet first.");
    }
  };

  return (
    <div className="mint-container">
      <h2>Mint Your NFT</h2>
      {!account ? (
        <button onClick={connectWallet}>Connect Wallet</button>
      ) : (
        <div>
          <p>Connected as: {account}</p>
          <button onClick={mintNFT}>Mint NFT</button>
        </div>
      )}
      {statusMessage && <p>{statusMessage}</p>}
    </div>
  );
}

export default Mint;
