import React from "react";

import LargeLeftCard from "./LargeLeftCard";
import SmallRightCards from "./SmallRightCards";

import '../../styles/homeSections/largeSmallSection.css';

const LargeSmallSection = ({ Heading = 'Heading', largeCardData, smallCardData = []}) => {

    return (
        <section className="large-small-section-parent">
            <div>
                <p className="large-small-heading">{Heading}</p>
            </div>
            <div className="large-small-section">
                <div className="left-large">
                    {largeCardData.map((card, index) => (
                        <SmallRightCards 
                            key={index} 
                            image={card.image} 
                            name={card.name} 
                            season={card.season} 
                        />
                    ))}
                </div>
                <div className="right-large">
                    {smallCardData.map((card, index) => (
                        <SmallRightCards 
                            key={index} 
                            image={card.image} 
                            name={card.name} 
                            season={card.season} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LargeSmallSection;
