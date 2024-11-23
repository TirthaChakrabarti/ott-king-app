import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Card, Button, Badge } from "react-bootstrap";

const MovieDetailsPage = ({ movies = [] }) => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  return (
    <Container fluid className="p-4">
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
              filter: 'brightness(50%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.7) 100%)',
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
            fontSize: '1.2rem',
            lineHeight: '1.3',
            color: '#d1d5db',
            marginBottom: '1rem',
          }}
        >
          {movie.storyline.length > 1000
            ? `${movie.storyline.substring(0, 500)}...`
            : movie.storyline}
        </Card.Text>
        <Card.Text style={{ fontSize: '1.2rem', color: '#b0c4de' }}>
          <strong>Release Date:</strong> {movie.releaseDate}
        </Card.Text>

        {/* Genres and Ratings */}
        <div>
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
          <div className="d-flex justify-content-between" style={{ maxWidth: '50%' }}>
            <div>
              <h6 style={{ color: 'gold' }}>IMDB Rating:</h6>
              <p style={{ fontSize: '1.2rem', color: '#d1d5db' }}>{movie.imdbRating}</p>
            </div>
            <div>
              <h6 style={{ color: 'gold' }}>Average Rating:</h6>
              <p style={{ fontSize: '1.2rem', color: '#d1d5db' }}>{movie.averageRating}</p>
            </div>
          </div>
        </div>

        {/* Subscription Button */}
        <div className="d-flex justify-content-between align-items-center">
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
  );
};

export default MovieDetailsPage;