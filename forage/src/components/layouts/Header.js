import React from "react";
import { FaUser, FaMoon, FaSun } from "react-icons/fa"

export const Header = ({ theme, setTheme }) => {

    return (

        <header className="container">
            <div className="logo">
                <img src={theme === "light" ? "./graphics/logo.png" : "./graphics/logo-dark.png"} alt="logo" />
                <h1>Forage</h1>
            </div>

            <nav className="navbar">
                <ul>
                    <li>About Us</li>
                    <li>Forage App</li>
                    <li>Education</li>
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