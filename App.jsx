import React, { useState } from 'react';
import Reacttemp from './core-concepts/Reacttemp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css';
// import './MyForm.css';
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
import TodoReducer from './TodoReducer';
import GlobalContext from './GlobalContext';
import ContactForm from './ContactForm';
import FormData from './FormData';
import Home from './Pages/Home';
import About from './Pages/About';
import User from './Pages/User';
import Contact from './Pages/Contact';

function App() {

  // const style = {
  //   color: "red",
  //   border: "2px solid blue",
  //   backgroundColor: "Yellow",
  //   padding: "10px",
  //   margin: "10px",
  // };

  // const [style, setStyle] = useState({

  //   color: " #FF6F61",
  //   backgroundColor: " #F7CAC9",
  //   border: "2px solid: #92A8D1",
  //   padding: "10px",
  //   margin: "10px",
  // });

  const [style, setStyle] = useState();


  return (
    <>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/user">User</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/user" element={<User />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>



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

      {/* <StyleContext.Provider value={{ style, setStyle }}>
        <ComponentOne />
        <ComponentTwo />
        <ComponentThree />
      </StyleContext.Provider> */}

      {/* <GlobalContext.Provider value={{ style, setStyle }}>
        <TodoReducer />
      </GlobalContext.Provider> */}

      {/* <ContactForm /> */}
      {/* <FormData /> */}



    </>
  );

}

export default App;
