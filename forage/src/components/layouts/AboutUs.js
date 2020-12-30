import '../stylesheets/AboutUs.css';
import React, { useState, useEffect } from "react";
import { About } from '../About';
import { Creators } from '../Creators';

export const AboutUs = ({ darkMode }) => {
  const [theme, setTheme] = useState(darkMode ? "dark" : "light");

  useEffect(() =>
    document.body.classList.add(theme)
  )

  useEffect(() => {
    theme === "light"
      ? document.body.classList.replace("dark", "light")
      : document.body.classList.replace("light", "dark")
  }, [theme])

  console.log(theme)

  return (
    <>
      <About theme={theme} setTheme={setTheme} />
      <Creators />
    </>
  );
}

