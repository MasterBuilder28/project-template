import React from 'react';
import founderImage from '../images/founder.jpg';

const Founders = () => {
  return (
    <div className="founders-page">
      <h1>Meet the Founder</h1>
      <div className="founder-info">
        <img src={founderImage} alt="Founder" className="founder-image" />
        <div className="bio">
          <h2>Logan K. Moore</h2>
          <p>
            As the founder of this platform, my vision is to bridge the gap between the world of crypto and real-world assets.
          </p>
          <p>
            Through this platform, investors can hold NFTs linked to income-generating assets—whether they’re in real estate, 
            business ventures, or other cash-flowing opportunities. This approach bypasses the traditional need to convert crypto 
            to fiat currency first, helping investors avoid costly conversion fees and providing a direct route to diversifying 
            their portfolios with physical assets.
          </p>
          <p>
            I’m committed to building a community where crypto capital can seamlessly support real-world projects, empowering 
            both project founders and investors. The potential here goes beyond financial gains; it’s about giving people the 
            tools to participate in meaningful, impactful projects without the usual financial barriers.
          </p>
          <p>
            This platform is just the beginning of a broader mission to democratize access to high-value assets, fostering 
            transparency, security, and growth through innovative use of blockchain technology. Join us as we work to make 
            investments in tangible assets as accessible as possible for crypto enthusiasts everywhere.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Founders;
