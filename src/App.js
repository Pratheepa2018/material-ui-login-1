import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import PublicRoute from './components/router/publicRoute';
import PrivateRoute from './components/router/privateRoute';
import Header from './layout/header';
import Footer from './layout/footer';

import Home from './components/home';
import Login from './components/login';
function App() {
  return (
    <div className="App">
       <Header />
       <Router>
       <Switch>
          <PublicRoute restricted={true} component={Login} path="/login" exact />
          <PrivateRoute component={Home} path="/dashboard" exact />
        </Switch>
        </Router>
       <Footer />
    </div>
  );
}

export default App;
