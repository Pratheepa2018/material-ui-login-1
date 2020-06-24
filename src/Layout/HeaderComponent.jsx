import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button, Tabs, Tab, Box,
} from '@material-ui/core';
import {NotificationContainer} from 'react-notifications';
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
      
        <IconButton aria-label="Collabera Logo"  href='/'>
          <img src="https://itservices.collabera.com/wp-content/uploads/2019/04/Logo.png" alt="logo" className={classes.logo} />
        </IconButton>
        <div className={classes.grow} />
        <Button color="inherit" href="/signup">Signup</Button>   
        <NotificationContainer/>                                
      </Toolbar>
      <Toolbar className={classes.appSubBar} >
      <Tabs value={'/login'}>
        <Tab value ={'/login'} color="inherit" label="Home" />
        <Tab value ={'/solutions'} color="inherit" label="Solutions" />
        <Tab value ={'/support'} color="inherit" label="Support" />
        <Tab value ={'/devlopers'} color="inherit" label="Devlopers" />
        <Tab value ={'/about'} color="inherit" label="About" />
        <Tab value = {'/contact'} color="inherit" label="Contact us" />
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
