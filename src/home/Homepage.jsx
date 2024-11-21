import React from "react";

import HomeSections from "../homeSections/AllHomeSections";

import '../styles/home/Homepage.css';

const Homepage = () => {
    return (
        <section style={{maxWidth: '100%'}}>
            <HomeSections/>
        </section>
    )
}

export default Homepage;