import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="nav-background">
            <div className="containers">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container-fluid">
                        <Link class="navbar-brand fw-bold fs-1 text-brand" href="#">Ovijit</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ms-auto text-white">
                                <li class="nav-item fw-bold me-3">
                                    <Link class="nav-link btn-brand aria-current=page" to="/">Home</Link>
                                </li>
                                <li class="nav-item fw-bold me-3">
                                    <Link class="nav-link btn-brand" to="/projects">Projects</Link>
                                </li>
                                <li class="nav-item fw-bold me-3">
                                    <Link class="nav-link btn-brand" to="/resume">Resume</Link>
                                </li>
                                <li class="nav-item fw-bold me-3">
                                    <Link class="nav-link btn-brand" to="/blogs">Blogs</Link>
                                </li>
                                <li class="nav-item fw-bold me-3">
                                    <Link class="nav-link btn-brand" to="contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;