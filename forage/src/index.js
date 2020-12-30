import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Homepage } from './components/layouts/Homepage';
import { App } from './components/layouts/App';
import { Education } from './components/layouts/Education';


var darkMode = false;

const theme = localStorage.getItem("theme");


if (theme) {
  darkMode = (theme!=="light");
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Homepage darkMode={darkMode}/>
        </Route>
        
        <Route path="/app" exact>
          <App darkMode={darkMode}/>
        </Route>

        <Route path="/education" exact>
          <Education darkMode={darkMode}/>
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
