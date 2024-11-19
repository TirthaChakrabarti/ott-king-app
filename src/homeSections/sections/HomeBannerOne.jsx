// HomePage.js
import React from 'react';

import Banner from '../../utils/banner/BannerOne';

const HomeBannerOne = () => {
  return (
    <div>
      <Banner 
        title="Avatar" 
        description="This sci-fi tells the story of a heavenly alien world where humans arrived for limitless exploitation. But one of them became rebel and..." 
        image="https://www.pixelstalk.net/wp-content/uploads/images6/5K-Wallpaper-HD-Free-download.jpg" 
        video={"https://www.youtube.com/watch?v=5PSNL1qE6VY"}
      />
    </div>
  );
};

export default HomeBannerOne;
