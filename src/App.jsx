import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './Header';
import Homepage from './home/Homepage';
import PricingSection from './home/PriceSection';
import MovieDetailsPage from './movieDetails/MovieDetailsPage';
import Footer from './Footer';
import WebSeriesDetailsPage from './movieDetails/WebSeriesDetailsPage';

// Data list:

const TrendingMoviesList = [
  {
      id: 0,
      title: "Movie 1",
      year: "2023",
      storyline: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quo id excepturi similique veritatis quisquam at consequatur atque illo dolore optio, nesciunt nulla quam quidem. Dolor delectus illo est itaque.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quo id excepturi similique veritatis quisquam at consequatur atque illo dolore optio, nesciunt nulla quam quidem. Dolor delectus illo est itaque.",
      releaseDate: "2023-01-01",
      genres: ["Action", "Thriller"],
      actors: ["Actor A", "Actor B"],
      imdbRating: 8.5,
      averageRating: 4.5,
      poster: "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg"
  },
  {
      id: 1,
      title: "Movie 2",
      year: "2021",
      storyline: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quo id excepturi similique veritatis quisquam at consequatur atque illo dolore optio, nesciunt nulla quam quidem. Dolor delectus illo est itaque.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quo id excepturi similique veritatis quisquam at consequatur atque illo dolore optio, nesciunt nulla quam quidem. Dolor delectus illo est itaque.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quo id excepturi similique veritatis quisquam at consequatur atque illo dolore optio, nesciunt nulla quam quidem. Dolor delectus illo est itaque.",
      releaseDate: "2021-05-15",
      genres: ["Comedy", "Drama"],
      actors: ["Actor X", "Actor Y"],
      imdbRating: 7.3,
      averageRating: 4.0,
      poster: "https://m.media-amazon.com/images/M/MV5BNGE0NzE5Y2ItYjQ3Zi00YzNiLWFhNmMtODhkNjFhNzQ5ZGFlXkEyXkFqcGc@._V1_.jpg"
  },
  {
      id: 2,
      title: "Movie 1",
      year: "2023",
      storyline: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quo id excepturi similique veritatis quisquam at consequatur atque illo dolore optio, nesciunt nulla quam quidem. Dolor delectus illo est itaque.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quo id excepturi similique veritatis quisquam at consequatur atque illo dolore optio, nesciunt nulla quam quidem. Dolor delectus illo est itaque.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quo id excepturi similique veritatis quisquam at consequatur atque illo dolore optio, nesciunt nulla quam quidem. Dolor delectus illo est itaque.",
      releaseDate: "2023-01-01",
      genres: ["Action", "Thriller"],
      actors: ["Actor A", "Actor B"],
      imdbRating: 8.5,
      averageRating: 4.5,
      poster: "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg"
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
      poster: "https://m.media-amazon.com/images/M/MV5BNGE0NzE5Y2ItYjQ3Zi00YzNiLWFhNmMtODhkNjFhNzQ5ZGFlXkEyXkFqcGc@._V1_.jpg"
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
      poster: "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg"
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
      poster: "https://m.media-amazon.com/images/M/MV5BNGE0NzE5Y2ItYjQ3Zi00YzNiLWFhNmMtODhkNjFhNzQ5ZGFlXkEyXkFqcGc@._V1_.jpg"
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
      poster: "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg"
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
      poster: "https://m.media-amazon.com/images/M/MV5BNGE0NzE5Y2ItYjQ3Zi00YzNiLWFhNmMtODhkNjFhNzQ5ZGFlXkEyXkFqcGc@._V1_.jpg"
  }
]

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
      poster: "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg"
  },
  {
      id: 1,
      title: "Movie 2",
      year: "2021",
      storyline: "This is the storyline for Movie 2.",
      releaseDate: "2021-05-15",
      genres: ["Comedy", "Drama"],
      actors: ["Actor X", "Actor Y"],
      imdbRating: 7.3,
      averageRating: 4.0,
      poster: "https://m.media-amazon.com/images/M/MV5BNGE0NzE5Y2ItYjQ3Zi00YzNiLWFhNmMtODhkNjFhNzQ5ZGFlXkEyXkFqcGc@._V1_.jpg"
  },
  {
      id: 2,
      title: "Movie 1",
      year: "2023",
      storyline: "This is the storyline for Movie 1.",
      releaseDate: "2023-01-01",
      genres: ["Action", "Thriller"],
      actors: ["Actor A", "Actor B"],
      imdbRating: 8.5,
      averageRating: 4.5,
      poster: "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg"
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
      poster: "https://m.media-amazon.com/images/M/MV5BNGE0NzE5Y2ItYjQ3Zi00YzNiLWFhNmMtODhkNjFhNzQ5ZGFlXkEyXkFqcGc@._V1_.jpg"
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
      poster: "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg"
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
      poster: "https://m.media-amazon.com/images/M/MV5BNGE0NzE5Y2ItYjQ3Zi00YzNiLWFhNmMtODhkNjFhNzQ5ZGFlXkEyXkFqcGc@._V1_.jpg"
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
      poster: "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg"
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
      poster: "https://m.media-amazon.com/images/M/MV5BNGE0NzE5Y2ItYjQ3Zi00YzNiLWFhNmMtODhkNjFhNzQ5ZGFlXkEyXkFqcGc@._V1_.jpg"
  }
];

