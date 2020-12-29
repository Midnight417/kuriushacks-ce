import '../stylesheets/Homepage.css';
import { LandingPage } from "../LandingPage"
import React, { useState, useEffect } from "react"
import { AboutUsSect } from '../AboutUsSect';

export const Homepage = ( {darkMode} ) => {
  const [theme, setTheme] = useState(darkMode ? "dark" : "light");

  useEffect(() => 
  document.body.classList.add(theme)
  , [])

  useEffect(() => {
    theme === "light"
    ? document.body.classList.replace("dark", "light")
    : document.body.classList.replace("light", "dark")
  }, [theme])

  console.log(theme)

  return (
    <>
      <LandingPage theme={theme} setTheme={setTheme}/>
      <AboutUsSect/>
    </>
  );
}

