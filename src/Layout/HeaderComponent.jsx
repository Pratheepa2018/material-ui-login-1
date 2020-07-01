import React from 'react';
import {
  AppBar,
  Toolbar, Box,
  Popover, MenuItem, Link, Button
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import 'react-notifications/lib/notifications.css';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Auth from './Authentication'; 
import TopMenu from './TopMenu';
import './HeaderComponent.css';
const styles = theme => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#fff',
  },
  appSubBar: {
    backgroundColor: '#fff',
    color:'#000', 
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
      anchorEl: null,
      isAuthenticated: false
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
    const auth = Auth.isAuthenticated();
    if(auth) {
      this.setState({isAuthenticated: auth});
    }
  }
  // componentDidUpdate() {
  //   this.setState({isAuthenticated:  this.props.isAuthenticated})
  // }
  render() {
    const { classes } = this.props;
    const { isAuthenticated } = this.state;
    const open = Boolean(this.state.anchorEl);
    return (
    <div>
      
      <AppBar position="fixed" >
      <TopMenu islogin={isAuthenticated} />
     
    </AppBar>
    
    </div>
    );
  }
}
Header.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Header);