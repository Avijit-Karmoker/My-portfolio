import React from 'react';
import Navbar from '../Navbar/Navbar';
import blog1 from '../../images/blog1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

const Blogs = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-center resume-head">Here some of My Blogs</h1>
            <div className="row container" style={{ margin: 'auto' }}>
                <div className="col-md-4">
                    <div className="p-3 shadow rounded-3">
                        <img style={{ width: '100%' }} src={blog1} alt="" />
                        <h4 className="mt-3">10 Important things about JavaScript beginner must know</h4>
                        <a href="https://ovijit.medium.com/10-important-things-about-javascript-beginner-must-know-c311965fd723" type="button" class="btn btn-outline-warning" target="_blank">Read More <FontAwesomeIcon style={{ color: '#fff' }} className="icon" icon={faAngleDoubleRight} /></a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="p-3 shadow rounded-3">
                        <img style={{ width: '100%', borderRadius: '8px'}} src={blog1} alt="" />
                        <h4 className="mt-3">10 Important things about JavaScript beginner must know</h4>
                        <a href="https://ovijit.medium.com/10-important-things-about-javascript-beginner-must-know-c311965fd723" type="button" class="btn btn-outline-warning" target="_blank">Read More <FontAwesomeIcon style={{ color: '#fff' }} className="icon" icon={faAngleDoubleRight} /></a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="p-3 shadow rounded-3">
                        <img style={{ width: '100%' }} src={blog1} alt="" />
                        <h4 className="mt-3">10 Important things about JavaScript beginner must know</h4>
                        <a href="https://ovijit.medium.com/10-important-things-about-javascript-beginner-must-know-c311965fd723" type="button" class="btn btn-outline-warning" target="_blank">Read More <FontAwesomeIcon style={{ color: '#fff' }} className="icon" icon={faAngleDoubleRight} /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;