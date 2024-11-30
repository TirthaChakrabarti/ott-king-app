import React from "react";

import MovieSlider from "../../utils/movieSliderList/MovieSliderListTwo";

// const TrendingMoviesList = [
//     "https://www.ottking.info/wp-content/uploads/2024/09/disco-p-1.jpg",
//     "https://m.media-amazon.com/images/M/MV5BNGE0NzE5Y2ItYjQ3Zi00YzNiLWFhNmMtODhkNjFhNzQ5ZGFlXkEyXkFqcGc@._V1_.jpg",
//     "https://www.ottking.info/wp-content/uploads/2024/09/agent.jpg",
//     "https://www.ottking.info/wp-content/uploads/2024/09/HOI.jpg",
//     "https://www.ottking.info/wp-content/uploads/2024/09/Untitled-design-20.jpg",
//     "https://www.ottking.info/wp-content/uploads/2024/09/Untitled-design-BERLIN.jpg",
//     "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg",
//     "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg",
// ];

const TrendingMoviesList = [
    {
      id: 0,
      title: "Movie 1",
      year: "2023",
      storyline:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quo id excepturi similique veritatis quisquam at consequatur atque illo dolore optio, nesciunt nulla quam quidem. Dolor delectus illo est itaque.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quo id excepturi similique veritatis quisquam at consequatur atque illo dolore optio, nesciunt nulla quam quidem. Dolor delectus illo est itaque.",
      releaseDate: "2023-01-01",
      genres: ["Action", "Thriller"],
      actors: ["Actor A", "Actor B"],
      imdbRating: 8.5,
      averageRating: 4.5,
      poster: "https://www.ottking.info/wp-content/uploads/2024/09/disco-p-1.jpg",
    },
    {
      id: 1,
      title: "Movie 2",
      year: "2021",
      storyline:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quo id excepturi similique veritatis quisquam at consequatur atque illo dolore optio, nesciunt nulla quam quidem. Dolor delectus illo est itaque.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quo id excepturi similique veritatis quisquam at consequatur atque illo dolore optio, nesciunt nulla quam quidem. Dolor delectus illo est itaque.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quo id excepturi similique veritatis quisquam at consequatur atque illo dolore optio, nesciunt nulla quam quidem. Dolor delectus illo est itaque.",
      releaseDate: "2021-05-15",
      genres: ["Comedy", "Drama"],
      actors: ["Actor X", "Actor Y"],
      imdbRating: 7.3,
      averageRating: 4.0,
      poster:
        "https://m.media-amazon.com/images/M/MV5BNGE0NzE5Y2ItYjQ3Zi00YzNiLWFhNmMtODhkNjFhNzQ5ZGFlXkEyXkFqcGc@._V1_.jpg",
    },
    {
      id: 2,
      title: "Movie 1",
      year: "2023",
      storyline:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quo id excepturi similique veritatis quisquam at consequatur atque illo dolore optio, nesciunt nulla quam quidem. Dolor delectus illo est itaque.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quo id excepturi similique veritatis quisquam at consequatur atque illo dolore optio, nesciunt nulla quam quidem. Dolor delectus illo est itaque.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quo id excepturi similique veritatis quisquam at consequatur atque illo dolore optio, nesciunt nulla quam quidem. Dolor delectus illo est itaque.",
      releaseDate: "2023-01-01",
      genres: ["Action", "Thriller"],
      actors: ["Actor A", "Actor B"],
      imdbRating: 8.5,
      averageRating: 4.5,
      poster: "https://www.ottking.info/wp-content/uploads/2024/09/agent.jpg",
    },
    {
      id: 3,
      title: "Movie 2",
      year: "2021",
      storyline: "This is the storyline for Movie 2.",
      releaseDate: "2021-05-15",
      genres: ["Comedy", "Drama"],
      actors: ["Actor X", "Actor Y"],
      imdbRating: 7.3,
      averageRating: 4.0,
      poster:
        "https://www.ottking.info/wp-content/uploads/2024/09/HOI.jpg",
    },
    {
      id: 4,
      title: "Movie 1",
      year: "2023",
      storyline: "This is the storyline for Movie 1.",
      releaseDate: "2023-01-01",
      genres: ["Action", "Thriller"],
      actors: ["Actor A", "Actor B"],
      imdbRating: 8.5,
      averageRating: 4.5,
      poster: "https://www.ottking.info/wp-content/uploads/2024/09/Untitled-design-20.jpg",
    },
    {
      id: 5,
      title: "Movie 2",
      year: "2021",
      storyline: "This is the storyline for Movie 2.",
      releaseDate: "2021-05-15",
      genres: ["Comedy", "Drama"],
      actors: ["Actor X", "Actor Y"],
      imdbRating: 7.3,
      averageRating: 4.0,
      poster:
        "https://www.ottking.info/wp-content/uploads/2024/09/Untitled-design-BERLIN.jpg",
    },
    {
      id: 6,
      title: "Movie 1",
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

// More detailed list (shifted to App.jsx)

const TrendingMovieList = ({ movies }) => {
    return (
        <div>
            <MovieSlider title="Trending Movies" category="trending-movies" movies={TrendingMoviesList} />
        </div>
    );
}

export default TrendingMovieList;
