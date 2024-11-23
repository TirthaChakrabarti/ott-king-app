import React from 'react';

import '../styles/home/priceSection.css';

import { Link } from 'react-router-dom';

import PriceSection from '../utils/priceSection/priceSection';

const plansData = [
  {
    name: "Basic Plan",
    price: "Free",
    features: [
      "✓ Get unlimited access to thousands of shows and movies with limited ads", 
      "✓ Watch on your favorite devices", 
      "✓ Switch plans or cancel anytime", 
      "✓ Download from thousands of titles to watch offline"
    ],
  },
  {
    name: "Gold Plan",
    price: "$19.99/month",
    features: [
      "✓ Get unlimited access to thousands of shows and movies with limited ads", 
      "✓ Watch on your favorite devices", 
      "✓ Switch plans or cancel anytime", 
      "✓ Download from thousands of titles to watch offline"
    ],
  },
  {
    name: "Diamond Plan",
    price: "$29.99/month",
    features: [
      "✓ Get unlimited access to thousands of shows and movies with limited ads", 
      "✓ Watch on your favorite devices", 
      "✓ Switch plans or cancel anytime", 
      "✓ Download from thousands of titles to watch offline"
    ],
  },
];

const logoList = [
  [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgcwWkYHYoyEQgeLZNszkwQo135F_JfVR6w&s',
    'https://upload.wikimedia.org/wikipedia/commons/5/5a/Zee5-official-logo.jpeg',
    'https://play-lh.googleusercontent.com/-qJGSkZMRoaFIk4dwqwWQ_mRIFs5XbeX2GIXv8S4vq8YzaHJ5boOEwjayyZY8G0u2jE',
    'https://play-lh.googleusercontent.com/27MJyZrte7jaPCkmXETN6-6Bry93Tmb4Jmz3rREJrDrjQ0HNcXrlD90KrNkf6L_bpDw',
    'https://play-lh.googleusercontent.com/bIYlrMjal6an_GSBsn-k6NevSC5yv7q_0ej8ZVM_1Br_UEeG0-chDO2xS5JI4Xw3sQ',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgcwWkYHYoyEQgeLZNszkwQo135F_JfVR6w&s',
    'https://play-lh.googleusercontent.com/bIYlrMjal6an_GSBsn-k6NevSC5yv7q_0ej8ZVM_1Br_UEeG0-chDO2xS5JI4Xw3sQ',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgcwWkYHYoyEQgeLZNszkwQo135F_JfVR6w&s',
  ], 
  [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgcwWkYHYoyEQgeLZNszkwQo135F_JfVR6w&s',
    'https://upload.wikimedia.org/wikipedia/commons/5/5a/Zee5-official-logo.jpeg',
    'https://play-lh.googleusercontent.com/-qJGSkZMRoaFIk4dwqwWQ_mRIFs5XbeX2GIXv8S4vq8YzaHJ5boOEwjayyZY8G0u2jE',
    'https://play-lh.googleusercontent.com/27MJyZrte7jaPCkmXETN6-6Bry93Tmb4Jmz3rREJrDrjQ0HNcXrlD90KrNkf6L_bpDw',
    'https://play-lh.googleusercontent.com/bIYlrMjal6an_GSBsn-k6NevSC5yv7q_0ej8ZVM_1Br_UEeG0-chDO2xS5JI4Xw3sQ',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgcwWkYHYoyEQgeLZNszkwQo135F_JfVR6w&s',
    'https://play-lh.googleusercontent.com/bIYlrMjal6an_GSBsn-k6NevSC5yv7q_0ej8ZVM_1Br_UEeG0-chDO2xS5JI4Xw3sQ',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgcwWkYHYoyEQgeLZNszkwQo135F_JfVR6w&s',
    'https://play-lh.googleusercontent.com/bIYlrMjal6an_GSBsn-k6NevSC5yv7q_0ej8ZVM_1Br_UEeG0-chDO2xS5JI4Xw3sQ',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgcwWkYHYoyEQgeLZNszkwQo135F_JfVR6w&s',
    'https://play-lh.googleusercontent.com/bIYlrMjal6an_GSBsn-k6NevSC5yv7q_0ej8ZVM_1Br_UEeG0-chDO2xS5JI4Xw3sQ',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgcwWkYHYoyEQgeLZNszkwQo135F_JfVR6w&s',
    'https://play-lh.googleusercontent.com/-qJGSkZMRoaFIk4dwqwWQ_mRIFs5XbeX2GIXv8S4vq8YzaHJ5boOEwjayyZY8G0u2jE',
    'https://play-lh.googleusercontent.com/27MJyZrte7jaPCkmXETN6-6Bry93Tmb4Jmz3rREJrDrjQ0HNcXrlD90KrNkf6L_bpDw',
    'https://play-lh.googleusercontent.com/bIYlrMjal6an_GSBsn-k6NevSC5yv7q_0ej8ZVM_1Br_UEeG0-chDO2xS5JI4Xw3sQ',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgcwWkYHYoyEQgeLZNszkwQo135F_JfVR6w&s'
  ],
  [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgcwWkYHYoyEQgeLZNszkwQo135F_JfVR6w&s',
    'https://upload.wikimedia.org/wikipedia/commons/5/5a/Zee5-official-logo.jpeg',
    'https://play-lh.googleusercontent.com/-qJGSkZMRoaFIk4dwqwWQ_mRIFs5XbeX2GIXv8S4vq8YzaHJ5boOEwjayyZY8G0u2jE',
    'https://play-lh.googleusercontent.com/27MJyZrte7jaPCkmXETN6-6Bry93Tmb4Jmz3rREJrDrjQ0HNcXrlD90KrNkf6L_bpDw',
    'https://play-lh.googleusercontent.com/bIYlrMjal6an_GSBsn-k6NevSC5yv7q_0ej8ZVM_1Br_UEeG0-chDO2xS5JI4Xw3sQ',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgcwWkYHYoyEQgeLZNszkwQo135F_JfVR6w&s',
    'https://play-lh.googleusercontent.com/bIYlrMjal6an_GSBsn-k6NevSC5yv7q_0ej8ZVM_1Br_UEeG0-chDO2xS5JI4Xw3sQ',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgcwWkYHYoyEQgeLZNszkwQo135F_JfVR6w&s',
    'https://play-lh.googleusercontent.com/bIYlrMjal6an_GSBsn-k6NevSC5yv7q_0ej8ZVM_1Br_UEeG0-chDO2xS5JI4Xw3sQ',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgcwWkYHYoyEQgeLZNszkwQo135F_JfVR6w&s',
    'https://play-lh.googleusercontent.com/bIYlrMjal6an_GSBsn-k6NevSC5yv7q_0ej8ZVM_1Br_UEeG0-chDO2xS5JI4Xw3sQ',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgcwWkYHYoyEQgeLZNszkwQo135F_JfVR6w&s',
    'https://play-lh.googleusercontent.com/bIYlrMjal6an_GSBsn-k6NevSC5yv7q_0ej8ZVM_1Br_UEeG0-chDO2xS5JI4Xw3sQ',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgcwWkYHYoyEQgeLZNszkwQo135F_JfVR6w&s',
    'https://play-lh.googleusercontent.com/bIYlrMjal6an_GSBsn-k6NevSC5yv7q_0ej8ZVM_1Br_UEeG0-chDO2xS5JI4Xw3sQ',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgcwWkYHYoyEQgeLZNszkwQo135F_JfVR6w&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgcwWkYHYoyEQgeLZNszkwQo135F_JfVR6w&s',
    'https://upload.wikimedia.org/wikipedia/commons/5/5a/Zee5-official-logo.jpeg',
    'https://play-lh.googleusercontent.com/-qJGSkZMRoaFIk4dwqwWQ_mRIFs5XbeX2GIXv8S4vq8YzaHJ5boOEwjayyZY8G0u2jE',
    'https://play-lh.googleusercontent.com/27MJyZrte7jaPCkmXETN6-6Bry93Tmb4Jmz3rREJrDrjQ0HNcXrlD90KrNkf6L_bpDw',
    'https://play-lh.googleusercontent.com/bIYlrMjal6an_GSBsn-k6NevSC5yv7q_0ej8ZVM_1Br_UEeG0-chDO2xS5JI4Xw3sQ',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgcwWkYHYoyEQgeLZNszkwQo135F_JfVR6w&s',
    'https://play-lh.googleusercontent.com/bIYlrMjal6an_GSBsn-k6NevSC5yv7q_0ej8ZVM_1Br_UEeG0-chDO2xS5JI4Xw3sQ',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgcwWkYHYoyEQgeLZNszkwQo135F_JfVR6w&s',
    'https://play-lh.googleusercontent.com/bIYlrMjal6an_GSBsn-k6NevSC5yv7q_0ej8ZVM_1Br_UEeG0-chDO2xS5JI4Xw3sQ',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgcwWkYHYoyEQgeLZNszkwQo135F_JfVR6w&s',
    'https://play-lh.googleusercontent.com/bIYlrMjal6an_GSBsn-k6NevSC5yv7q_0ej8ZVM_1Br_UEeG0-chDO2xS5JI4Xw3sQ',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgcwWkYHYoyEQgeLZNszkwQo135F_JfVR6w&s',
    'https://play-lh.googleusercontent.com/bIYlrMjal6an_GSBsn-k6NevSC5yv7q_0ej8ZVM_1Br_UEeG0-chDO2xS5JI4Xw3sQ',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgcwWkYHYoyEQgeLZNszkwQo135F_JfVR6w&s',
    'https://play-lh.googleusercontent.com/bIYlrMjal6an_GSBsn-k6NevSC5yv7q_0ej8ZVM_1Br_UEeG0-chDO2xS5JI4Xw3sQ',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgcwWkYHYoyEQgeLZNszkwQo135F_JfVR6w&s'
  ]
]

const PricesSection = () => {
  return (
    <section className="price-parent">
      <div className="price-overlay"></div>
      <div className="price-content">
        <h1 className="price-heading">
          Choose a Plan That Suits Your Need
        </h1>
        <PriceSection className="price-section"
          plans={plansData} 
          logoList={logoList}
        />
        <Link to="/">
          <button variant="primary" className="home-button">
            Home
          </button>
        </Link>
      </div>
    </section>
  );
};

export default PricesSection;
