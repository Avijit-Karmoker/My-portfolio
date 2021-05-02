import React from 'react';
import Project from '../Project/Project';
import luxuryHotel from '../../../images/luxuryHotel.png';
import bookShops from '../../../images/bookShop.png';
import mountainRiding from '../../../images/carRiding.png';
import allLeagues from '../../../images/allLeagues.png';
import doctor from '../../../images/doctorsPortal.png';
import player from '../../../images/playerHiring.png';
import './Projects.css';
import Navbar from '../../Navbar/Navbar';

const Projects = () => {
    const projects = [
        {
            id: 1,
            name: 'Luxury-Hotel',
            summery: 'Here a multiple luxury hotel websites where a customer can see the room variation and picture, he can choose a room which he wants. He can book his room by online payment. A customer can give a review and the review also add to the home page.',
            liveLink: 'https://burj-al-arab-1f8e0.web.app/',
            clientCode: 'https://github.com/Avijit-Karmoker/luxury-hotel-client',
            serverCode: 'https://github.com/Avijit-Karmoker/luxury-hotel-server',
            tools: 'React.js, MongoDB, express.js, Node.js, Firebase, Bootstrap, React Router',
            img: luxuryHotel
        },
        {
            id: 2,
            name: 'Book-Shop',
            summery: 'Here a website with react and I use MongoDB to store website products and buyer information. So, the benefit of this website, the owner of the website can upload a product into this website and he can delete a product from this website, finally, a buyer can buy a product from this website & the owner can see the order address to send his parcel for home delivery.',
            liveLink: 'https://assignment-10-7b706.firebaseapp.com/',
            clientCode: 'https://github.com/Avijit-Karmoker/book-shop-client',
            serverCode: 'https://github.com/Avijit-Karmoker/book-shop-server',
            tools: 'React.js, Firebase, React Router, Bootstrap, MongoDB, express.js, Node.js',
            img: bookShops
        },
        {
            id: 3,
            name: 'Mountain Raiding',
            summery: 'It’s a multiple page traveling website. On this website you can find variations of vehicles, you can choose your traveling option, you can see the destination on the map, ticket cost, how many persons can travel, and how many seats are available. Finally, the cost of traveling.',
            liveLink: 'https://assignment-9-711cc.web.app/',
            clientCode: 'https://github.com/Avijit-Karmoker/car-riding',
            tools: 'React.js, Firebase, React Router, Bootstrap',
            img: mountainRiding
        },
        {
            id: 4,
            name: 'All Leagues',
            summery: 'There I make a all leagues where in home page you can see the league name, sports type. Beside this if you want to see the club details then you can click on explore and see the details',
            liveLink: 'https://angry-dijkstra-9e1277.netlify.app/',
            clientCode: 'https://github.com/Avijit-Karmoker/leagues-lineup',
            tools: 'React.js, Bootstrap, React Router, CSS3, Material UI',
            img: allLeagues
        },
        {
            id: 5,
            name: 'Player Hiring',
            summery: 'Here you can find premier league football player and you can hire them, beside this you can see their yearly fees',
            liveLink: 'https://fervent-wing-2563f2.netlify.app/',
            clientCode: 'https://github.com/Avijit-Karmoker/simple-react-player-hiring',
            tools: 'React.js, Bootstrap',
            img: player
        },
        {
            id: 6,
            name: 'Doctors Portal',
            summery: 'Here you can see about treatment type, doctors about and their available time and your appointment time and date, also doctor see all the appointment of patient give',
            liveLink: 'https://practice-firebase-41.web.app/',
            clientCode: 'https://github.com/Avijit-Karmoker/doctor-portal-client/',
            serverCode: 'https://github.com/Avijit-Karmoker/doctors-portal-server',
            tools: 'React.js, MongoDB, express.js, Node.js, Firebase, Bootstrap, React Router',
            img: doctor
        }
    ];
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className="projects">
                    <h1 className="text-center project-text">Here is My Projects</h1>
                </div>
            </div>
            <div className="containers m-5">
                {
                    projects.map(project => <Project project={project} key={project.id}></Project>)
                }
            </div>
        </div>

    );
};

export default Projects;