import React from "react";
import { FaUser, FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../stylesheets/Header.css"

export const Header = ({ theme, setTheme }) => {

    return (

        <header className="container">
            <Link to="/" >
                <div className="logo">
                    <img src={theme === "light" ? "./graphics/logo.png" : "./graphics/logo-dark.png"} alt="logo" />
                    <h1>Forage</h1>
                </div>
            </Link>

            <nav className="navbar">
                <ul>
                    <li><Link to="/about-us" >About Us</Link></li>
                    <li><Link to="/app">Forage App</Link></li>
                    <li><Link to="/education">Education</Link></li>
                </ul>
            </nav>

            <div className="user-settings">
                <FaUser />
                {
                    theme === "light"
                        ? <FaMoon id="light-dark-button" onClick={
                            () => {
                                setTheme(theme === "light" ? "dark" : "light");
                                localStorage.setItem("theme", theme === "light" ? "dark" : "light");
                            }} />
                        : <FaSun id="light-dark-button" onClick={
                            () => {
                                setTheme(theme === "light" ? "dark" : "light");
                                localStorage.setItem("theme", theme === "light" ? "dark" : "light");
                            }} />
                }

            </div>
        </header>
    )
}