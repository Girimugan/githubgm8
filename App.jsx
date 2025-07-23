import React from 'react';
import Reacttemp from './core-concepts/Reacttemp';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Demostate from './Demostate';
import Element from './Element';
import Usetable from './Usetable';
import Props from './User';
import Welcome from './Welcome';
import UserContext from './UserContext';
import { ThemeContext } from './ThemeContext';
import Dashboard from './Dashboard';

function App() {
  return (
    <>
      {/* <Reacttemp /> */}
      {/* <Element /> */}
      {/* <Demostate /> */}
      {/* <Usetable /> */}
      {/* <Welcome /> */}

      <UserContext.Provider value={"Giri"}>
        <ThemeContext.Provider value={"red"}>
          <Dashboard />
          </ThemeContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
