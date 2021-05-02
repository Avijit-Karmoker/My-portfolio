import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import resume from '../../../images/resume.png';

const HomeResume = () => {
    return (
        <div style={{background: '#f1f2f6'}}>
            <h1 className="p-5 text-center text-primary">My Resume</h1>
            <div className="container">
                <div className="d-flex align-items-center">
                    <div className="resume-img m-5">
                        <img src={resume} alt="" />
                    </div>
                    <div style={{ marginBottom: 100, paddingLeft: '10%' }} className="text-center mt-5">
                        <a href={resume} type="button" class="btn btn-outline-success">
                            <FontAwesomeIcon className="icon" icon={faArrowAltCircleDown} />
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeResume;