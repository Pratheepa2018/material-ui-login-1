import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PropTypes from 'prop-types';
import FullWidthBanner from '../FullWidthBanner/FullWidthBanner';
import {
  Paper, Box, Grid, TextField, Tabs, Tab, Typography, AppBar, Accordion,
  AccordionSummary, AccordionDetails, Select, MenuItem, Checkbox
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});


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

const sourceConnectors = [
  'source MYsql',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];






export default function CheckboxLabels() {
  const classes = useStyles();
  const tables = ["Table Name 1", "Table Name 2", "Table Name 3", "Table Name 4"];
  const tables2 = ["Table Data 1", "Table Data 2", "Table Data 3", "Table tata 4"];
  const [value, setValue] = useState(0);
  const [personName, setPersonName] = useState([]);

  const [source, setTaget] = useState(false)
  const [state, setState] = useState({
    checkedB: false,
  });


  const handleChangeTab = (event, newValue) => {
    alert(newValue);
    setValue(newValue);
    if(newValue === 1){
      setTaget(true);
      
    }

  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

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
                onChange={handleChange}
                inputProps={{ 'aria-label': 'Without label' }}
              >

                {source ? <MenuItem disabled value="">
                  <em>Select Source Connectors</em>
                </MenuItem>

                  : <MenuItem disabled value="">
                    <em>Select Target Connectors</em>
                  </MenuItem>}

                {sourceConnectors.map((name) => (
                  <MenuItem key={name} value={name} >
                    {name}
                  </MenuItem>
                ))}

              </Select>
            </Paper>
          </Box>
        </Grid>
        <Grid item sm={3}>

        </Grid>

        <Grid item sm={6}>
          <Box padding={1}>

            <Paper elevation={0} variant='outlined' style={{ padding: "10px" }}>
              <TextField id="outlined-basic" label="Profile title" variant="outlined" size="small" fullWidth />
            </Paper>
          </Box>
        </Grid>
        <Grid item sm={6}>
          <Box padding={1}>

            <Paper elevation={0} variant='outlined' style={{ padding: "10px" }}>
              <TextField id="outlined-basic" label="Profile description" variant="outlined" size="small" fullWidth />
            </Paper>
          </Box>
        </Grid>

      </Grid>
      <TabPanel value={value} index={0} padding={1}>
        <Box padding={1}>
          {tables.map((data) => {
            return (

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>{data}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <FormGroup row>
                    <FormControlLabel
                      control={
                        <Checkbox checked={state.checkedA} onChange={handleChange}
                          name="checkedB" color="primary"
                        />
                      }
                      label="Name"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox checked={state.checkedA} onChange={handleChange}
                          name="checkedB" color="primary"
                        />
                      }
                      label="CountryCode"
                    />

                    <FormControlLabel
                      control={
                        <Checkbox checked={state.checkedA} onChange={handleChange}
                          name="checkedB" color="primary"
                        />
                      }
                      label="CountryCode"
                    />

                    <FormControlLabel
                      control={
                        <Checkbox checked={state.checkedA} onChange={handleChange}
                          name="checkedB" color="primary"
                        />
                      }
                      label="Address"
                    />

                    <FormControlLabel
                      control={
                        <Checkbox checked={state.checkedA} onChange={handleChange}
                          name="checkedB" color="primary"
                        />
                      }
                      label="Contact no"
                    />

                    <FormControlLabel
                      control={
                        <Checkbox checked={state.checkedA} onChange={handleChange}
                          name="checkedB" color="primary"
                        />
                      }
                      label="Pin code"
                    />
                  </FormGroup>

                </AccordionDetails>
              </Accordion>


            )
          })

          }
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {tables2.map((data) => {
          return (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>{data}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Checkbox checked={state.checkedA} onChange={handleChange}
                        name="checkedB" color="primary"
                      />
                    }
                    label="Name"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={state.checkedA} onChange={handleChange}
                        name="checkedB" color="primary"
                      />
                    }
                    label="CountryCode"
                  />

                  <FormControlLabel
                    control={
                      <Checkbox checked={state.checkedA} onChange={handleChange}
                        name="checkedB" color="primary"
                      />
                    }
                    label="CountryCode"
                  />

                  <FormControlLabel
                    control={
                      <Checkbox checked={state.checkedA} onChange={handleChange}
                        name="checkedB" color="primary"
                      />
                    }
                    label="Address"
                  />

                  <FormControlLabel
                    control={
                      <Checkbox checked={state.checkedA} onChange={handleChange}
                        name="checkedB" color="primary"
                      />
                    }
                    label="Contact no"
                  />

                  <FormControlLabel
                    control={
                      <Checkbox checked={state.checkedA} onChange={handleChange}
                        name="checkedB" color="primary"
                      />
                    }
                    label="Pin code"
                  />
                </FormGroup>

              </AccordionDetails>
            </Accordion>

          )
        })

        }
      </TabPanel>



    </div>
  );
}
