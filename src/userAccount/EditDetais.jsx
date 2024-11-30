import React from 'react'

import '../styles/userAccount/editeDetails.css'
import { Link } from 'react-router-dom'

const EditDetais = () => {
  return (
    <section 
      className='edit-details-parent'
      style={{border: '1px solid white', marginTop: '30px'}}
    >
        <div className="edit-header">Edit Personal Details</div>
        <div>
            <div className="edit-name">
                <input type="text" placeholder="First Name" />
                <input type='text' placeholder="Last Name" />
            </div>
            <div className='edit-age-phone'>
              <input type='number' placeholder="Enter Age" />
              <input type='number' placeholder="Enter Phone No." />
            </div>
            <div className="edit-gender">
              <form>
                Gender:
                <input type="radio" name="gender" value="male" /> Male
                <input type="radio" name="gender" value="female" /> Female
                <input type="radio" name="gender" value="other" /> Other
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