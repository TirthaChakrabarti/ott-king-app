import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'

import '../../styles/loginSignUp/signup.css'
import { Link, useLocation } from 'react-router-dom'

const SignUp = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/user-details';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const handleInvalid = (e) => {
        e.target.setCustomValidity(""); // Reset custom message
        if (e.target.name === "username") {
          e.target.setCustomValidity("Please enter your username.");
        }
        // if (e.target.name === "email") {
        //   if (!e.target.value) {
        //     e.target.setCustomValidity("Email is required.");
        //   } else {
        //     e.target.setCustomValidity("Please enter a valid email address.");
        //   }
        // }
        if (e.target.name === "phone") {
          e.target.setCustomValidity("Please enter your phone number.");
        }
        if (e.target.name === "agree") {
          e.target.setCustomValidity("You must agree to continue.");
        }
      };

      const handleInput = (e) => {
        e.target.setCustomValidity(""); // Clear custom validity message
      };

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            await axios.post(`http://localhost:8080/api/auth/register`, {
                name: name,
                email: email,
                phone: phone
                }
            )
            alert('Registration successful.');
            navigate(from, { replace: true });
        } catch (error) {
            console.error(error.response.data.message);
            alert('Registration failed.');
        }
    }

  return (
    <section className="signup-parent">
        <div className="signup-container">

            {/* Photo section  */}
            <div className="signup-image-container"></div>

            {/* Form section  */}
            <form className="form-container" onSubmit={handleRegister}>
                <div className="form-header">
                    <h3>Welcome, New User!</h3>
                    <p>Please register yourself...it's easy!</p>
                </div>

                <div className="form-details">
                    <div className="form-input-container">
                        <input 
                            className="name" 
                            type="text" 
                            name='username'
                            placeholder="Enter Name" 
                            onInvalid={handleInvalid}
                            onInput={handleInput}
                            required onChange={(e) => setName(e.target.value)}
                        />
                        <input 
                            className="email" 
                            type="email" 
                            placeholder="Enter Email" 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input 
                            className="phone" 
                            name="phone"
                            type="text" 
                            minlength="10"
                            maxlength="10"
                            pattern="\d{10}"
                            placeholder="Enter Phone Number" 
                            onInvalid={handleInvalid}
                            onInput={handleInput}
                            required onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    
                </div>

                <div className="statement-container">
                    <div className="statement-form">
                        <label className="statement-checkbox">
                            <input 
                                type="checkbox" 
                                id="agree" 
                                name="agree" 
                                value="Agree" 
                                required
                                onInvalid={handleInvalid}
                                onInput={handleInput}
                            />
                            {/* <span class="custom-checkbox"></span> */}
                            <p>I am above 18 years of age and read and hereby accept the <span><a href="#">Terms & Conditions</a></span> and <span><a href="#">Terms & Conditions</a></span></p>
                        </label>
                        <label className="statement-checkbox">
                            <input 
                                type="checkbox" 
                                id='agree'
                                name="agree" 
                                value="agree"
                            />
                            {/* <span class="custom-checkbox"></span> */}
                            <p>I agree to receive offers and promotional communications</p>
                        </label>
                    </div>
                </div>
                <div className="form-submit-button-container">
                    {/* <Link to={'/'}> */}
                        <button className="form-submit-button">Continue</button>
                    {/* </Link> */}
                </div>
            </form>
        </div>
    </section>
  )
}

export default SignUp