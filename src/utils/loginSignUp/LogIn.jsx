import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import '../../styles/loginSignUp/login.css'
import { Link } from "react-router-dom";

const LogIn = () => {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <section className="login-parent">
            <div className="login-container">

                {/* Photo section  */}
                <div className="login-image-container"></div>

                {/* Form section  */}
                <div className="form-container">
                    <div className="form-header">
                        <h3>Your Plan Awaits!</h3>
                        <p>Please verify your mobile number</p>
                    </div>
                    <div className="form-details">
                        <div className="form-input-phone-container">
                            <input className="form-input-phone" type="number" placeholder="Mobile Number" />
                            <button className="verify-button">Verify</button>
                        </div>
                        <input className="password-input" type="password" placeholder="Enter OTP" />
                    </div>
                    <div className="statement-container">
                        <form className="statement-form">
                            <label className="statement-checkbox">
                                <input type="checkbox" name="option1" value="Option 1" />
                                <span class="custom-checkbox"></span>
                                <p>I am above 18 years of age and read and hereby accept the <span><a href="#">Terms & Conditions</a></span> and <span><a href="#">Terms & Conditions</a></span></p>
                            </label>
                            <label className="statement-checkbox">
                                <input type="checkbox" name="option2" value="Option 2" />
                                <span class="custom-checkbox"></span>
                                <p>I agree to receive offers and promotional communications</p>
                            </label>
                        </form>
                    </div>
                    <div className="form-submit-button-container">
                        <Link to={'/sign-up'}>
                            <button className="form-submit-button">Continue</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LogIn