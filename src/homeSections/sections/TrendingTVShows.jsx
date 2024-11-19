import React from "react";

import MovieSlider from "../../utils/movieSliderList/MovieSliderListTwo";

const TrendingTVShowsList = [
    "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg",
    "https://m.media-amazon.com/images/M/MV5BNGE0NzE5Y2ItYjQ3Zi00YzNiLWFhNmMtODhkNjFhNzQ5ZGFlXkEyXkFqcGc@._V1_.jpg",
    "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg",
    "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg",
    "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg",
    "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg",
    "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg",
    "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg",
];

const TrendingTVShows = () => {
    return (
        <div>
            <MovieSlider title="Trending TV Shows" movies={TrendingTVShowsList} />
        </div>
    );
}

export default TrendingTVShows;