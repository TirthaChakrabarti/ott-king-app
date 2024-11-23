import React, { useState } from "react";

import PriceCard from "./priceCard";
import LogoSection from "../LogoSection/LogoSection";
// import FullLogoList from "../LogoSection/FullLogoList";

const PriceSection = ({ plans= [], logoList = [] }) => {

  const [showFullList, setShowFullList] = useState(false);
  const [currentLogoList, setCurrentLogoList] = useState([]);

  const handleShowFullList = (logoList) => {
    setCurrentLogoList(logoList);
    setShowFullList(true);
  };

  const handleHideFullList = () => {
    setShowFullList(false);
    setCurrentLogoList([]);
  };

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
            logoList={logoList[index]}
            onShowFullList={() => handleShowFullList(logoList[index])}
        />
      ))}

      {showFullList && (
        <div className="pricecard-overlay" onClick={handleHideFullList}>
          <div className="pricecard-modal">
            <button
              className="pricecard-close-button"
              onClick={handleHideFullList}
            >
              &times;
            </button>
            <LogoSection
              className="pricecard-logo-section-full"
              logoList={currentLogoList}
            />
            {/* <FullLogoList className="full-logo-list"/> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceSection;
