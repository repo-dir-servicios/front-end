import React from 'react';

import { Reset } from 'styled-reset'

import './App.scss'

import Button from "./components/elements/Button";

import FooterMain from "./components/general/FooterMain/FooterMain"
import Home from './components/sections/Home/Home';
import Categories from './components/sections/Categories/Categories';
import Login from './components/sections/Login/Login';
import Providers from './components/sections/Providers/Providers';
import Services from './components/sections/Services/Services';
import Profile from './components/sections/Profile/Profile';
import Register from './components/sections/Register/Register';


import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Reset/>

        <main className="Main">
          
          <Home/>
          <Categories/>
          <Login/>
          <Providers/>
          <Services/>
          <Profile/>
          <Register/>

        </main>

        <FooterMain/>

      </div>
    </BrowserRouter>
  );
}

export default App;
