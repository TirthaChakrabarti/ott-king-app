import React from "react";

import MovieSlider from "../../utils/movieSliderList/MovieSliderListTwo";
import { TrendingTVShowsList } from "../../data";

const TrendingTVShows = () => {
  return (
    <div>
      <MovieSlider title="Trending TV Shows" movies={TrendingTVShowsList} />
    </div>
  );
};

export default TrendingTVShows;
