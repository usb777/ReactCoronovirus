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
import ViewAllUsersComponent  from './redux-component/viewallusers-component/ViewAllUsersContainer'
import UsersByIdComponent from './redux-component/userbyid-component/FindUserByIdContainer'
/*  Redux Part    */
import { Provider } from 'react-redux';
import { store } from './Store';

function App() {

 
  return (
    <div >
      
          

      <Provider store={store}>  
      <Router>
       <NavBarComponent />
       
      <Switch>   
           
             
      <Route path='/first-project'   render={() => <FirstComponent  />}       /> {/*url creation*/}
      <Route path='/dan-project'   render={() => <DanComponent  />}       />
      <Route path='/allusers'   render={() => <UsersComponent  />}       />
     
      <Route path='/allusers-redux' component={ViewAllUsersComponent} />
     
      <Route path='/croco'   render={() => <CrocodileComponent  />}       />
      
      <Route exact path="/user/:uId" render={props => <UsersByIdComponent {...props.match.params} />} />
    
       </Switch>

      </Router>
      </Provider>
    </div>
  );
}

export default App;
