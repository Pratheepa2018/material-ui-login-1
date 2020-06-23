import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button, Tabs, Tab, Box,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Breadcrumbs from './BreadCrumbs';
import 'react-notifications/lib/notifications.css';
const styles = theme => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#4169e1',
  },
  appSubBar: {
    backgroundColor: '#fff',
    color:'#000'
  },
  logo: {
    maxWidth: 160,
  },
});
class Header extends React.Component {
  render() {
    const { classes } = this.props;
    return (
    <div>
      <AppBar position="sticky" >
      <Toolbar className={classes.appBar}>
      
        <IconButton aria-label="Collabera Logo" >
          <img src="https://itservices.collabera.com/wp-content/uploads/2019/04/Logo.png" alt="logo" className={classes.logo} />
        </IconButton>
        <div className={classes.grow} />
        <Button color="inherit" href="/signup">Signup</Button>   
        <NotificationContainer/>                                
      </Toolbar>
      <Toolbar className={classes.appSubBar} >
      <Tabs>
        <Tab color="inherit" label="Home" />
        <Tab color="inherit" label="Solutions" />
        <Tab color="inherit" label="Support" />
        <Tab color="inherit" label="Devlopers" />
        <Tab color="inherit" label="About" />
        <Tab color="inherit" label="Contact us" />
      </Tabs>
      
      </Toolbar>
    </AppBar>
    <Box p={2}><Breadcrumbs /></Box>
    </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
