import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./globalHeaderFooter/Header";
import Footer from "./globalHeaderFooter/Footer";
import Homepage from "./home/Homepage";
import PricingSection from "./home/PriceSection";
import MovieDetailsPage from "./movieDetails/MovieDetailsPage";
import LogInPage from "./LogInSignUp/LogInPage";
import SignUpPage from "./LogInSignUp/SignUpPage";
import UserAccountPage from "./userAccount/UserAccountPage";
import TransactionHistory from "./userAccount/TransactionHistory";
import EditDetais from "./userAccount/EditDetais";


// Data list:

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

const DealOfTheWeek = [
  {
    id: 0,
    title: "Product 1",
    year: "2024",
    storyline: "Top-notch gadget for your daily needs.",
    releaseDate: "2024-11-20",
    genres: ["Electronics", "Gadget"],
    actors: ["Brand A", "Brand B"],
    imdbRating: 9.2,
    averageRating: 4.8,
    poster:
      "https://hdwallpaperim.com/wp-content/uploads/2017/08/25/123982-night-urban.jpg",
  },
  {
    id: 1,
    title: "Product 2",
    year: "2023",
    storyline: "Upgrade your home with this amazing deal.",
    releaseDate: "2023-10-15",
    genres: ["Home Appliance", "Utility"],
    actors: ["Brand X", "Brand Y"],
    imdbRating: 8.5,
    averageRating: 4.6,
    poster:
      "https://wallpaper.forfun.com/fetch/19/19b7a7201a24d6d3934b5da031c38307.jpeg",
  },
  {
    id: 2,
    title: "Product 3",
    year: "2022",
    storyline: "The ultimate fitness companion.",
    releaseDate: "2022-08-01",
    genres: ["Fitness", "Wearable"],
    actors: ["Brand C", "Brand D"],
    imdbRating: 8.9,
    averageRating: 4.7,
    poster:
      "https://cdn.pixabay.com/photo/2024/01/02/14/58/leaf-8483401_640.jpg",
  },
  {
    id: 3,
    title: "Product 4",
    year: "2021",
    storyline: "Enhance your entertainment experience.",
    releaseDate: "2021-07-10",
    genres: ["Home Entertainment", "Gadget"],
    actors: ["Brand E", "Brand F"],
    imdbRating: 9.0,
    averageRating: 4.9,
    poster:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Product 5",
    year: "2024",
    storyline: "Fashionable and functional gear for everyone.",
    releaseDate: "2024-01-25",
    genres: ["Fashion", "Accessory"],
    actors: ["Brand G", "Brand H"],
    imdbRating: 8.2,
    averageRating: 4.5,
    poster:
      "https://e0.pxfuel.com/wallpapers/240/1/desktop-wallpaper-cinematic-cool-cinematic.jpg",
  },
  {
    id: 5,
    title: "Product 6",
    year: "2023",
    storyline: "The perfect addition to your kitchen.",
    releaseDate: "2023-09-18",
    genres: ["Kitchen", "Appliance"],
    actors: ["Brand I", "Brand J"],
    imdbRating: 8.4,
    averageRating: 4.3,
    poster:
      "https://e0.pxfuel.com/wallpapers/149/40/desktop-wallpaper-preview-cliffs-destruction-city-landscape-waterfall.jpg",
  },
  {
    id: 6,
    title: "Product 7",
    year: "2022",
    storyline: "A reliable tool for your everyday tasks.",
    releaseDate: "2022-03-30",
    genres: ["Tools", "Utility"],
    actors: ["Brand K", "Brand L"],
    imdbRating: 8.6,
    averageRating: 4.4,
    poster: "https://via.placeholder.com/150",
  },
];

