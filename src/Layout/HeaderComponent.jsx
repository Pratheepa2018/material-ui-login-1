import React from 'react';
import { AppBar, Toolbar, IconButton, Button, Tabs, Tab, Box,Popover, MenuItem, Link
} from '@material-ui/core';
import {NotificationContainer} from 'react-notifications';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Breadcrumbs from './BreadCrumbs';
import 'react-notifications/lib/notifications.css';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Auth from './Authentication';



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
  constructor() {
    super();
    this.state = {
      value: "One",
      label: "Three",
      content: "One",
      anchorEl: null
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick(event) {
    event.stopPropagation();
    this.setState({
      anchorEl: event.currentTarget
    });
  }


  handleClose() {
    this.setState({
      anchorEl: null
    });
  }
  componentWillMount() {
    console.log('Hello');
  }

  render() {
    const { classes } = this.props;
    const open = Boolean(this.state.anchorEl);
    const auth = Auth.isAuthenticated();
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
        <Tab value ={'/solutions'} color="inherit" label="Solutions"  onClick={this.handleClick} />
        <Tab value ={'/support'} color="inherit" label="Support" />
        <Tab value ={'/devlopers'} color="inherit" label="Devlopers" />
        <Tab value ={'/about'} color="inherit" label="About" />
        <Tab value = {'/contact'} color="inherit" label="Contact us" />
      </Tabs>
      <Popover
          open={open}
          anchorEl={this.state.anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
          <MenuItem>
            Collabera Information Platform (CIP)
          </MenuItem>
          <MenuItem >
          <Link href="/collaberadevopsplatform" >
          Collabera DevOps Platform (CDP) <ArrowRightIcon />
          </Link>
          </MenuItem>
          <MenuItem >
            Collabera Connectors MarketPlace (CCM)
          </MenuItem>
          <MenuItem >
            Collabera Cloud Accelerators (CCA)
          </MenuItem>
        </Popover>
      
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
