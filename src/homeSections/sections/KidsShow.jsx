import React from "react";

import MovieSlider from "../../utils/movieSliderList/MovieSliderListTwo";

// const NewlyReleasedMoviesList = [
//     "https://www.ottking.info/wp-content/uploads/2023/11/Untitled-design-5-5.jpg",
//     "https://www.ottking.info/wp-content/uploads/2023/12/Untitled-design-guru.jpg",
//     "https://www.ottking.info/wp-content/uploads/2023/11/WATCH-NOW-GOPAL.jpg",
//     "https://www.ottking.info/wp-content/uploads/2023/12/Untitled-design-lk.jpg",
//     "https://www.ottking.info/wp-content/uploads/2023/12/Untitled-design-bj.jpg",
//     "https://www.ottking.info/wp-content/uploads/2023/11/WATCH-NOW-GOPAL.jpg",
//     "https://www.ottking.info/wp-content/uploads/2023/12/Untitled-design-lk.jpg",
//     "https://www.ottking.info/wp-content/uploads/2023/12/Untitled-design-bj.jpg"
// ];

const KidsShowList = [
    {
      id: 0,
      title: "Adventures in Toyland",
      year: "2023",
      storyline: "Join Timmy and his friends as they explore the magical world of Toyland, where every toy comes to life!",
      releaseDate: "2023-11-01",
      genres: ["Animation", "Adventure", "Family"],
      actors: ["Actor P", "Actor Q"],
      imdbRating: 7.8,
      averageRating: 4.2,
      poster: "https://www.ottking.info/wp-content/uploads/2023/11/Untitled-design-5-5.jpg",
    },
    {
      id: 1,
      title: "Magic Balloon Ride",
      year: "2023",
      storyline: "Hop on a magical hot air balloon with Lily and her puppy as they soar across the sky, discovering new lands and making new friends.",
      releaseDate: "2023-12-10",
      genres: ["Animation", "Fantasy", "Family"],
      actors: ["Actor R", "Actor S"],
      imdbRating: 8.2,
      averageRating: 4.5,
      poster: "https://www.ottking.info/wp-content/uploads/2023/12/Untitled-design-guru.jpg",
    },
    {
      id: 2,
      title: "Super Dino Squad",
      year: "2023",
      storyline: "Meet the Super Dino Squad, a team of friendly dinosaurs who embark on exciting adventures to save their prehistoric world!",
      releaseDate: "2023-11-15",
      genres: ["Animation", "Action", "Family"],
      actors: ["Actor T", "Actor U"],
      imdbRating: 6.9,
      averageRating: 3.8,
      poster: "https://www.ottking.info/wp-content/uploads/2023/11/WATCH-NOW-GOPAL.jpg",
    },
    {
      id: 3,
      title: "Pirates of the Rainbow Island",
      year: "2023",
      storyline: "Sail the seas with Captain Rainbow and her crew of young pirates as they search for hidden treasures on a colorful island full of surprises!",
      releaseDate: "2023-12-01",
      genres: ["Animation", "Adventure", "Family"],
      actors: ["Actor V", "Actor W"],
      imdbRating: 7.5,
      averageRating: 4.0,
      poster: "https://www.ottking.info/wp-content/uploads/2023/12/Untitled-design-lk.jpg",
    },
    {
      id: 4,
      title: "Funky Farmyard Friends",
      year: "2023",
      storyline: "Join the fun-loving animals of Funky Farmyard as they learn life lessons and share laughter on their daily farm adventures.",
      releaseDate: "2023-12-20",
      genres: ["Animation", "Comedy", "Family"],
      actors: ["Actor X", "Actor Y"],
      imdbRating: 7.3,
      averageRating: 4.1,
      poster: "https://www.ottking.info/wp-content/uploads/2023/12/Untitled-design-bj.jpg",
    },
    {
      id: 5,
      title: "Giant Cloud Adventures",
      year: "2023",
      storyline: "Fly high with Max and his best friend Sky as they ride on magical clouds and explore floating islands filled with wonder and mystery!",
      releaseDate: "2023-11-25",
      genres: ["Animation", "Fantasy", "Family"],
      actors: ["Actor Z", "Actor A"],
      imdbRating: 7.6,
      averageRating: 4.3,
      poster: "https://www.ottking.info/wp-content/uploads/2023/11/WATCH-NOW-GOPAL.jpg",
    },
    {
      id: 6,
      title: "The Colorful Jungle",
      year: "2023",
      storyline: "Follow Ellie the Elephant and her friends as they journey through a vibrant jungle to solve puzzles and help their animal buddies.",
      releaseDate: "2023-12-15",
      genres: ["Animation", "Adventure", "Family"],
      actors: ["Actor B", "Actor C"],
      imdbRating: 7.4,
      averageRating: 4.2,
      poster: "https://www.ottking.info/wp-content/uploads/2023/12/Untitled-design-lk.jpg",
    },
    {
      id: 7,
      title: "Underwater Wonders",
      year: "2023",
      storyline: "Dive into the magical underwater world of Coral Kingdom with Sammy the Seahorse and his friends as they protect the ocean and its secrets.",
      releaseDate: "2023-12-05",
      genres: ["Animation", "Fantasy", "Family"],
      actors: ["Actor D", "Actor E"],
      imdbRating: 8.0,
      averageRating: 4.4,
      poster: "https://www.ottking.info/wp-content/uploads/2023/12/Untitled-design-bj.jpg",
    },
  ];
  

const KidsShowsList = () => {
    return (
        <div>
            <MovieSlider title="Kids Shows" movies={KidsShowList} />
        </div>
    );
}

export default KidsShowsList;
