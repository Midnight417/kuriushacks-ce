import React from 'react';
import ReactDOM from 'react-dom';
//import { Router, Switch, Route } from "react-router"
import { Homepage } from './components/layouts/Homepage';

var darkMode = false;

const theme = localStorage.getItem("theme");


if (theme) {
  darkMode = (theme!=="light");
}

ReactDOM.render(
  <React.StrictMode>
          <Homepage darkMode={darkMode}/>
  </React.StrictMode>,
  document.getElementById('root')
);
