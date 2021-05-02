import React from 'react';
import Navbar from '../../Navbar/Navbar';
import AboutMe from '../AboutMe/AboutMe';
import Header from '../Header/Header';
import HomeResume from '../HomeResume/HomeResume';
import Social from '../Social/Social';

const Home = () => {
    return (
        <section>
            <Navbar></Navbar>
            <Header></Header>
            <AboutMe></AboutMe>
            <HomeResume></HomeResume>
            <Social></Social>
        </section>
    );
};

export default Home;