import React from "react";

import '../styles/home/Homepage.css';

import Animation from "./sections/Animation";
import NewlyReleasedMoviesList from "./sections/NewRelease";
import TrendingTVShows from "./sections/TrendingTVShows";
import DealOfTheWeek from "./sections/DealOfTheWeek";
import OTTKingMovieList from "./sections/OTTKingMovies";
import TrendingMovieList from "./sections/TrendingMovies";
import TopWebSeriesList from "./sections/TopWebSeries";
import KidsShowsList from "./sections/KidsShow";
import OTTKingSports from "./sections/OTTKingSports";
import OTTKingSpecialOne from "./sections/OTTKingSpecialOne";
import OTTKingSpecialTwo from "./sections/OTTKingSpecialTwo";
import HomeBannerOne from "./sections/HomeBannerOne";
import HomeBannerTwo from "./sections/HomeBannerTwo";
import HomeBannerThree from "./sections/HomeBannerThree";
import HomeLogoSlider from "./sections/HomeLogoSlider";
import { Link } from "react-router-dom";



const AllHomeSections = () => {
    return (
        <section className="sections">
            <Animation/>
            {/* <LogosSection/> */}
            {/* <HomeMovingLogoSection/> */}
            {/* <LogoMarquee/> */}

            <HomeLogoSlider/>

            <TrendingMovieList/>
            <NewlyReleasedMoviesList/>

            <HomeBannerOne />

            <DealOfTheWeek/>

            <TrendingTVShows/> 

            <HomeBannerTwo/>

            <TopWebSeriesList/>

            <OTTKingMovieList/>
            
            <KidsShowsList/>

            <OTTKingSports/>

            <HomeBannerThree/>
            
            <p className="ottking-special-caption" style={{color: 'gold'}}>
                OTT King Special
            </p>
            <OTTKingSpecialOne/>
            <OTTKingSpecialTwo/>

            {/* Blogs */}

            <HomeLogoSlider/>

            <Link to={'/pricing'}>
                <button className="home-bottom-button">Subscribe</button>
            </Link>
        </section>
    )
}

export default AllHomeSections;