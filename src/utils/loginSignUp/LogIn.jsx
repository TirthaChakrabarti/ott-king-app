import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import axios from "axios";
import axiosInstance from "../../api/axiosInstance";

import '../../styles/loginSignUp/login.css'

const LogIn = () => {

    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');

    const [phoneMessage, setPhoneMessage] = useState('');
    const [otpMessage, setOtpMessage] = useState(''); 
    const [checkboxMessage, setCheckboxMessage] = useState('');

    const navigate = useNavigate();
    const location = useLocation();    
    const from = location.state?.from?.pathname || '/';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const handleInvalid = (e) => {
        e.target.setCustomValidity(""); // Reset custom message
        
        if (e.target.name === "phone") {
          e.target.setCustomValidity("Please enter your phone number.");
        }

        if(e.target.name === "otp") {
            e.target.setCustomValidity("Please enter your OTP.");
        }

        if (e.target.name === "agree") {
          e.target.setCustomValidity("You must agree to continue.");
        }
      };

      const handleInput = (e) => {
        e.target.setCustomValidity(""); // Clear custom validity message
      };

    const handleLogin = async (e) => {
        e.preventDefault();

        setPhoneMessage('');
        setOtpMessage('');
        setCheckboxMessage('');

        let isValid = true

        if (!phone) {
            setPhoneMessage('Phone number is required');
            isValid = false;
        }

        if (!otp) {
            setOtpMessage('OTP is required');
            isValid = false;
        }

        const termsCheckbox = document.querySelector('#agree');
        if(!termsCheckbox.checked) {
            setCheckboxMessage('You need to accept the age limit');
            isValid = false;
        }

        if(!isValid) return;

        try {
           const response = await axios.post('http://localhost:8080/api/auth/login', 
            { 
                phone: phone, 
                otp: otp 
            });

          const token = response.data.token;
          localStorage.setItem("token", token);
        //   alert('Login successful!');
          navigate(from, { replace: true });
          console.log('Requested Path and redirecting to: ',from);
    
          // Retrieve the redirect path from sessionStorage
        //   const redirectPath = sessionStorage.getItem('redirectPath') || '/';
    
          // Clear the redirect path after use
        //   sessionStorage.removeItem('redirectPath');
    
          // Redirect the user to the original requested page
        //   navigate(redirectPath);
    
        } catch (error) {
          console.error(error);
          alert('Login failed : Invalid credentials or server error.');
          console.log('Log in failed. Please try again.');
        }
      };

    return (
        <section className="login-parent">
            <div className="login-container">

                {/* Photo section  */}
                <div className="login-image-container"></div>

                {/* Form section  */}
                <form className="form-container" onSubmit={handleLogin}>
                    <div className="form-header">
                        <h3>Your Plan Awaits!</h3>
                        <p>Please verify your mobile number</p>
                    </div>
                    <div className="form-details">
                        <div className="form-input-phone-container">
                            <input 
                                className="form-input-phone" 
                                name="phone"
                                type="text" 
                                minlength="10"
                                maxlength="10"
                                pattern="\d{10}"
                                placeholder="Mobile Number" 
                                // required
                                // onInvalid={handleInvalid}
                                // onInput={handleInput}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            <button className="verify-button">Verify</button>
                        </div>

                        {phoneMessage && (
                            <p 
                                className="error-message"
                                style={{ marginTop: '0', paddingTop: '0', frontSize: '0.3rem', color: 'cyan' }}
                            >
                                {phoneMessage}
                            </p>
                        )}

                        <input 
                            className="password-input" 
                            name="otp"
                            type="password" 
                            placeholder="Enter OTP" 
                            // required
                            // onInvalid={handleInvalid}
                            // onInput={handleInput}
                            onChange={(e) => setOtp(e.target.value)}
                        />

                        {otpMessage && (
                            <p 
                                className="error-message"
                                style={{ marginTop: '0', paddingTop: '0', frontSize: '0.3rem', color: 'cyan' }}
                            >
                                {otpMessage}
                            </p>
                        )}
                    </div>
                    <div className="statement-container">
                        <div className="statement-form">
                            <label className="statement-checkbox">
                                <input 
                                    type="checkbox" 
                                    name="agree"
                                    id="agree" 
                                    value="agree" 
                                    // required
                                    // onInvalid={handleInvalid}
                                    // onInput={handleInput}
                                />
                                <span class="custom-checkbox"></span>
                                <p>I am above 18 years of age and read and hereby accept the <span><a href="#">Terms & Conditions</a></span> and <span><a href="#">Terms & Conditions</a></span></p>
                            </label>

                            {checkboxMessage && (
                                <p 
                                    className="error-message"
                                    style={{ marginTop: '0', paddingTop: '0', frontSize: '0.3rem', color: 'cyan' }}
                                >
                                    {checkboxMessage}
                                </p>
                            )}

                            <label className="statement-checkbox">
                                <input 
                                    type="checkbox" 
                                    name="promotion"
                                    id="promotion" 
                                    value="agree" 
                                />
                                <span class="custom-checkbox"></span>
                                <p>I agree to receive offers and promotional communications</p>
                            </label>
                        </div>
                    </div>
                    <div className="form-submit-button-container">
                        {/* <Link to={'/sign-up'}> */}
                            <button className="form-submit-button">Continue</button>
                        {/* </Link> */}
                    </div>

                    <p 
                        style={{color: 'white', fontSize: '1.1rem', marginTop: '30px'}}
                    >
                        New User? &nbsp;
                        <span 
                            
                        >
                            <Link to={'/sign-up'} style={{color: 'cyan', cursor: 'pointer'}}>
                                Register here!
                            </Link>
                        </span>
                    </p>
                </form>
            </div>
        </section>
    )
}

export default LogIn