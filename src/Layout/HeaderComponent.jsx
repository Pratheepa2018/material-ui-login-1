import React from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Button,
  } from '@material-ui/core';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
   
const styles = theme => ({
  grow: {
    flexGrow: 1,
  },
  appBar:{
      backgroundColor : '#4169e1',
  },
  logo: {
      maxWidth: 160,
    },
});
class Header extends React.Component {
  render() {
    const { classes } = this.props;
    return (<AppBar position="static" className={classes.appBar}>
        <Toolbar>
            <IconButton aria-label="Collabera Logo" >
              <img src="https://itservices.collabera.com/wp-content/uploads/2019/04/Logo.png" alt="logo" className={classes.logo}/>
            </IconButton>
            <div className={classes.grow}/>
            <Button color="inherit">Signup</Button>
          </Toolbar>
    </AppBar>
    );
  }
}
   
Header.propTypes = {
classes: PropTypes.object.isRequired,
};
   
export default withStyles(styles)(Header);