const TopWebSeriesList = [
  {
    id: 0,
    title: "Web Series 1",
    year: "2023",
    storyline: "A gripping storyline of intrigue and adventure.",
    releaseDate: "2023-03-01",
    genres: ["Drama", "Mystery"],
    actors: ["Actor A", "Actor B"],
    imdbRating: 8.9,
    averageRating: 4.8,
    poster:
      "https://wallpaper.forfun.com/fetch/19/19b7a7201a24d6d3934b5da031c38307.jpeg",
  },
  {
    id: 1,
    title: "Web Series 2",
    year: "2022",
    storyline: "An exciting tale of love and betrayal.",
    releaseDate: "2022-06-15",
    genres: ["Romance", "Thriller"],
    actors: ["Actor C", "Actor D"],
    imdbRating: 7.5,
    averageRating: 4.3,
    poster:
      "https://cdn.pixabay.com/photo/2024/01/02/14/58/leaf-8483401_640.jpg",
  },
  {
    id: 2,
    title: "Web Series 3",
    year: "2021",
    storyline: "A heartwarming journey of self-discovery.",
    releaseDate: "2021-12-10",
    genres: ["Comedy", "Drama"],
    actors: ["Actor E", "Actor F"],
    imdbRating: 8.1,
    averageRating: 4.6,
    poster:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Web Series 4",
    year: "2023",
    storyline: "A thrilling science-fiction series exploring the unknown.",
    releaseDate: "2023-07-22",
    genres: ["Sci-Fi", "Adventure"],
    actors: ["Actor G", "Actor H"],
    imdbRating: 9.0,
    averageRating: 4.9,
    poster:
      "https://e0.pxfuel.com/wallpapers/240/1/desktop-wallpaper-cinematic-cool-cinematic.jpg",
  },
  {
    id: 4,
    title: "Web Series 5",
    year: "2020",
    storyline: "A dark and gritty crime drama.",
    releaseDate: "2020-02-05",
    genres: ["Crime", "Thriller"],
    actors: ["Actor I", "Actor J"],
    imdbRating: 8.4,
    averageRating: 4.5,
    poster:
      "https://e0.pxfuel.com/wallpapers/149/40/desktop-wallpaper-preview-cliffs-destruction-city-landscape-waterfall.jpg",
  },
  {
    id: 5,
    title: "Web Series 6",
    year: "2022",
    storyline: "A humorous take on modern relationships.",
    releaseDate: "2022-09-12",
    genres: ["Comedy", "Romance"],
    actors: ["Actor K", "Actor L"],
    imdbRating: 7.8,
    averageRating: 4.2,
    poster: "https://wallpapercave.com/wp/wp3704357.jpg",
  },
];

function App() {
  return (
    <section className="main">
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/pricing" element={<PricingSection />} />

        <Route path="/user-details" element={<UserAccountPage />} />

        <Route
          path="/trending-movies/:id"
          element={<MovieDetailsPage movies={TrendingMoviesList} />}
        />
        <Route
          path="/newly-released-movies/:id"
          element={<MovieDetailsPage movies={NewlyReleasedMoviesList} />}
        />
        <Route
          path="/trending-tv-shows/:id"
          element={<MovieDetailsPage movies={TrendingMoviesList} />}
        />
        <Route
          path="/ott-king-movies/:id"
          element={<MovieDetailsPage movies={TrendingMoviesList} />}
        />
        <Route
          path="/kids-shows/:id"
          element={<MovieDetailsPage movies={TrendingMoviesList} />}
        />
        <Route
          path="/deal-of-the-week/:id"
          element={<MovieDetailsPage movies={DealOfTheWeek} />}
        />
        <Route
          path="/top-web-series/:id"
          element={<MovieDetailsPage movies={TopWebSeriesList} />}
        />
        <Route
          path="/ott-king-sports/:id"
          element={<MovieDetailsPage movies={TrendingMoviesList} />}
        />
        <Route
          path="/ott-king-special/:id"
          element={<MovieDetailsPage movies={TrendingMoviesList} />}
        />

        <Route path="/log-in" element={<LogInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/transaction-history" element={<TransactionHistory />} />
        <Route path="/edit-details" element={<EditDetais />} />

      </Routes>
      <Footer />
    </section>
  );
}

export default App;
