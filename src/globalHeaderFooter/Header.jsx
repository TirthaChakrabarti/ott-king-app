import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

// import { Button, Nav } from "react-bootstrap";
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import PriceSection from "./home/PriceSection";

import './Header.css';


const Header = () => {

    // const [showPriceSection, setShowPriceSection] = useState(false);

    // const priceSectionClickHandler = () => {
    //     sessionStorage.setItem('lastVisitedUrl', window.location.href);
    //     setShowPriceSection(true);  
    //   };
    
    //   const hidePriceSection = () => {
    //     setShowPriceSection(false);
    //   }

    return (
        <section className="header">
            <Link to="/">
                <div className="app-logo"></div>
            </Link>
            <div className="header-options">
                <Link style={{ textDecoration: 'none' }} to={"/"}>
                    <div className="home-link">Home</div>
                </Link>
                
                {/* <Nav>
                    <Nav.Link 
                        as={Link} 
                        to="/pricing" 
                        className="navlink" 
                        onClick={priceSectionClickHandler}
                    >
                        <Button variant="primary">Subscribe</Button>
                    </Nav.Link>
                </Nav>
                {
                    showPriceSection && <PriceSection hidePriceSection={hidePriceSection}/>
                } */}

                <Link to="/pricing">
                    <button className="header-button">Subscribe</button>
                </Link>

            </div>
            <div className="search-and-user">
                <div className="search-container">
                    <input type="text" className="search-input" placeholder="Search..." />
                </div>
                <div className="user-account">
                    <Link to={'/user-details'}>
                        <FontAwesomeIcon icon={faUser} style={{ color: 'white', fontSize: '1.5rem' }}/>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Header;