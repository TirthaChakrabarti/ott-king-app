import React from "react";

import SmallCards from "./SmallCards";

import '../../styles/homeSections/smallTwoLinesSection.css';
import { Link } from "react-router-dom";

const SmallTwoLineList = ({ smallCardData = [] }) => {

    return (
        <section className="smallTwoLinesCardsection-parent">
            <div>
                <p className="smallTwolinesCardSection-heading">Top Web Series</p>
            </div>
            <div className="smallTwolinesCardSection">
                {smallCardData.map((card, index) => (
                    <div key={index} className="small-cards-div">
                        <Link to={`/top-web-series/${index}`}>
                            <SmallCards 
                                image={card.image} 
                                name={card.name} 
                                season={card.season} 
                            />
                        </Link>
                    </div>
                    
                ))}
            </div>
        </section>
    );
};

export default SmallTwoLineList
