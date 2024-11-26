// HomePage.js
import React from 'react';

import Banner from '../../utils/banner/BannerOne';

const HomeBannerOne = () => {
  return (
    <div>
      <Banner 
        title="Almost Adults" 
        description="This comedy feature follows two best friends in their final year of college while they transition into adulthood. One embraces her sexuality and…." 
        image="https://www.pixelstalk.net/wp-content/uploads/images6/5K-Wallpaper-HD-Free-download.jpg" 
        video={"https://www.youtube.com/watch?v=HZS9M52Bd_w"}
      />
    </div>
  );
};

export default HomeBannerOne;
