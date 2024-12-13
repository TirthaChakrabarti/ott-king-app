import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'

import '../../styles/loginSignUp/signup.css'
import { Link, useLocation } from 'react-router-dom'

const SignUp = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

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
            Navigate('/login');
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
                        <input className="name" type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)}/>
                        <input className="email" type="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)}/>
                        <input className="phone" type="number" placeholder="Enter Phone Number" onChange={(e) => setPhone(e.target.value)}/>
                    </div>
                    
                </div>

                {/* <div className="form-details">
                    <input className="form-input" type="text" placeholder="Enter Name" />
                    <input className='form-input' type="email" placeholder="Enter Email" />
                </div> */}


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