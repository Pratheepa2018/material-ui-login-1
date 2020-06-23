import React from 'react';
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import PublicRoute from './Components/Router/PublicRouteComponent';
import PrivateRoute from './Components/Router/PrivateRouteComponent';

import Header from './Layout/HeaderComponent';
import Footer from './Layout/FooterComponent';

import Dashboard from './Components/Dashboard/DashboardComponent';
import Login from './Components/Login/LoginComponent';

function App() {
  return (
    <div className="App">
       <Header />
       <div className='main'>
       <Router>
       <Switch>
          <PublicRoute restricted={true} component={Login} path="/" exact />
          <PublicRoute restricted={true} component={Login} path="/login" exact />
          <PublicRoute restricted={true} component={Dashboard} path="/dashboard" exact />
          {/* <PrivateRoute component={Dashboard} path="/dashboard" exact /> */}
        </Switch>
        </Router>
        </div>
       <Footer />
    </div>
  );
}

export default App;
