import React from "react";

import PriceCard from "./priceCard";

const PriceSection = ({ plans= [], logoList = [] }) => {
  return (
    <div className="price-section-wrapper">
      {plans.map((plan, index) => (
        <PriceCard
            key={index}
            name={plan.name}
            price={plan.price}
            feature1={plan.features[0]}
            feature2={plan.features[1]}
            feature3={plan.features[2]}
            feature4={plan.features[3]}
            logoList={logoList}
        />
      ))}
    </div>
  );
};

export default PriceSection;
