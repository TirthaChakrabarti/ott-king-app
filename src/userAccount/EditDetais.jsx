import React from 'react'

import '../styles/userAccount/editeDetails.css'
import { Link } from 'react-router-dom'

const EditDetais = () => {
  return (
    <section 
      className='edit-details-parent'
    >
        <div className="edit-header">Edit Personal Details</div>
          <div>
              <div className="edit-name">
                  <input type="text" placeholder="Enter Name" />
                  <input type='text' placeholder="Enter email" />
              </div>
              <div className='edit-age-phone'>
                <input type='date' placeholder="Enter Age" style={{color: 'white', placeholderColor: 'gold'}}/>
                <input type='number' placeholder="Enter Phone No." />
              </div>
              <div className="edit-gender">
                <form className='gender-form'>
                  <div className='gender'>Gender:</div>
                  <div>
                    <input type="radio" id="male" name="gender" value="male" />
                    <label for="male" class="select-gender-button">Male</label>

                    <input type="radio" id="female" name="gender" value="female" />
                    <label for="female" class="select-gender-button">Female</label>

                    <input type="radio" id="other" name="gender" value="other" />
                    <label for="other" class="select-gender-button">Others</label>
                  </div>
                </form>
              </div>
              <div className="edit-submit">
                <Link to={'/user-details'}>
                  <button className='edit-submit-button'>Submit</button>
                </Link>
              </div>   
          </div>
    </section>
  )
}

export default EditDetais