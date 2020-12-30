import '../stylesheets/App.css';
import { Header } from "./Header";
import React, { useState, useEffect } from "react";

export const App = ({ darkMode }) => {
    const [theme, setTheme] = useState(darkMode ? "dark" : "light");

    useEffect(() =>
        document.body.classList.add(theme)
    )

    useEffect(() => {
        theme === "light"
            ? document.body.classList.replace("dark", "light")
            : document.body.classList.replace("light", "dark")
    }, [theme])

    return (
        <>
            <svg viewBox="0 0 300 20" className="nav-cover">
                <path d="m 0,0 h 299.74058 v 14.27138 c -101.41409,7.92594 -203.550143,7.34486 -299.74058,0 z" />
            </svg>
            <section className="landing-page">
                <Header theme={theme} setTheme={setTheme} />

                <div className="container app-grid">
                </div>
            </section>
        </>
    );
}