import React from 'react';

import { Reset } from 'styled-reset'

import './App.scss'

import Button from "./components/elements/Button";

import FooterMain from "./components/general/FooterMain/FooterMain"
import Home from './components/sections/Home/Home';
import Categories from './components/sections/Categories/Categories';
import CategoryDetail from './components/sections/Categories/CategoryDetail/CategoryDetail';
import Login from './components/sections/Login/Login';
import Providers from './components/sections/Providers/Providers';

import Services from './components/sections/Services/Services';
import ServiceDetail from './components/sections/Services/ServiceDetail/ServiceDetail';

import Profile from './components/sections/Profile/Profile';
import Register from './components/sections/Register/Register';

import NotFound from './components/NotFound/NotFound';


import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProviderDetail from './components/Provider/ProviderDetail/ProviderDetail';
import ContractDetail from './components/Contracts/ContractDetail/ContractDetail';
import RequestDetail from './components/Requests/RequestDetail/RequestDetail';
import RequestForm from './components/Requests/RequestForm/RequestForm';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Reset/>

        <main className="Main">
          
          <Switch>
            
            <Route exact path="/" component={Home}/>
            
            <Route exact path="/categories" component={Categories}/>
            <Route exact path="/categories/:id" component={CategoryDetail}/>
            
            <Route exact path="/login" component={Login}/>
            
            <Route exact path="/providers" component={Providers}/>
            <Route exact path="/providers/:id" component={ProviderDetail}/>
            
            
            <Route exact path="/services" component={Services}/>
          
            <Route exact path="/services/:id" component={ServiceDetail}/>
            
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/register" component={Register}/>
          
            
            {/* <Route exact path="/requests" component={Providers}/> */}
            <Route exact path="/provider/:id/new-request" component={RequestForm}/>
            <Route exact path="/requests/:id" component={RequestDetail}/>
            
            {/* <Route exact path="/contracts" component={Providers}/> */}
            <Route exact path="/contracts/:id" component={ContractDetail}/>


            <Route exact path="*" component={NotFound}/>

          </Switch>
        </main>

        <FooterMain/>

      </div>
    </BrowserRouter>
  );
}

export default App;
