import React from 'react';
import fast from '../../../images/speedometer.png';
import responsive from '../../../images/responsive.png';
import intuitive from '../../../images/idea.png';
import dynamic from '../../../images/dynamic.png';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div style={{background: '#dff9fb'}}>
            <h1 className="text-center p-5" style={{fontSize: '50px'}}>About Me</h1>
            <div>
                <div className="container row" style={{margin: 'auto'}}>
                    <div className="col-md-3">
                        <div className="p-2">
                            <div className="about-img">
                                <img src={fast} alt="" />
                            </div>
                            <div className="text-center">
                                <h3>Fast</h3>
                                <p className="pe-3 ps-3">Fist Load time and lag free inter action, my highest priority</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div>
                            <div className="about-img">
                                <img src={responsive} alt="" />
                            </div>
                            <div className="text-center">
                                <h3>Responsive</h3>
                                <p className="pe-5 ps-5">My layout will work on any device, big or small</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div>
                            <div className="about-img">
                                <img src={intuitive} alt="" />
                            </div>
                            <div className="text-center">
                                <h3>Intuitive</h3>
                                <p className="pe-5 ps-5">Strong preference for easy to use, intuitive UX/UI.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div>
                            <div className="about-img">
                                <img src={dynamic} alt="" />
                            </div>
                            <div className="text-center">
                                <h3>Dynamic</h3>
                                <p className="pe-3 ps-3">Websites don't have to be static, I love making pages come to life.</p>
                            </div>
                        </div>
                    </div>
                    <p className=" bg-secondary p-5 fs-5 text-white"><span className="fw-bold">Carrier Objectives: </span>As a Beginner Web Developer with 6 months of learning experience in the search for a position where I can enhance my skill set in web technologies to develop and implement solutions to meet business needs</p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;