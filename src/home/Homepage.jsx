import React, { useEffect } from "react";

import HomeSections from "../homeSections/AllHomeSections";

import '../styles/home/Homepage.css';
import { useLocation } from "react-router-dom";

const Homepage = () => {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);


    return (
        <section style={{maxWidth: '100%'}}>
            <HomeSections/>
            {/* <Link to='/ott-pricing'>Ott Pricing</Link> */}
        </section>
    )
}

export default Homepage;