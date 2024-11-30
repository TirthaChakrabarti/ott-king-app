import React from "react";

import MovieSlider from "../../utils/movieSliderList/MovieSliderListThree";

const OTTKingSportsList = [
    "https://www.ottking.info/wp-content/uploads/2023/11/SPORTS-1.jpg",
    "https://www.ottking.info/wp-content/uploads/2023/11/sports-2.jpg",
    "https://www.ottking.info/wp-content/uploads/2023/11/Untitled-design-3-8.jpg",
    "https://www.ottking.info/wp-content/uploads/2023/11/Untitled-design4.jpg",
    "https://www.ottking.info/wp-content/uploads/2023/11/Untitled-design4.jpg",
    "https://www.ottking.info/wp-content/uploads/2023/11/Untitled-design-5-7.jpg",
    "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg",
    "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg",
];

const OTTKingSports = () => {
    return (
        <div>
            <MovieSlider title="OTT King Sports" movies={OTTKingSportsList} />
        </div>
    );
}

export default OTTKingSports;
