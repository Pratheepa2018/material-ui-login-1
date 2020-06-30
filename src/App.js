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
import NewProfile from './Components/Profile/NewProfileComponent';
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
  closemenu: {
    flexGrow: 1,
    paddingLeft: "70px",
    paddingTop: theme.spacing(-5),

  },
});
function App(props) {
  const { classes } = props;
  const [drawOpen, setDrawOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setDrawOpen(true);
};

const handleDrawerClose = () => {
    setDrawOpen(false);
};

  return (
    <div className="App">
      <div className='main'>
        <Router>
          <React.Fragment>
            <MenuBar open={handleDrawerOpen} close={handleDrawerClose} />
            <main className={drawOpen ? 'makeStyles-appBarShift-6' : classes.closemenu} >
              <div className={classes.toolbar} />
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
                  <PrivateRoute restricted={false} component={NewProfile} path="/subscribedservices/CDP/new-profile" exact />
                  {/* <PrivateRoute component={Dashboard} path="/dashboard" exact /> */}
                  <PublicRoute
                    restricted={false}
                    path="*"
                    component={() => "404 Not Found"}
                  />
                </Switch>
       
            </main>
          </React.Fragment>
        </Router>
        <Footer isdrawopen={drawOpen ? 'makeStyles-appBarShift-6' : classes.closemenu} innerClass={classes.toolbar} />
      </div>
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(App);
