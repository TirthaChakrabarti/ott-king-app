import React, { useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { Container, Card, Button, Badge } from "react-bootstrap";
import LogoSlider from '../utils/LogoSection/LogoSlider';
import MovieSlider from '../utils/movieSliderList/MovieSliderListTwo';
import Rating from '../utils/rating/Rating';

const TrendingMoviesList = [
  "https://m.media-amazon.com/images/M/MV5BNGE0NzE5Y2ItYjQ3Zi00YzNiLWFhNmMtODhkNjFhNzQ5ZGFlXkEyXkFqcGc@._V1_.jpg",
  "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg",
  "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg",
  "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg",
  "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg",
  "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg",
  "https://m.media-amazon.com/images/I/915xJIYLb+L.jpg",
];


const MovieDetailsPage = ({ movies = [] }) => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Container fluid className="p-4" style={{ width: '95%' }}>
      <Card
        className="border-0 shadow-lg position-relative"
        style={{
          width: '100%',
          height: '480px',
          borderRadius: '16px',
          marginTop: '1rem',
          overflow: 'hidden',
          color: 'white',
          boxShadow: '0 0 20px 5px rgba(0, 112, 255, 0.5)', // Blue shadow
          filter: 'drop-shadow(0px 0px 15px rgba(0, 112, 255, 0.8))', // Bluish glow
        }}
      >
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          {/* Gradient Overlay */}
          <Card.Img
            src={movie.poster}
            alt={movie.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              // filter: 'brightness(50%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              // background: 'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.7) 100%)',
              background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 20%, rgba(0, 0, 0, 0) 70%)',
              // background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 40%, rgba(0, 0, 0, 0) 70%)',
              zIndex: 1,
            }}
          />
        </div>

        {/* Content Section */}
        <Card.ImgOverlay className="d-flex flex-column justify-content-end p-4">
          {/* Title */}
          <div>
            <Card.Title
              style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                color: 'gold',
                marginBottom: '1rem',
                position: 'absolute',
                bottom: '10px',
                left: '30px',
                zIndex: 10,
              }}
            >
              {movie.title} ({movie.year})
            </Card.Title>
          </div>
        </Card.ImgOverlay>
      </Card>

      {/* Description and Details */}
      <div style={{ marginTop: '1rem', padding: '0 1rem' }}>

        <Card.Text
          style={{
            fontSize: '1rem',
            lineHeight: '1.3',
            color: '#d1d5db',
            marginTop: '2rem',
            marginBottom: '1rem',
          }}
        >
          {movie.storyline.length > 1000
            ? `${movie.storyline.substring(0, 500)}...`
            : movie.storyline}
        </Card.Text>

        <Card.Text style={{ marginTop: '1rem', fontSize: '1.2rem', color: '#b0c4de' }}>
          <strong>Release Date:</strong> {movie.releaseDate}
        </Card.Text>

        {/* Genres and Ratings */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'space-between', 
          alignItems: 'center',
        }}>

          <div className="mb-3">
            <h6 style={{ color: 'gold' }}>Genres:</h6>
            {movie.genres.map((genre) => (
              <Badge
                key={genre}
                style={{
                  backgroundColor: '#007bff',
                  color: 'white',
                  marginRight: '0.5rem',
                  padding: '0.5rem',
                  fontSize: '1rem',
                }}
              >
                {genre}
              </Badge>
            ))}
          </div>

          <div>
            <h6 style={{ color: 'gold' }}>IMDB Rating:</h6>
            <Rating value={movie.imdbRating} totalStar={10}/>  
            <p style={{ fontSize: '1.2rem', color: '#d1d5db' }}>{movie.imdbRating}</p>
          </div>

          <div>
            <h6 style={{ color: 'gold' }}>Average Rating:</h6>
            <Rating value={movie.averageRating}/>
            <p style={{ fontSize: '1.2rem', color: '#d1d5db' }}>{movie.averageRating}</p>
          </div>

          {/* <div className="d-flex justify-content-between" style={{ maxWidth: '50%' }}>
            
          </div> */}
        </div>

        {/* Subscription Button */}
        <div 
          className="d-flex justify-content-between align-items-center"
          style={{ marginTop: '2rem' }}
        >
          <Link to="/pricing">
            <Button
              variant="primary"
              size="lg"
              style={{
                background: 'linear-gradient(100deg, #4070a2, #01518e)',
                width: '150px',
                height: '50px',
                fontSize: '1.3rem',
                fontWeight: '600',
                padding: '10px 20px',
                borderRadius: '8px',
                border: 'none',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transition: 'all 0.3s linear',
                boxShadow: '0 0 2px rgba(0, 123, 255, 0.5)',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) =>
                (e.target.style.boxShadow = '0 0 15px rgba(0, 123, 255, 1)')
              }
              onMouseLeave={(e) =>
                (e.target.style.boxShadow = '0 0 10px rgba(0, 123, 255, 0.5)')
              }
            >
              Subscribe
            </Button>
          </Link>
        </div>
      </div>    
      </Container>

      {/* Movies of similar category */}
      <div style={{ marginTop: '4rem' }}>
          <MovieSlider title="Movies of Similar Category" movies={TrendingMoviesList} />
      </div>
      
      {/* Logo slider  */}
      <div 
        className='container-fluid w-100 img-fluid'
        style={{ marginTop: '4rem' }}
      >
        <LogoSlider/>
      </div>
    </>
    
  );
};

export default MovieDetailsPage;