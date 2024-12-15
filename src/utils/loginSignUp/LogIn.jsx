import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import axios from "axios";
import axiosInstance from "../../api/axiosInstance";

import '../../styles/loginSignUp/login.css'

const LogIn = () => {

    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();
    const location = useLocation();    
    const from = location.state?.from?.pathname || '/';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const handleLogin = async (e) => {
        e.preventDefault();

        console.log(phone, otp);
    
        try {
           const response = await axios.post('http://localhost:8080/api/auth/login', 
            { 
                phone: phone, 
                otp: otp 
            });

          const token = response.data.token;
          localStorage.setItem("token", token);
          alert('Login successful!');
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
                            <input className="form-input-phone" type="number" placeholder="Mobile Number" onChange={(e) => setPhone(e.target.value)}/>
                            <button className="verify-button">Verify</button>
                        </div>
                        <input className="password-input" type="password" placeholder="Enter OTP" onChange={(e) => setOtp(e.target.value)}/>
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