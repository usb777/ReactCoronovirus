import './App.css';
import React from 'react';
import logo from './logo.svg';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {FirstComponent} from "./first-component/FirstComponent"
import {DanComponent}    from "./dan-component/DanComponent"
import {Link} from 'react-router-dom'
import NavBarComponent  from './navbar-component/NavBarComponent'
import {UsersComponent} from './usersAll-component/UsersComponent'

import {CrocodileComponent} from './croco-component/CrocoComponent'


function App() {

  let x =0;


  return (
    <div >
      
      Our Router

     


      <Router>
       <NavBarComponent />
        <br/>
        <Link to="/"> homepage</Link>
        <br/>
        <Link to="/first-project"> first</Link>
        <br/>
        <Link to="/dan-project"> second </Link><br/>
        <Link to="/allusers"> all users</Link><br/>


       
        <Link to="/croco"> croco </Link><br/>
      <Switch>   
           
             
      <Route path='/first-project'   render={() => <FirstComponent  />}       /> {/*url creation*/}
      <Route path='/dan-project'   render={() => <DanComponent  />}       />
      <Route path='/allusers'   render={() => <UsersComponent  />}       />

      <Route path='/croco'   render={() => <CrocodileComponent  />}       />
    
      CrocodileComponent
       </Switch>

      </Router>

    </div>
  );
}

export default App;
