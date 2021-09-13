import React from 'react'
import "./css/Navbar.css";
import Notice from './Notice';

export default function Navbar() {
    return (
        <nav id="navbar-container">
            <Notice />
            <h2>Weather Forecast</h2>
        </nav>
    )
}
