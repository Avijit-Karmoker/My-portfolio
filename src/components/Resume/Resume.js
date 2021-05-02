import React from 'react';
import Navbar from '../Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleDown, faEnvelope, faGlobe, faHome, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Resume.css';
import resume from '../../file/Avijit Resume.pdf';

const Resume = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-5">
                <h1 className="text-center fw-bold resume-head">Here is My Resume</h1>
            </div>
            <div className="resume shadow">
                <div className="d-flex align-items-center mb-5">
                    <div className="name">
                        <p className="name1">Avijit</p>
                        <p className="name2">Karmoker</p>
                        <p className="skill">Web Developer</p>
                    </div>
                    <div className="ms-auto text-end address">
                        <p className="text-right">Barisal, Bangladesh <FontAwesomeIcon className="icon" icon={faHome} /></p>
                        <p className="text-right">+8801620160721 <FontAwesomeIcon className="icon" icon={faPhoneAlt} /></p>
                        <p><a href="mailto:avijitkarmoker050919@gmail.com">Gmail</a> <FontAwesomeIcon className="icon" icon={faEnvelope} /></p>
                        <p><a href="https://www.linkedin.com/in/avijit-karmoker-745b98210">LinkedIn</a> <FontAwesomeIcon className="icon" icon={faLinkedin} /></p>
                        <p><a href="https://github.com/Avijit-Karmoker">GitHub</a> <FontAwesomeIcon className="icon" icon={faGithub} /></p>
                    </div>
                </div>
                <div className="mb-5">
                    <p>As a Beginner Web Developer with 6 months of learning experience in the search for a position where I can enhance my skill set in web technologies to develop and implement solutions to meet business needs</p>
                </div>
                <hr />
                <div>
                    <h3 className="fw-bold">Technical Skills</h3>
                    <p style={{ marginBottom: 0 }}> <span className="fw-bold">Expert: </span>HTML5, CSS3, Bootstrap, JavaScript, ES6, React.js, Font Awesome, React, Bootstrap, Material UI, MongoDB, Node.js, Express.js</p>
                    <p style={{ marginBottom: 0 }}><span className="fw-bold">Comfortable: </span>SCSS, Redux, React-Redux, Data Structure, React-Native, Next-JS</p>
                    <p style={{ marginBottom: 30 }}><span className="fw-bold">Tools: </span>VS-Code, Chrome Dev Tools, Postman, npm, Git, Firebase, Netlify, Heroku</p>
                    <h3 className="fw-bold mb-3">Projects</h3>

                    {/* projects 1 */}
                    <p className="text-uppercase mb-0">april 16, 2021 - april 20, 2021</p>
                    <h4>Luxury - Hotel</h4>
                    <a style={{ marginRight: 10 }} href="https://burj-al-arab-1f8e0.web.app/">Live Site Link</a>
                    <a style={{ marginRight: 10 }} href="https://github.com/Avijit-Karmoker/luxury-hotel-client">Client Repo</a>
                    <a href="https://github.com/Avijit-Karmoker/luxury-hotel-server">Server Repo</a>
                    <p style={{ marginBottom: 0 }}><span className="fw-bold">Summery: </span>Here a multiple luxury hotel websites where a customer can see the room variation and picture, he can choose a room which he wants. He can book his room by online payment. A customer can give a review and the review also add to the home page</p>
                    <p style={{ marginBottom: 30 }}><span className="fw-bold">Technology Used: </span>React.js, MongoDB, express.js, Node.js, Firebase, Bootstrap, React Router</p>

                    {/* projects2 */}
                    <p className="text-uppercase mb-0">march 18, 2021 - march 21, 2021</p>
                    <h4>Mountain Riding</h4>
                    <a style={{ marginRight: 10 }} href="https://assignment-9-711cc.web.app/">Live Site Link</a>
                    <a style={{ marginRight: 10 }} href="https://github.com/Avijit-Karmoker/car-riding">Client Repo</a>
                    <p style={{ marginBottom: 0 }}><span className="fw-bold">Summery: </span>It’s a multipage traveling website. On this website you can find variations of vehicles, you can choose your traveling option, you can see the destination on the map, ticket cost, how many persons can travel, and how many seats are available. Finally, the cost of traveling</p>
                    <p style={{ marginBottom: 30 }}><span className="fw-bold">Technology Used: </span>React.js, Firebase, React Router, Bootstrap</p>

                    {/* projects3 */}
                    <p className="text-uppercase mb-0">april 09, 2021 - april 21, 2021</p>
                    <h4>Book Shop</h4>
                    <a style={{ marginRight: 10 }} href="https://assignment-10-7b706.firebaseapp.com/">Live Site Link</a>
                    <a style={{ marginRight: 10 }} href="https://github.com/Avijit-Karmoker/book-shop-client">Client Repo</a>
                    <a href="https://github.com/Avijit-Karmoker/book-shop-server">Server Repo</a>
                    <p style={{ marginBottom: 0 }}><span className="fw-bold">Summery: </span> Here a website with react and I use MongoDB to store website products and buyer information. So, the benefit of this website, the owner of the website can upload a product into this website and he can delete a product from this website, finally, a buyer can buy a product from this website & the owner can see the order address to send his parcel for home delivery</p>
                    <p style={{ marginBottom: 30 }}><span className="fw-bold">Technology Used: </span>React.js, Firebase, React Router, Bootstrap, MongoDB, express.js, Node.js</p>

                    <h3 className="fw-bold">Education</h3>
                    <p style={{ marginBottom: 0 }}>2017 - Present, BSc in Computer Science & Engineering</p>
                    <h5>Gono Bishwabidyalay</h5>
                </div>
            </div>
            <div style={{ marginBottom: 100}}className="text-center mt-5">
                <a href={resume} type="button" class="btn btn-outline-success">
                    <FontAwesomeIcon style={{marginRight: 10}} className="icon" icon={faArrowAltCircleDown} /> 
                    Resume
                </a>
            </div>
        </div>
    );
};

export default Resume;