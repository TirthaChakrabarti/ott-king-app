import React from "react";

const LargeLeftCard = ( {image, name, season} ) => {
    return (
        <div className="large-card">
            <img className="large-poster"
                src={image} 
                alt={name} 
            />
            <div className="large-card-text">
                <h2>{name}</h2>
                <p>{season}</p>
            </div>
        </div>
    );
};

export default LargeLeftCard;