const TopWebSeries = [
    {
      id: 0,
      title: "Stranger Things",
      description: "A group of kids discover supernatural occurrences and government conspiracies in their small town. They must work together to uncover the truth and face terrifying monsters from another dimension.",
      imageUrl: "https://wallpaper.forfun.com/fetch/19/19b7a7201a24d6d3934b5da031c38307.jpeg",
      genre: "Sci-Fi, Thriller",
      releaseDate: "2016-07-15"
    },
    {
      id: 1,
      title: "The Crown",
      description: "The Crown traces the reign of Queen Elizabeth II, exploring political rivalries, personal intrigues, and the challenges of her royal duties over the decades.",
      imageUrl: "https://cdn.pixabay.com/photo/2024/01/02/14/58/leaf-8483401_640.jpg",
      genre: "Drama, History",
      releaseDate: "2016-11-04"
    },
    {
      id: 2,
      title: "Money Heist",
      description: "A criminal mastermind and a group of robbers undertake a meticulously planned heist on the Royal Mint of Spain. As the heist progresses, relationships and motives get complicated.",
      imageUrl: "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
      genre: "Crime, Thriller",
      releaseDate: "2017-05-02"
    },
    {id: 3,
      title: "The Witcher",
      description: "Geralt of Rivia, a monster hunter, struggles to find his place in a world where humans can be more wicked than beasts. Based on the book series by Andrzej Sapkowski.",
      imageUrl: "https://e0.pxfuel.com/wallpapers/240/1/desktop-wallpaper-cinematic-cool-cinematic.jpg",
      genre: "Fantasy, Drama",
      releaseDate: "2019-12-20"
    },
    {
        id: 4,
      title: "Black Mirror",
      description: "An anthology series that explores the darker aspects of technology and modern society, with each episode telling a standalone story set in a dystopian near-future.",
      imageUrl: "https://e0.pxfuel.com/wallpapers/149/40/desktop-wallpaper-preview-cliffs-destruction-city-landscape-waterfall.jpg",
      genre: "Sci-Fi, Anthology",
      releaseDate: "2011-12-04"
    },
    {
        id: 5,
      title: "Breaking Bad",
      description: "A high school chemistry teacher turned methamphetamine manufacturer teams up with a former student to build a drug empire, all while struggling with his moral choices.",
      imageUrl: "https://wallpapercave.com/wp/wp3704357.jpg",
      genre: "Crime, Drama, Thriller",
      releaseDate: "2008-01-20"
    }
  ];
  
  

function App() {
  return (
    <section className='main'>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/pricing" element={<PricingSection />} />
        <Route path="/trending-movies/:id" element={<MovieDetailsPage movies={TrendingMoviesList}/>} />
        <Route path="/newly-released-movies/:id" element={<MovieDetailsPage movies={NewlyReleasedMoviesList}/>} />
        <Route path="/trending-tv-shows/:id" element={<MovieDetailsPage movies={TrendingMoviesList}/>} />
        <Route path="/ott-king-movies/:id" element={<MovieDetailsPage movies={TrendingMoviesList}/>} />
        <Route path="/kids-shows/:id" element={<MovieDetailsPage movies={TrendingMoviesList}/>} />

        <Route path="/top-web-series/:id" element={<WebSeriesDetailsPage webSeriesList={TopWebSeries}/>} />

        <Route path="/ott-king-sports/:id" element={<MovieDetailsPage movies={TrendingMoviesList}/>} />
        <Route path="/ott-king-special/:id" element={<MovieDetailsPage movies={TrendingMoviesList}/>} />
      </Routes>
      <Footer/>
    </section>
  );
}

export default App;
