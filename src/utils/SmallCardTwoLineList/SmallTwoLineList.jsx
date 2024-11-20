import React from "react";

import SmallCards from "./SmallCards";

import '../../styles/homeSections/smallTwoLinesSection.css';

const LargeSmallSection = ({ Heading = 'Heading', largeCardData, smallCardData = []}) => {

    return (
        <section className="smallTwoLinesCardsection-parent">
            <div>
                <p className="smallTwolinesCardSection-heading">{Heading}</p>
            </div>
            <div className="smallTwolinesCardSection">
                {smallCardData.map((card, index) => (
                    <SmallCards 
                        key={index} 
                        image={card.image} 
                        name={card.name} 
                        season={card.season} 
                    />
                ))}
            </div>
        </section>
    );
};

export default LargeSmallSection;
