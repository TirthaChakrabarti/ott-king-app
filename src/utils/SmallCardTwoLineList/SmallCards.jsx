import React from "react";

const SmallCards = ( {image, name, season} ) => {
    return (
        <div className="small-card">
            <img className="small-poster"
                src={image} 
                alt={name} 
            />
            <div className="small-card-text">
                <p>{name}</p>
                <p>{season}</p>
            </div>
        </div>
    )
};

export default SmallCards;