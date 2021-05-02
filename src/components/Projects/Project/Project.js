import React, { useEffect } from 'react';
import './Project.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Project = (props) => {

    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, [])

    const{name, summery, liveLink, clientCode, serverCode, tools, img} = (props.project)
    return (
        <div data-aos="slide-right" className="d-flex align-items-center w-75 m-auto mt-5 mb-5 shadow project-box">
            <div className="project-image me-5">
                <img src={img} alt=""/>
            </div>
            <div className="pe-5">
                <h1>{name}</h1>
                <p>Summery: {summery}</p>
                <a class="btn btn-primary me-3" href={liveLink} target="_blank">Live Site Link</a>
                <a class="btn btn-primary me-3" href={clientCode} target="_blank">Client Repository</a>
                {serverCode && <a class="btn btn-primary" href={serverCode} target="_blank">Server Repository</a>}
                <h6 className="mt-3">Using Technology: {tools}</h6>
            </div>
        </div>
    );
};

export default Project;