import React, { useEffect, useState } from 'react'
import { Accordion } from 'react-bootstrap'

import '../styles/userAccount/userAccount.css'
import { Link } from 'react-router-dom'
import Modal from './Modal'
import EditDetais from './EditDetais'
import axiosInstance from '../api/axiosInstance'
import axios from 'axios'

const UserAccountPage = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [gender, setGender] = useState('');

    const[isEmailVisible, setIsEmailVisible] = useState(false);
    const [isBirthdateVisible, setIsBirthdateVisible] = useState(false);
    const [isGenderVisible, setIsGenderVisible] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        const fetchUserIdentity = async () => {
            try {
                const response = await axiosInstance.get('/auth/user-details');
                console.log(response.data.user);
                const { name, phone, email, birthdate, gender } = response.data.user;

                console.log(name, email, phone, birthdate, gender);

                setName(name);
                setPhone(phone);

                if (email) {
                    setEmail(email);
                    setIsEmailVisible(true);
                }

                if (birthdate) {
                    const formattedDate = new Date(birthdate).toISOString().split('T')[0];
                    setBirthdate(formattedDate);
                    setIsBirthdateVisible(true);
                }

                if (gender) {
                    setGender(gender);
                    setIsGenderVisible(true);
                }

            } catch (error) {
                console.error(error);
            }
        }

        fetchUserIdentity();
    }, [])

    const signOutClickHandler = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }

    const deleteClickHandler = async () => {
        try {
            await axiosInstance.delete('/auth/delete');
            localStorage.removeItem('token');
            // alert('Account deleted successfully.');
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    }

  return (
    <section className='account-details-parent'>

        <div className="subscription">
            <div className="subscription-header">
                <h5>User Details</h5>
            </div>
            <div 
                className="subscription-details"
                style={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}
            >
                <div className="subscription-details">
                    <p id='plan-name'>Name: {name}</p>
                    <p id='plan-price'>Phone: {phone}</p>                    
                      
                    {isEmailVisible && (<p style={{color: 'lightgrey'}}>Email: {email}</p>)}
                    {isBirthdateVisible && (<p style={{color: 'lightgrey'}}>Birthdate: {birthdate}</p>)}
                    {isGenderVisible && (<p style={{color: 'lightgrey'}}>Gender: {gender}</p>)}
                </div>
                <img 
                    src='https://cdn-icons-png.flaticon.com/512/149/149071.png' 
                    alt='user' 
                    style={{width: '140px', height: '140px', borderRadius: '50%', marginRight: '40px'}}
                />
            </div>
        </div>

        <Accordion defaultActiveKey={['0']} alwaysOpen className="custom-accordion">
        <Accordion.Item eventKey="0" className="custom-accordion-item">
            <Accordion.Header className='custom-accordion-header'>
                Account Settings
            </Accordion.Header>
            <Accordion.Body className="custom-accordion-body">
                <div className="account-details-subsections">
                    <div className="personal-details">
                        <div>
                            <h4 id='personal-details'>Edit Personal Details</h4>
                            <p id='personal-details-text'>Change your Name, Age and Gender</p>
                        </div>
                        {/* <Link to={'/edit-details'}>
                            <div id='edit' onClick={openModal}>Edit</div>
                        </Link> */}
                        <div id='edit' onClick={openModal} style={{cursor: 'pointer'}}>Edit</div>

                        <Modal isOpen={isModalOpen} onClose={closeModal}>
                            <EditDetais onClose={closeModal}/>
                        </Modal>
                    </div>
                    <div className="signout">
                        <div>
                            <h4 id='sign-out'>Sign Out</h4>
                            <p id='sign-out-text'>You wil be signed out form this device</p>
                        </div>
                        <div id='signout' style={{cursor: 'pointer'}} onClick={signOutClickHandler}>Sign Out</div>
                    </div>
                    <div className="delete-account">
                        <div>
                            <h4 id='delete-account'>Delete Account</h4>
                            <p id='delete-account-text'>All your information will be lost and unrecoverable</p>
                        </div>
                        <div id='delete' style={{cursor: 'pointer'}} onClick={deleteClickHandler}>Delete</div>
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