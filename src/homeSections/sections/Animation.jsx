import React, { useEffect, useState } from 'react';

import '../../styles/homeSections/animation.css';

const Animation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const videos = [
    'https://videos.pexels.com/video-files/852286/852286-hd_1920_1080_30fps.mp4',
    'https://videos.pexels.com/video-files/2871918/2871918-hd_1920_1080_30fps.mp4',
    'https://videos.pexels.com/video-files/3015491/3015491-hd_1920_1080_24fps.mp4',
    'https://videos.pexels.com/video-files/1448735/1448735-uhd_2732_1440_24fps.mp4',
    'https://videos.pexels.com/video-files/3194277/3194277-hd_1920_1080_30fps.mp4'

  ];

  // Function to change video every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 5000); // Change video every 10 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [videos.length]);

  return (
    <div className="animation">
      {videos.map((video, index) => (
        <video
          key={index}
          className={`slides ${currentIndex === index ? 'active' : ''}`}
          src={video}
          muted
          autoPlay
          loop
        />
      ))}
      <div className="gradient-overlay"></div>
        <div className="caption">
          <p id='main-caption'>Unlimited movies, TV shows and more</p>
          <p id='sub-section'>Starts at $8. Cancel at any time.</p>
        </div>
      </div>
  );
};

export default Animation;
