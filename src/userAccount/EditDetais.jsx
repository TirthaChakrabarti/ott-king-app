import React from 'react'

const EditDetais = () => {
  return (
    <section>
        <div className="edit-header">Edit details</div>
        <div>
            <div className="edit-name">
                <input type="text" placeholder="First Name" />
                <input type='text' placeholder="Last Name" />
            </div>
            <div className="edit-age">Age</div>
            <div className="edit-gender">Gender</div>
            <div className="edit-submit">Submit</div>   
        </div>
    </section>
  )
}

export default EditDetais