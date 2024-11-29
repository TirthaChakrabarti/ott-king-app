import React from "react";

import { Link } from "react-router-dom";

import LargeLeftCard from "./LargeLeftCard";
import SmallRightCards from "./SmallRightCards";

import "../../styles/homeSections/largeSmallSection.css";

const LargeSmallSection = ({
  Heading = "Heading",
  largeCardData = [],
  smallCardData = [],
}) => {
  return (
    <section className="large-small-section-parent">
      <div>
        <p className="large-small-heading">{Heading}</p>
      </div>
      <div className="large-small-section">
        <div className="left-large">
          {largeCardData.map((card, index) => (
            <Link to={`/deal-of-the-week/{${index}}`}>
              <LargeLeftCard
                key={index}
                image={card.image}
                name={card.name}
                season={card.season}
              />
            </Link>
          ))}
        </div>
        <div className="right-large">
          {smallCardData.map((card, index) => (
            <Link to={`/deal-of-the-week/{${index}}`}>
              <SmallRightCards
                key={index}
                image={card.image}
                name={card.name}
                season={card.season}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LargeSmallSection;
