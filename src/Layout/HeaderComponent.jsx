import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography, Tabs, Tab,Popover, MenuItem, Link, Divider
} from '@material-ui/core';
import {NotificationContainer} from 'react-notifications';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import 'react-notifications/lib/notifications.css';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Auth from './Authentication';
import PublicIcon from '@material-ui/icons/Public';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FindReplaceIcon from '@material-ui/icons/FindReplace';

const styles = theme => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#fff',
  },
  appSubBar: {
    backgroundColor: '#000',
    color:'#fff',
    padding: '0px',
    margin: '0px',
    textAlign: 'center',
  },
  logo: {
    maxWidth: 160,
  },
  headerMenu: {
      fontSize: 'larger',
    fontWeight: '600',
    color: 'darkblue',
    display: 'flex',
  },
  paddingTypo:{
    padding: '8px'
  }

});
class Header extends React.Component {
  constructor() {
    super();
    this.state = {
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
          <img src="./assets/images/collabera-blue.jpg" alt="logo" className={classes.logo} />
        </IconButton>
        <div className={classes.grow} />
        
        <div className = {classes.headerMenu}>
        <Typography className = {classes.paddingTypo} >Contact Us</Typography>
        <Divider orientation="vertical" flexItem style={{ backgroundColor: "red" }} />
        <Typography className = {classes.paddingTypo} >Resource Center</Typography> 
        <Divider orientation="vertical" flexItem style={{ backgroundColor: "red" }} />
        <Typography className = {classes.paddingTypo} >About</Typography>
        <Divider orientation="vertical" flexItem style={{ backgroundColor: "red" }} />
        <Typography  className = {classes.paddingTypo}>Call: 1800-827-2796</Typography>
        </div>
      
      <PublicIcon style= {{color : 'green'}} />
      <Divider orientation="vertical"  />
      <FindReplaceIcon color="primary" />
      <Divider orientation="vertical"  />
      <ExitToAppIcon color="primary" />

        <NotificationContainer/>                                
      </Toolbar>
      <Toolbar className={classes.appSubBar} >
      <Tabs value={'/login'}>
        <Tab value ={'/solution'} color="inherit" label="Solution" onClick={this.handleClick} />
        <Divider variant="middle" orientation="vertical" flexItem style={{ backgroundColor: "white" }} />
        <Tab value ={'/insights'} color="inherit" label="Insights"  />
        <Divider variant="middle" orientation="vertical" flexItem style={{ backgroundColor: "white" }} />
       <Tab value ={'/client-support'} color="inherit" label="Client Support" />
        <Divider variant="middle" orientation="vertical" flexItem style={{ backgroundColor: "white" }} />
        <Tab value ={'/devlopers'} color="inherit" label="Devlopers" />
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
    
    </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
