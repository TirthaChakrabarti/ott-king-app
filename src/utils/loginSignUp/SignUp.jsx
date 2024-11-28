import React from 'react'

import '../../styles/loginSignUp/signup.css'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <section className="signup-parent">
            <div className="signup-container">

                {/* Photo section  */}
                <div className="signup-image-container"></div>

                {/* Form section  */}
                <div className="form-container">
                    <div className="form-header">
                        <h3>Welcome, New User!</h3>
                        <p>Please register yourself...it's easy!</p>
                    </div>

                    <div className="form-details">
                        <div className="form-input-container">
                            <input className="name" type="text" placeholder="Enter Name" />
                            <input className="email" type="email" placeholder="Enter Email" />
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
                        <Link to={'/'}>
                            <button className="form-submit-button">Continue</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default SignUp