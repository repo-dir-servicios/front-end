import React from 'react';

import { Reset } from 'styled-reset'

import './App.scss'

import Button from "./components/elements/Button";

import FooterMain from "./components/general/FooterMain/FooterMain"
import Home from './components/sections/Home/Home';
import Categories from './components/sections/Categories/Categories';
import Category from './components/sections/Categories/Category/Category';
import Login from './components/sections/Login/Login';
import Providers from './components/sections/Providers/Providers';
import Services from './components/sections/Services/Services';
import Profile from './components/sections/Profile/Profile';
import Register from './components/sections/Register/Register';

import NotFound from './components/NotFound/NotFound';


import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProviderDetail from './components/Provider/ProviderDetail/ProviderDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Reset/>

        <main className="Main">
          
          <Switch>
            
            <Route exact path="/" component={Home}/>
            
            {/* <Route exact path="/categories" component={Categories}/>
            <Route exact path="/categories/:id" component={Category}/>
            
            <Route exact path="/login" component={Login}/> */}
            
            <Route exact path="/providers" component={Providers}/>
            <Route exact path="/providers/:id" component={ProviderDetail}/>
            
            {/* <Route exact path="/services" component={Services}/>
            
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/register" component={Register}/> */}
            
            <Route exact path="*" component={NotFound}/>

          </Switch>
        </main>

        <FooterMain/>

      </div>
    </BrowserRouter>
  );
}

export default App;
