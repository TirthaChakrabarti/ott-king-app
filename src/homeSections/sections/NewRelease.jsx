import React from "react";

import MovieSlider from "../../utils/movieSliderList/MovieSliderListTwo";

const NewlyReleasedMoviesList = [
    "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg",
    "https://m.media-amazon.com/images/M/MV5BNGE0NzE5Y2ItYjQ3Zi00YzNiLWFhNmMtODhkNjFhNzQ5ZGFlXkEyXkFqcGc@._V1_.jpg",
    "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg",
    "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg",
    "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg",
    "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg",
    "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg",
    "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg",
];

const NewlyReleasedMovieList = () => {
    return (
        <div>
            <MovieSlider title="Newly Released Movies" movies={NewlyReleasedMoviesList} />
        </div>
    );
}

export default NewlyReleasedMovieList;
