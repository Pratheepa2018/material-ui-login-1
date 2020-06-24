import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PublicRoute from './Components/Router/PublicRouteComponent';
import Header from './Layout/HeaderComponent';
import Footer from './Layout/FooterComponent';
import Dashboard from './Components/Dashboard/DashboardComponent';
import Login from './Components/Login/LoginComponent';
import CollaberaDevOpsPlatform from './Components/CDP/CollaberaDevOpsPlatform'
import SignUp from './Components/Signup/SignUpComponent';
import Connectors from './Components/Connectors/ConnectorsTableComponent'
import Profile from './Components/Profile/ProfileTableComponent';
import NewConnector from './Components/Connector/NewConnectorComponent';

function App() {
  return (
    <div className="App">      
      <div className='main'>
        <Router>
          <React.Fragment>
            <Header />
            <Switch>
              <PublicRoute restricted={true} component={Login} path="/" exact />
              <PublicRoute restricted={true} component={Login} path="/login" exact />
              <PublicRoute restricted={true} component={Dashboard} path="/dashboard" exact />
              <PublicRoute restricted={false} component={SignUp} path="/signup" exact />
              <PublicRoute restricted={true} component={Connectors} path="/connectors" exact />
              <PublicRoute restricted={true} component={Profile} path="/profile" exact />
              <PublicRoute restricted={false} component={CollaberaDevOpsPlatform} path="/collaberadevopsplatform" exact />
              <PublicRoute restricted={false} component={NewConnector} path="/new-connector" exact />
            </Switch>
            <Footer />
          </React.Fragment>
        </Router>        
      </div>       
    </div>
  );
}

export default App;
