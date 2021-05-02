import React from 'react';
import Typical from 'react-typical';
import './Header.css';
import img from '../../../images/myImage.png';

const Header = () => {
    return (
        <section className="header">
            <div className="container header">
                <div className="image">
                    <img src={img} alt="" />
                </div>
                <div className="header-text">
                    <h1 className="text-brand">Hi, I'm Avijit Karmoker</h1>
                    <h2 className="text-white">
                        I'm 
                        <Typical
                            loop={Infinity}
                            wrapper="span"
                            steps={[
                                ' a Web Developer 💻',
                                2000,
                                ' a Youtuber 🎥',
                                2000,
                                ' an Open Sourcer',
                                2000,
                                ' a Music Lover 🎶',
                                2000
                            ]}
                        />
                    </h2>
                </div>
            </div>
        </section>
    );
};

export default Header;