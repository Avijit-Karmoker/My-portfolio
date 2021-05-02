import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Contact.css';
import ContactForm from './ContactForm.js';

const Contact = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="contact">
                <div className="container">
                    <h1 className="text-center text-uppercase text-white pt-5">Get in touch</h1>
                    <div className="line rounded-pill"></div>
                    <p className="question text-center mt-4 fs-5">Have any question for me or want to work together?</p>
                    <div>
                        <ContactForm></ContactForm>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;