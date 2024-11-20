import React from "react";
import StaticShowList from "../../utils/StaticList/StaticShowList";

const OTTKingSpecialsList = [
    "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg",
    "https://m.media-amazon.com/images/M/MV5BNGE0NzE5Y2ItYjQ3Zi00YzNiLWFhNmMtODhkNjFhNzQ5ZGFlXkEyXkFqcGc@._V1_.jpg",
    "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg",
    "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg",
];

const OTTKingSpecialTwo = () => {
    return (
        <div>
            <StaticShowList movies={OTTKingSpecialsList}/>
        </div>
    );
}

export default OTTKingSpecialTwo;
