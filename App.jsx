import React, { useState } from 'react';
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
import { StyleContext } from './StyleContext';
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';
import ComponentThree from './ComponentThree';

function App() {

  // const style = {
  //   color: "red",
  //   border: "2px solid blue",
  //   backgroundColor: "Yellow",
  //   padding: "10px",
  //   margin: "10px",
  // };

  const [style, setStyle] = useState({

    color: " #FF6F61",
    backgroundColor: " #F7CAC9",
    border: "2px solid: #92A8D1",
    padding: "10px",
    margin: "10px",
  });


  return (
    <>
      {/* <Reacttemp /> */}
      {/* <Element /> */}
      {/* <Demostate /> */}
      {/* <Usetable /> */}
      {/* <Welcome /> */}
      {/* 
      <UserContext.Provider value={"Giri"}>
        <ThemeContext.Provider value={"red"}>
          <Dashboard />
        </ThemeContext.Provider>
      </UserContext.Provider> */}

      <StyleContext.Provider value={{ style, setStyle }}>
        <ComponentOne />
        <ComponentTwo />
        <ComponentThree />
      </StyleContext.Provider>


    </>
  );

}

export default App;
