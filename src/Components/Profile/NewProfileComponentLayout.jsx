import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PropTypes from 'prop-types';
import FullWidthBanner from '../FullWidthBanner/FullWidthBanner';
import {
  Paper, Box, Grid, TextField, Tabs, Tab, Typography, AppBar, Accordion,
  AccordionSummary, AccordionDetails, Select, MenuItem, Checkbox, Button
} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { green } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { common } from '../../Utils/Api.env';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid:{
    margin: 'auto',   
  },
  fabGreen: {
    borderRadius: '35px',    
  },
}));


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

// const sourceConnectors = [
//   'source MYsql',
//   'Van Henry',
//   'April Tucker',
//   'Ralph Hubbard',
//   'Omar Alexander',
//   'Carlos Abbott',
//   'Miriam Wagner',
//   'Bradley Wilkerson',
//   'Virginia Andrews',
//   'Kelly Snyder',
// ];






export default function CheckboxLabels(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [personName, setPersonName] = useState([]);
  const [sourceTableName, setSourceTableName] = useState([]);
  const [targetTableName, setTargetTableName] = useState([]);
  const [profileName, setProfileName] = useState('');
  const [profileDescription, setProfileDescription] = useState('');
  const [sourceConnectorsId, setSourceConnectorsId] = useState('');
  const [targetConnectorsId, setTargetConnectorsId] = useState('');
  const [source, setTaget] = useState(false);
  const [editProfile, setEditProfile] = useState(false);
  const [state, setState] = useState({
    checkedB: false,
  });

  const handleChangeSelect = (event) => {
    setPersonName(event.target.value);
  };

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);    
    setTaget(!source);
  };
const handleSaveProfile = () =>{

}
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  useEffect(() => {
  const searchKey = window.location.search;
  let getKey;
  if(searchKey.length > 0) {
    getKey = window.location.search.split('?')[1].split('=')[0]; 
  }  
  const query = new URLSearchParams(window.location.search);
  const token = query.get('edit')
 
  if(getKey === 'edit') {
    setEditProfile(true)
    const ProfileURL = `${common.profile_url}/?tenant_Id=1&profileId=${token}` 

     try {
        fetch(ProfileURL, {
         method: 'GET',
         crossDomain: true,
         compress: true,
         headers: {
           'Content-Type': 'application/json; charset=utf-8'
         },
       }).then(resp => resp.json())
         .then(data => {
            setProfileName(data.profiledetails[0].profileName)
            setProfileDescription(data.profiledetails[0].profileDescription)
            setSourceConnectorsId(data.profiledetails[0].source_connector_id)
            setTargetConnectorsId(data.profiledetails[0].target_connector_id)
            let sourceTablesdata=JSON.parse(data.profiledetails[0].source_profile_data);
            let targetTablesData=JSON.parse(data.profiledetails[0].target_profile_data);
           setSourceTableName(sourceTablesdata.tables);
           setTargetTableName(targetTablesData.tables);

         })
     } catch (e) {        
       return false;
     }
 
}
 else {
   console.log('new entry')
 }
}, []);
  return (
    <div className={classes.root}>

      <FullWidthBanner
        title="Add New Profile"
        image="../../../assets/images/globle.jpg"
        imageText="Full Banner"
        exceptimage="../../../assets/images/learnmore.gif" />

      <AppBar position="static" color="default">
        <Tabs value={value} onChange={handleChangeTab} aria-label="simple tabs example">
          <Tab label="Source" elevation={1} {...a11yProps(0)} />
          <Tab label="Target" elevation={1} {...a11yProps(1)} />

        </Tabs>
      </AppBar>
      <Grid container spacing={1}>
        <Grid item sm={3}>

        </Grid>
        <Grid item sm={6}>
          <Box padding={1}>

            <Paper elevation={0} variant='outlined' style={{ padding: "10px" }}>

              <Select
                displayEmpty
                value={personName}
                onChange={handleChangeSelect}
                inputProps={{ 'aria-label': 'Without label' }}
              >

                {!source ? <MenuItem disabled value=''>
                  <em>Source Connectors Id {sourceConnectorsId}</em>
                
                </MenuItem>

                  : <MenuItem disabled value=''>
                    <em>Target Connectors Id {targetConnectorsId}</em>
                    
                  </MenuItem>}

                {/* {sourceConnectors.map((name) => ( */}
                  {/* <MenuItem key={name} value={name} >
                    {name}
                  </MenuItem> */}
                {/* ))} */}

              </Select>
            </Paper>
          </Box>
        </Grid>
        <Grid item sm={3}>

        </Grid>

        <Grid item sm={6}>
          <Box padding={1}>

            <Paper elevation={0} variant='outlined' style={{ padding: "10px" }}>
              <TextField id="outlined-basic" label="Profile Name" variant="outlined" size="small" fullWidth
               value={profileName}/>
            </Paper>
          </Box>
        </Grid>
        <Grid item sm={6}>
          <Box padding={1}>

            <Paper elevation={0} variant='outlined' style={{ padding: "10px" }}>
              <TextField id="outlined-basic" label="Profile description" variant="outlined" size="small" fullWidth
               value={profileDescription}/>
            </Paper>
          </Box>
        </Grid>

      </Grid>
      <TabPanel value={value} index={0} padding={1}>
        <Box padding={1}>
          {sourceTableName.map((table) => {
            return (

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>{table.tableName}</Typography>
                </AccordionSummary>
                <AccordionDetails>


                  <FormGroup row>
                  {table.columns.map((column) => {
                    return(
                      <FormControlLabel
                      control={
                        <Checkbox checked={state.checkedA} onChange={handleChange}
                          name="checkedB" color="primary"
                        />
                      }
                      label={column}
                    />

                    )
                  })}
                  </FormGroup>

                </AccordionDetails>
              </Accordion>


            )
          })

          }
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {targetTableName.map((table) => {
          return (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>{table.tableName}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup row>
                {table.columns.map((column) => {
                    return(
                      <FormControlLabel
                      control={
                        <Checkbox checked={state.checkedA} onChange={handleChange}
                          name="checkedB" color="primary"
                        />
                      }
                      label={column}
                    />

                    )
                  })}
                </FormGroup>

              </AccordionDetails>
            </Accordion>

          )
        })

        }
      </TabPanel>

      <Grid container spacing={1} justify="center" alignItems="center" className={classes.grid}>
       
       <Grid justify="center">
       <Box padding={1}>
       <Button 
        variant="contained"
        border={1} borderRadius={16}
           color="primary"
           size="large"
           onClick={handleSaveProfile}
          className= {classes.fabGreen}
           startIcon={<SaveIcon />}>
                      {!editProfile ? 
                              ` Save Profile`
                              :
                              `Update Profile`
                            }
            </Button>
           </Box>
       </Grid>
       </Grid>

    </div>
  );
}
