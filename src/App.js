import React, { useState } from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PublicRoute from './Components/Router/PublicRouteComponent';
import PrivateRoute from './Components/Router/PrivateRouteComponent';
import Footer from './Layout/FooterComponent';
import MenuBar from './Layout/MenuDrawerComponent';
import Login from './Components/Login/LoginComponent';
import CollaberaDevOpsPlatform from './Components/CDP/CollaberaDevOpsPlatform'
import SignUp from './Components/Signup/SignUpComponent';
import CDPConnectorProfileDashboard from './Components/CDP/CDPConnectorProfileDashboard';
import Connectors from './Components/Connectors/ConnectorsTableComponent'
import Profile from './Components/Profile/ProfileTableComponent';
import NewConnector from './Components/Connectors/NewConnectorComponent';
import NewProfile from './Components/Profile/NewProfileComponent';
import NewProfileLayout from './Components/Profile/NewProfileComponentLayout';
import Dashboard from './Components/Dashboard/DashboardComponent';
import { withStyles } from '@material-ui/core/styles';
import Header from './Layout/HeaderComponent';
import Auth from './Layout/Authentication';
import PipelineUI from './Components/CIPipeline/PipelineUIComponent';
import ConnectorType from './Components/Connectors/ConnectorsTypeComponent';


//Pipeline imports
import PipelineDashboard from './Pipeline/Components/Dashboard/DemoDashboard';
import Projects from './Pipeline/Components/Projects/Projects';
import AddNewProject from './Pipeline/Components/Projects/AddNewProject';
import DevopsTools from './Pipeline/Components/DevopsTools/DevopsTools';
import AddDevopsTool from './Pipeline/Components/DevopsTools/AddDevopsTool';
import ScriptTemplates from './Pipeline/Components/ScriptTemplates/ScriptTemplatesComponent';
import AddScriptTemplates from './Pipeline/Components/ScriptTemplates/AddScriptTemplate';
import Repos from './Pipeline/Components/Repos/ReposComponent';
import ReposDetails from './Pipeline/Components/Repos/ReposDetails';
import BuildPipeline from './Pipeline/Components/Build/BuildPipelineComponent';
import CreateBuildPipeline from './Pipeline/Components/Build/CreateBuildPipeline';
import Release from './Pipeline/Components/Release/ReleaseDashboard';
import AddReleaseDetails from './Pipeline/Components/Release/AddReleaseDetails'

import './Styles/main.scss';

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
    paddingLeft: "70px"

  },
});
function App(props) {
  const { classes } = props;
  const [drawOpen, setDrawOpen] = useState(false);
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
            {Auth.isAuthenticated() ? <MenuBar open={handleDrawerOpen} close={handleDrawerClose} /> : <Header />}
            <main className={drawOpen ? 'makeStyles-appBarShift-6 slide-menu-open clip-header' : Auth.isAuthenticated() ? `${classes.closemenu} clip-header` : 'clip-header'} >
              {/* <div className={classes.toolbar} /> */}
              <Switch>
                <PublicRoute restricted={true} component={Login} path="/" exact />
                <PublicRoute restricted={true} component={Login} path="/login" exact />
                <PrivateRoute restricted={true} component={Dashboard} path="/dashboard" exact />
                <PrivateRoute restricted={false} component={SignUp} path="/signup" exact />
                <PrivateRoute restricted={true} component={Connectors} path="/dashboard/CDP/cdp-connector-profile/connectors" exact />
                <PrivateRoute restricted={true} component={Profile} path="/dashboard/CDP/cdp-connector-profile/profiles" exact />
                <PrivateRoute restricted={false} component={CollaberaDevOpsPlatform} path="/dashboard/CDP" exact />
                <PrivateRoute restricted={false} component={CDPConnectorProfileDashboard} path="/dashboard/CDP/cdp-connector-profile" exact />
                <PrivateRoute restricted={false} component={ConnectorType} path="/dashboard/CDP/cdp-connector-profile/connectors/connector-type" exact />
                <PrivateRoute restricted={false} component={NewConnector} path="/dashboard/CDP/cdp-connector-profile/connectors/new-connector" exact />
                <PrivateRoute restricted={false} component={NewProfile} path="/dashboard/CDP/cdp-connector-profile/profiles/new-profile-old" exact />
                <PrivateRoute restricted={false} component={NewProfileLayout} path="/dashboard/CDP/cdp-connector-profile/profiles/new-profile" exact />
                <PrivateRoute restricted={false} component={PipelineUI} path="/dashboard/CDP/api-pipeline" exact />
                
                {/* Devops Pipeline Code  */}
                <PrivateRoute restricted={false} component={PipelineDashboard} path="/dashboard/CDP/pipeline" exact />
                <PrivateRoute restricted={false} component={Projects} path="/dashboard/CDP/pipeline/Projects" exact />
                <PrivateRoute restricted={false} component={AddNewProject} path="/dashboard/CDP/pipeline/projects/add-project" exact />
                <PrivateRoute restricted={false} component={DevopsTools} path="/dashboard/CDP/pipeline/devopstools" exact />
                <PrivateRoute restricted={false} component={AddDevopsTool} path="/dashboard/CDP/pipeline/devopstools/add-devops-tool" exact />
                <PrivateRoute restricted={false} component={ScriptTemplates} path="/dashboard/CDP/pipeline/script-templates" exact />
                <PrivateRoute restricted={false} component={AddScriptTemplates} path="/dashboard/CDP/pipeline/script-templates/add-script-templates" exact />
                <PrivateRoute restricted={false} component={Repos} path="/dashboard/CDP/pipeline/repos" exact />
                <PrivateRoute restricted={false} component={ReposDetails} path="/dashboard/CDP/pipeline/repos/repos-details" exact />
                <PrivateRoute restricted={false} component={BuildPipeline} path="/dashboard/CDP/pipeline/build-pipeline" exact />
                <PrivateRoute restricted={false} component={CreateBuildPipeline} path="/dashboard/CDP/pipeline/build-pipeline/create-build-pipeline" exact />
                <PrivateRoute restricted={false} component={Release} path="/dashboard/CDP/pipeline/release" exact />
                <PrivateRoute restricted={false} component={AddReleaseDetails} path="/dashboard/CDP/pipeline/repos/release-details" exact />
                    
                <PublicRoute
                  restricted={false}
                  path="*"
                  component={() => "404 Not Found"}
                />
              </Switch>

            </main>
          </React.Fragment>
        </Router>
        <Footer isdrawopen={drawOpen ? 'makeStyles-appBarShift-6' : Auth.isAuthenticated() && classes.closemenu} innerClass={classes.toolbar} />
      </div>
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(App);