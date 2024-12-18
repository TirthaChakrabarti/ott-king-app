import React, { useEffect, useState } from 'react'
import '../styles/userAccount/editeDetails.css'
import axiosInstance from '../api/axiosInstance'
import { Link } from 'react-router-dom'

const EditDetais = ({ onClose }) => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    birthdate: '',
    gender: '',
  })

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');


  // Fetching already available data of user to show in edit details form
  useEffect(() => {
    const fetchUserIdentity = async () => {
        try {
            const response = await axiosInstance.get('/auth/user-details');
            console.log(response.data.user);
            const { name, phone, email, birthdate, gender } = response.data.user;     

            const formattedDate = new Date(birthdate).toISOString().split('T')[0];
            
            setFormData({
              name: name || '',
              email: email || '',
              phone: phone || '',
              birthdate: formattedDate || '',
              gender: gender || '',
          });

        } catch (error) {
            console.error(error);
        }
    }

    fetchUserIdentity();
}, [])

  const handleChange = (e) => {
    const { name, value} = e.target;
    setFormData( (previous) => ({ ...previous, [name] : value }) )
    console.log(formData);
  }

  const editSubmitClickHandler = async () => {
    try {
      const updateData = Object.fromEntries(
        Object.entries(formData).filter( ([_, value]) => value.trim() !== '' )
      ) 
  
      if (Object.keys(updateData).length === 0) {
        setError('Please fill in at least one field.');
        return;
      }
  
      setError('');
      setSuccess('');
  
      await axiosInstance.put('/auth/update', updateData)
      setSuccess('Details updated successfully');
      console.log(success);
      // alert('Details updated successfully.');
      onClose();
      window.location.reload();
    } catch (error) {
      console.error(error);
      setError('An error occurred while updating details.');
      console.log(error);
      // alert('An error occurred while updating details.');
    }
  }

  return (
    <section 
      className='edit-details-parent'
    >
        <div className="edit-header">Edit Personal Details</div>
          <div>
              <div className="edit-name">
                  <input type="text" name='name' placeholder="Enter Name" value={formData.name} onChange={handleChange} />
                  <input type='text' name='email' placeholder="Enter email" value={formData.email} onChange={handleChange}/>
              </div>
              <div className='edit-age-phone'>
                <input type='date' name='birthdate' placeholder="Enter Age" value={formData.birthdate} onChange={handleChange} style={{color: 'white', placeholderColor: 'gold'}}/>
                <input type='text' name='phone' minlength='10' maxlength='10' placeholder="Enter Phone No." value={formData.phone} onChange={handleChange} />
              </div>
              <div className="edit-gender">
                <form className='gender-form'>
                  <div className='gender'>Gender:</div>
                  <div>
                    <input type="radio" id="male" name="gender" value="Male" onChange={handleChange} checked={formData.gender === 'Male'} />
                    <label for="male" class="select-gender-button">Male</label>

                    <input type="radio" id="female" name="gender" value="Female" onChange={handleChange} checked={formData.gender === 'Female'} />
                    <label for="female" class="select-gender-button">Female</label>

                    <input type="radio" id="other" name="gender" value="other" onChange={handleChange} checked={formData.gender === 'Other'} />
                    <label for="other" class="select-gender-button">Others</label>
                  </div>
                </form>
              </div>
              <div className="edit-submit">
                  <button 
                    className='edit-submit-button'
                    onClick={editSubmitClickHandler}
                  >
                    Submit
                  </button>
              </div>   
          </div>
    </section>
  )
}

export default EditDetais