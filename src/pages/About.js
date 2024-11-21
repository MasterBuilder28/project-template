import React from 'react';

function About() {
  return (
    <div className="page">
      <h2>About This Project</h2>
      <p>This project is designed to connect NFT holders with unique opportunities. Here's what you can expect:</p>
      
      <h3>Project Roadmap</h3>
      <ul className="roadmap">
        <li><strong>Stage 1: Buy Asset</strong> - Acquiring the asset for the project.</li>
        <li><strong>Stage 2: Whitelist Challenges</strong> - Exclusive whitelist opportunities for early supporters.</li>
        <li><strong>Stage 3: Community Giveaways</strong> - Engaging our community with giveaways and rewards.</li>
        <li><strong>Stage 4: Mint Launch</strong> - Official launch of the NFT minting.</li>
        <li><strong>Stage 5: Start Sending ETH</strong> - Begin distributing ETH back to the NFT holders.</li>
      </ul>
    </div>
  );
}

export default About;
