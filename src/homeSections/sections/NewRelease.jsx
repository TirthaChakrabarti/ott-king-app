import React from "react";

import MovieSlider from "../../utils/movieSliderList/MovieSliderListTwo";

// const NewlyReleasedMoviesList = [
//     "https://www.ottking.info/wp-content/uploads/2024/09/fli.jpg",
//     "https://www.ottking.info/wp-content/uploads/2024/09/Untitled-design-tej.jpg",
//     "https://www.ottking.info/wp-content/uploads/2024/09/lgp.jpg",
//     "https://www.ottking.info/wp-content/uploads/2024/09/kk.jpg",
//     "https://www.ottking.info/wp-content/uploads/2024/09/win.jpg",
//     "https://www.ottking.info/wp-content/uploads/2024/09/par.jpg",
//     "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg",
//     "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg",
// ];

const NewlyReleasedMoviesList = [
    {
      id: 0,
      title: "Movie 1",
      year: "2023",
      storyline: "This is the storyline for Movie 1.",
      releaseDate: "2023-01-01",
      genres: ["Action", "Thriller"],
      actors: ["Actor A", "Actor B"],
      imdbRating: 8.5,
      averageRating: 4.5,
      poster: "https://www.ottking.info/wp-content/uploads/2024/09/fli.jpg",
    },
    {
      id: 1,
      category: "Newly-released-movies",
      title: "Movie 2",
      year: "2021",
      storyline: "This is the storyline for Movie 2.",
      releaseDate: "2021-05-15",
      genres: ["Comedy", "Drama"],
      actors: ["Actor X", "Actor Y"],
      imdbRating: 7.3,
      averageRating: 4.0,
      poster:
        "https://www.ottking.info/wp-content/uploads/2024/09/Untitled-design-tej.jpg",
    },
    {
      id: 2,
      category: "Newly-released-movies",
      title: "Movie 3",
      year: "2023",
      storyline: "This is the storyline for Movie 1.",
      releaseDate: "2023-01-01",
      genres: ["Action", "Thriller"],
      actors: ["Actor A", "Actor B"],
      imdbRating: 8.5,
      averageRating: 4.5,
      poster: "https://www.ottking.info/wp-content/uploads/2024/09/lgp.jpg",
    },
    {
      id: 3,
      category: "Newly-released-movies",
      title: "Movie 4",
      year: "2021",
      storyline: "This is the storyline for Movie 2.",
      releaseDate: "2021-05-15",
      genres: ["Comedy", "Drama"],
      actors: ["Actor X", "Actor Y"],
      imdbRating: 7.3,
      averageRating: 4.0,
      poster:
        "https://www.ottking.info/wp-content/uploads/2024/09/kk.jpg",
    },
    {
      id: 4,
      category: "Newly-released-movies",
      title: "Movie 5",
      year: "2023",
      storyline: "This is the storyline for Movie 1.",
      releaseDate: "2023-01-01",
      genres: ["Action", "Thriller"],
      actors: ["Actor A", "Actor B"],
      imdbRating: 8.5,
      averageRating: 4.5,
      poster: "https://www.ottking.info/wp-content/uploads/2024/09/win.jpg",
    },
    {
      id: 5,
      category: "Newly-released-movies",
      title: "Movie 6",
      year: "2021",
      storyline: "This is the storyline for Movie 2.",
      releaseDate: "2021-05-15",
      genres: ["Comedy", "Drama"],
      actors: ["Actor X", "Actor Y"],
      imdbRating: 7.3,
      averageRating: 4.0,
      poster:
        "https://www.ottking.info/wp-content/uploads/2024/09/par.jpg",
    },
    {
      id: 6,
      category: "Newly-released-movies",
      title: "Movie 7",
      year: "2023",
      storyline: "This is the storyline for Movie 1.",
      releaseDate: "2023-01-01",
      genres: ["Action", "Thriller"],
      actors: ["Actor A", "Actor B"],
      imdbRating: 8.5,
      averageRating: 4.5,
      poster: "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg",
    },
    {
      id: 7,
      category: "Newly-released-movies",
      title: "Movie 2",
      year: "2021",
      storyline: "This is the storyline for Movie 2.",
      releaseDate: "2021-05-15",
      genres: ["Comedy", "Drama"],
      actors: ["Actor X", "Actor Y"],
      imdbRating: 7.3,
      averageRating: 4.0,
      poster:
        "https://m.media-amazon.com/images/M/MV5BNGE0NzE5Y2ItYjQ3Zi00YzNiLWFhNmMtODhkNjFhNzQ5ZGFlXkEyXkFqcGc@._V1_.jpg",
    },
  ];

const NewlyReleasedMovieList = () => {
    return (
        <div>
            <MovieSlider title="Newly Released Movies" category="Newly-released-movies" movies={NewlyReleasedMoviesList} />
        </div>
    );
}

export default NewlyReleasedMovieList;
