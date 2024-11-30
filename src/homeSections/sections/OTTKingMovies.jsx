import React from "react";

import MovieSlider from "../../utils/movieSliderList/MovieSliderListTwo";

// const OTTKingMoviesList = [
//     "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg",
//     "https://m.media-amazon.com/images/M/MV5BNGE0NzE5Y2ItYjQ3Zi00YzNiLWFhNmMtODhkNjFhNzQ5ZGFlXkEyXkFqcGc@._V1_.jpg",
//     "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg",
//     "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg",
//     "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg",
//     "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg",
//     "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg",
//     "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg",
// ];

const OTTKingMoviesList = [
    {
      id: 0,
      title: "Movie Title 1",
      poster: "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg",
      releaseDate: "2023-11-01",
      genres: ["Action", "Adventure"],
      imdbRating: 7.5,
    },
    {
      id: 1,
      title: "Movie Title 2",
      poster: "https://m.media-amazon.com/images/M/MV5BNGE0NzE5Y2ItYjQ3Zi00YzNiLWFhNmMtODhkNjFhNzQ5ZGFlXkEyXkFqcGc@._V1_.jpg",
      releaseDate: "2023-12-10",
      genres: ["Comedy", "Drama"],
      imdbRating: 8.2,
    },
    {
      id: 2,
      title: "Movie Title 3",
      poster: "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg",
      releaseDate: "2023-11-15",
      genres: ["Thriller", "Mystery"],
      imdbRating: 6.9,
    },
    {
      id: 3,
      title: "Movie Title 4",
      poster: "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg",
      releaseDate: "2023-12-01",
      genres: ["Action", "Sci-Fi"],
      imdbRating: 7.8,
    },
    {
      id: 4,
      title: "Movie Title 5",
      poster: "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg",
      releaseDate: "2023-12-05",
      genres: ["Drama", "Romance"],
      imdbRating: 7.4,
    },
    {
      id: 5,
      title: "Movie Title 6",
      poster: "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg",
      releaseDate: "2023-12-15",
      genres: ["Animation", "Family"],
      imdbRating: 8.0,
    },
    {
      id: 6,
      title: "Movie Title 7",
      poster: "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg",
      releaseDate: "2023-11-20",
      genres: ["Horror", "Thriller"],
      imdbRating: 6.7,
    },
    {
      id: 7,
      title: "Movie Title 8",
      poster: "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg",
      releaseDate: "2023-12-25",
      genres: ["Adventure", "Fantasy"],
      imdbRating: 7.9,
    },
  ];
  

const OTTKingMovieList = () => {
    return (
        <div>
            <MovieSlider title="OTT King Movies" movies={OTTKingMoviesList} />
        </div>
    );
}

export default OTTKingMovieList;
