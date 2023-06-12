import React from 'react';
import './Cards.css'; // Assuming the CSS is stored in a file named Cards.css

const Cards = () => {
  return (
    <div className="container">
    <div className="cards">
      <div className="card content">
        <div className="card-content">
          <div className="card-img">
            <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="Gamer" />
          </div>
          <div className="card-label">E-Sports</div>
          <div className="card-title">
            Eclectiq Esports wins Katowice 2025 Major
          </div>
        </div>
      </div>
      <div className="card content">
        <div className="card-content">
          <div className="card-img">
            <img src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="keyboard" />
          </div>
          <div className="card-label">
            Technology
          </div>
          <div className="card-title">
            How the EQ Team made 50 billion in the year of 2024
          </div>
        </div>
      </div>
      <div className="card content">
        <div className="card-content">
          <div className="card-img">
            <img src="https://images.unsplash.com/photo-1519326844852-704caea5679e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2034&q=80" alt="Controller" />
          </div>
          <div className="card-label">
            Consoles
          </div>
          <div className="card-title">
        
          </div>
        </div>
      </div>
      <div className="card form">
        <div className="form-title">Sign Up</div>
      </div>
    </div>
    </div>
  );
};

export default Cards;
