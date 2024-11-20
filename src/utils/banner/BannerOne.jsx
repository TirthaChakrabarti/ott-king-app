import React from 'react';

import '../../styles/homeSections/banner1.css';
import { Button } from 'react-bootstrap';

const Banner = ({title, description, image, video }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      <div className="banner-details">
        <h1>{title}</h1>
        <p>{description}</p>
        <button className='banner-details-button'>Play Now</button>
      </div>
      <div className='banner-video'>
        <iframe
            src={video} 
            title="Video"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
      </div>
    </div>
  );
};

export default Banner;
