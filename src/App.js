import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PublicRoute from './Components/Router/PublicRouteComponent';
import PrivateRoute from './Components/Router/PrivateRouteComponent';
import Header from './Layout/HeaderComponent';
import Footer from './Layout/FooterComponent';
import MenuBar from './Layout/MenuDrawerComponent';
import SubscribedServices from './Components/SubscribedServices/SubscribedServicesComponent';
import Login from './Components/Login/LoginComponent';
import CollaberaDevOpsPlatform from './Components/CDP/CollaberaDevOpsPlatform'
import SignUp from './Components/Signup/SignUpComponent';
import CDPConnectorProfileDashboard from './Components/CDP/CDPConnectorProfileDashboard';
import Connectors from './Components/Connectors/ConnectorsTableComponent'
import Profile from './Components/Profile/ProfileTableComponent';
import NewConnector from './Components/Connector/NewConnectorComponent';
import Dashboard from './Components/Dashboard/DashboardComponent';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    paddingLeft: theme.spacing(5),
    paddingTop: theme.spacing(-5),

  },
});
function App(props) {
  const { classes, theme } = props;
  const [drawOpen, setDrawOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setDrawOpen(true);
    //alert(1)
};

const handleDrawerClose = () => {
    setDrawOpen(false);
};

  return (
    <div className="App">      
       <div className='main'>
       <Router>
         <React.Fragment>
         <Header/>
       <Switch>
          <PublicRoute restricted={true} component={Login} path="/" exact />
          <PublicRoute restricted={true} component={Login} path="/login" exact />
          <PrivateRoute restricted={true} component={Dashboard} path="/dashboard" exact />
          <PrivateRoute restricted={true} component={SubscribedServices} path="/subscribedservices" exact />
          <PrivateRoute restricted={false} component={SignUp} path="/signup" exact />
          <PrivateRoute restricted={true} component={Connectors} path="/subscribedservices/CDP/connectors" exact />
          <PrivateRoute restricted={true} component={Profile} path="/subscribedservices/CDP/profile" exact />
          <PrivateRoute restricted={false} component={CollaberaDevOpsPlatform} path="/subscribedservices/CDP" exact />
          <PrivateRoute restricted={false} component={CDPConnectorProfileDashboard} path="/subscribedservices/CDP/cdpconnectorprofile" exact />
          <PrivateRoute restricted={false} component={NewConnector} path="/subscribedservices/CDP/new-connector" exact />
          <PublicRoute
              restricted={false}
              path="*"
              component={() => "404 Not Found"}
            />
          {/* <PrivateRoute component={Dashboard} path="/dashboard" exact /> */}
        </Switch>
        <Footer test={'test'}/>
        </React.Fragment>
        </Router>        
      </div>       
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(App);
