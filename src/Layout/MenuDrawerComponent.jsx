import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import CodeIcon from '@material-ui/icons/Code';
import InfoIcon from '@material-ui/icons/Info';
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import LinearScaleIcon from '@material-ui/icons/LinearScale';
import TopMenu from './TopMenu';
import Auth from './Authentication';
import './MenuDrawerComponent.css'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,

    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    background: '#1a2038',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  nested: {
    paddingLeft: theme.spacing(3),
  },
  sidemenu: {
    fontWeight: "600",
  },
}));

export default function MiniDrawer(props) {

  const classes = useStyles();
  const theme = useTheme();
  const [drawOpen, setDrawOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [childOpen, setChildOpen] = useState(false);  
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = Auth.isAuthenticated();
    if (auth) {
      setIsAuthenticated(auth)
    }
  }, []);


  const handleClick = () => {
    setOpen(!open);
  };
  const handleChildClick = () => {
    console.log('here')
    setChildOpen(!childOpen);
  };
  
  const handleDrawerOpen = () => {
    setDrawOpen(true);
    props.open();
  };

  const handleDrawerClose = () => {
    setDrawOpen(false);
    props.close();
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        className={clsx(classes.appBar, {
          [classes.appBarShift]: drawOpen,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: drawOpen,
            })}
          >
            <MenuIcon color="inherit" />
          </IconButton>
          <TopMenu islogin={isAuthenticated} />
        </Toolbar>

      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, { 'main_drower': drawOpen }, {
          [classes.drawerOpen]: drawOpen,
          [classes.drawerClose]: !drawOpen,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: drawOpen,
            [classes.drawerClose]: !drawOpen,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <figure>
            <img src="/assets/images/learnmore.gif" alt="Expect more"/>
          </figure>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />

        <List className={classes.sidemenu}>
          <ListItem button onClick={handleClick} >
            <ListItemIcon>
              <AccountTreeIcon />
            </ListItemIcon>
            <ListItemText className={classes.sidemenu} primary="Solutions" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          {drawOpen && 
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="Collabera Information Platform (CIP)" />
                </ListItem>
                <ListItem button className={classes.nested}  onClick={handleChildClick}>                  
                  <ListItemText primary="Collabera DevOps Platform (CDP)" />
                  {childOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                
                <Collapse in={childOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="Data Testing Framework" />
                </ListItem>
                <ListItem button className={classes.nested} >                  
                  <ListItemText primary="Application Testing Framework" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="Pipeline Auromation" />
                </ListItem>
              </List>
            </Collapse>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="Collabera Connectors MarketPlace (CCM)" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="Collabera Cloud Accelerators (CCP)" />
                </ListItem>
              </List>
            </Collapse>
          }
          <ListItem button>
            <ListItemIcon><LinearScaleIcon color="inherit" /> </ListItemIcon>
            <ListItemText>{'Insights'}</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon><ContactSupportIcon color="inherit" /> </ListItemIcon>
            <ListItemText>{'Support'}</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon><CodeIcon color="inherit" /> </ListItemIcon>
            <ListItemText>{'Developers'}</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon><InfoIcon color="inherit" /> </ListItemIcon>
            <ListItemText>{'About'}</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon><PermPhoneMsgIcon color="inherit" /> </ListItemIcon>
            <ListItemText>{'ContactUs'}</ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </div>

  );
}