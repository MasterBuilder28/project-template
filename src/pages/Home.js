import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <section className="intro-section">
        <h1>Welcome to OxOffers</h1>
        <p>
          This platform is built to make high-barrier investment opportunities accessible to everyone. Using our custom profit distribution contract, asset owners can share profits from various cashflow-producing assets with NFT holders, creating a unique and liquid investment experience.
        </p>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <p>
          Each project has a smart contract connected to an NFT collection, which allows the contract owner to distribute profits directly to NFT holders. By owning an NFT from a project, you have access to a portion of the cashflow from that asset, whether it’s a business, real estate, or other revenue-generating investments.
        </p>
      </section>

      <section className="use-case">
        <h2>Example Use Case</h2>
        <p>
          Imagine a trucking business that wants to expand its fleet. Instead of financing vehicles traditionally, the business owner can launch an NFT project to recoup an investment into new vehicles. Investors can purchase the NFTs in a limited sale, and as the newly acquired vehicles generate income, a portion of the profit is distributed back to NFT holders.
        </p>
        <p>
          This allows the business owner recoups their investment quickly, while while onchain investors can convert their crypto to cash-flowing assets without dealing with traditional currency exchanges.
        </p>
      </section>

      <section className="benefits">
        <h2>Why Invest with Us?</h2>
        <ul>
          <li><strong>Accessibility:</strong> Gain exposure to high-value assets without large initial investments.</li>
          <li><strong>Liquidity:</strong> NFTs can be traded, offering liquidity for traditionally illiquid assets.</li>
          <li><strong>Stability:</strong> NFTs value is derived from the backing of a real world asset.</li>
          <li><strong>Cashflow:</strong> Earnings are distributed as ETH to NFT holders, maximizing returns.</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
