import React from 'react'
import { Accordion } from 'react-bootstrap'

import '../styles/userAccount/userAccount.css'
import { Link } from 'react-router-dom'

const UserAccountPage = () => {
  return (
    <section className='account-details-parent'>

        <Accordion defaultActiveKey={['0']} alwaysOpen className="custom-accordion">
        <Accordion.Item eventKey="0" className="custom-accordion-item">
            <Accordion.Header className='custom-accordion-header'>
                User Details
            </Accordion.Header>
            <Accordion.Body className="custom-accordion-body">
                <div className="account-details-subsections">
                    <div className="personal-details">
                        <div>
                            <h4 id='personal-details'>Personal Details</h4>
                            <p id='personal-details-text'>Change your Name, Age and Gender</p>
                        </div>
                        <Link to={'/edit-details'}>
                            <div id='edit'>Edit</div>
                        </Link>
                    </div>
                    <div className="delete-account">
                        <div>
                            <h4 id='delete-account'>Delete Account</h4>
                            <p id='delete-account-text'>All your information will be lost and unrecoverable</p>
                        </div>
                        <div id='delete'>Delete</div>
                    </div>
                    <div className="signout">
                        <div>
                            <h4 id='sign-out'>Sign Out</h4>
                            <p id='sign-out-text'>You wil be signed out form this device</p>
                        </div>
                        <div id='signout'>Sign Out</div>
                    </div>
                </div>
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        
        <div className="subscription">
            <div className="subscription-header">
                <h5>Subscription</h5>
            </div>
            <div className="subscription-details">
                <p id='plan-name'>OTTKING GOLD <span id='current-plan'>(Current plan)</span></p>
                <p id='plan-price'>Rs. 117/month</p>
                <p id='plan-expiry'>Expires on 30/11/2024</p>
            </div>
            <Link to={'/transaction-history'}>
                <div className="subscription-history">
                    <button className='subscription-history-button'>Subscription History</button>
                </div>
            </Link>
        </div>

        {/* <div className='account-details-section'>

            <div className='account-details'>
                <div className="account-details-header">
                    <h3>Account Details</h3>
                </div>
                <div className="account-details-subsections">
                    <div className="personal-details">
                        <h4>Personal Details</h4>
                        <p>Change your Name, Age and Gender</p>
                    </div>
                    <div className="delete-account">
                        <h4>Delete Account</h4>
                        <p>All your information will be lost and unrecoverable</p>
                    </div>
                    <div className="signout">
                        <h4>Sign Out</h4>
                        <p>You wil be signed out form this device</p>
                    </div>
                </div>
            </div>

            <div className="subscription">
                <div className="subscription-header">
                    <h3>Subscription</h3>
                </div>
                <div className="subscription-details">
                    <p>OTTKing Gold</p>
                    <p>Rs. 117/month</p>
                    <p>Expires on 30/11/2024</p>
                </div>
                <div className="subscription-history"></div>
            </div>
        </div> */}
    </section>
  )
}

export default UserAccountPage