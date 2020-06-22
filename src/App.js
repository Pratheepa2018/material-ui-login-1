import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
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
       <Router>
       <Switch>
          <PublicRoute restricted={true} component={Login} path="/login" exact />
          <PrivateRoute component={Dashboard} path="/dashboard" exact />
        </Switch>
        </Router>
       <Footer />
    </div>
  );
}

export default App;
