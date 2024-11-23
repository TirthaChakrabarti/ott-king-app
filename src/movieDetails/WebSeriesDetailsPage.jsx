import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const WebSeriesDetailsPage = ({ webSeriesList = [] }) => {
  const { id } = useParams();
  const webSeries = webSeriesList.find((webSeries) => webSeries.id === parseInt(id));

  return (
    <Container fluid className="p-4">
      <Card
        className="border-0 shadow-lg position-relative"
        style={{
          width: '100%',
          height: '500px',
          borderRadius: '16px',
          marginTop: '1rem',
          overflow: 'hidden',
          color: 'white',
          boxShadow: '0 0 20px 5px rgba(0, 112, 255, 0.5)', // Blue shadow
          filter: 'drop-shadow(0px 0px 15px rgba(0, 112, 255, 0.8))', // Bluish glow
        }}
      >
        <Card.Img
          src={webSeries.imageUrl}
          alt={webSeries.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(50%)',
          }}
        />
        <Card.ImgOverlay className="d-flex flex-column justify-content-between p-4">
          <div>
            <Card.Title
              style={{
                fontSize: '3.5rem',
                fontWeight: 'bold',
                // color: '#00b0ff',
                color: 'gold',
                marginBottom: '2.5rem',
                padding: '1.5rem'
              }}
            >
              {webSeries.title}
            </Card.Title>
            <Card.Text
              style={{
                fontSize: '1.4rem',
                lineHeight: '1.2',
                maxWidth: '60%',
                color: '#d1d5db',
                marginBottom: 0,
                padding: '1rem',
                fontWeight: '400'
              }}
            >
              {webSeries.description.length > 200
                ? `${webSeries.description.substring(0, 200)}...`
                : webSeries.description}
            </Card.Text>
          </div>
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
                  padding: '10x 20x',
                  borderRadius: '8px',
                  border: 'none',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  transition: 'all 0.3s linear',
                  boxShadow: '0 0 2px rgba(0, 123, 255, 0.5)',
                }}
                // onClick={() => navigate(-1)}
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
            <small className="text-muted" style={{ fontSize: '1.2rem' }}>
              {new Date(webSeries.releaseDate).toLocaleDateString()}
            </small>
          </div>
        </Card.ImgOverlay>
      </Card>
    </Container>
  );
};

export default WebSeriesDetailsPage;
