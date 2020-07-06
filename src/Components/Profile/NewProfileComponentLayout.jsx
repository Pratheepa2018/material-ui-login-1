import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PropTypes from 'prop-types';
import FullWidthBanner from '../FullWidthBanner/FullWidthBanner';
import {
  Paper, Box, Grid, TextField, Tabs, Tab, AppBar, Accordion,
  AccordionSummary, AccordionDetails, Select, MenuItem, Checkbox, Button, CardHeader
} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { common } from '../../Utils/Api.env';

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
        <Box padding={1} >
          {children}
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

class NewProfileComponentLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      value: 0,
      setTaget: '',
      sourceTableName: [],
      targetTableName: [],
      profileName: '',
      profileDescription: '',
      sourceConnectorsId: '',
      targetConnectorsId: '',
      source: '',
      editProfile: '',
      checkedItems: [],
      sourceTableEdit: []
    })
  }
  handleChangeInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleChangeTab = (event, newValue) => {
    this.setState({
      value: newValue, taget: !this.state.source,
    });
  };
  handleSaveProfile = () => {

  }
  handleChangeCheckbox = (table, column) => event => {
    const checkedItems = { ...this.state.checkedItems }
    if (event.target.checked) {
      if (!checkedItems[table]) {
        checkedItems[table] = [];
      }
      checkedItems[table].push(column);
    } else {
      checkedItems[table] = checkedItems[table].filter(item => item !== column)
    }
    this.setState({ checkedItems }, function(){
      console.log(this.state.checkedItems);
    })
  };

  componentDidMount() {
    const searchKey = window.location.search;
    let getKey;
    if (searchKey.length > 0) {
      getKey = window.location.search.split('?')[1].split('=')[0];
    }
    const query = new URLSearchParams(window.location.search);
    const token = query.get('edit')

    if (getKey === 'edit') {
      this.setState({ editProfile: true })
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
            let sourceTablesdata = JSON.parse(data.profiledetails[0].source_profile_data);
            let targetTablesData = JSON.parse(data.profiledetails[0].target_profile_data);
            const checkedItems = { ...this.state.checkedItems }
            sourceTablesdata.tables.filter((table)=>{
              checkedItems[table.tableName] = [];
               //console.log(checkedItems)
            })
             
            this.setState({
              profileName: data.profiledetails[0].profileName,
              profileDescription: data.profiledetails[0].profileDescription,
              sourceConnectorsId: data.profiledetails[0].source_connector_id,
              targetConnectorsId: data.profiledetails[0].target_connector_id,
              sourceTableName: sourceTablesdata.tables,
              targetTableName: targetTablesData.tables,
              sourceTableEdit: targetTablesData.tables,
              checkedItems
            })
             
          })
      } catch (e) {
        return false;
      }
    }
    else {
      console.log('new entry')
    }
  }

  render() {
    const {
      value,
      sourceTableName,
      targetTableName,
      profileName,
      profileDescription,
      sourceConnectorsId,
      targetConnectorsId,
      source,
      editProfile,
      checkedItems,
    } = this.state
    return (
      <div className="profilepage">

        <FullWidthBanner
          title="Add New Profile"
          image="../../../assets/images/bgbanner.png"
          imageText="Full Banner"
          exceptimage="../../../assets/images/learnmore.gif" />

        <AppBar position="static" color="default">
          <Tabs value={value} onChange={this.handleChangeTab} aria-label="simple tabs example">
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
                  value=''
                  name={profileName}
                  onChange={this.handleChangeInput}
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
                <TextField label="Profile Name" variant="outlined" size="small" fullWidth
                  value={profileName} name='profileName' onChange={this.handleChangeInput} />
                   
              </Paper>
            </Box>
          </Grid>

          <Grid item sm={6}>
            <Box padding={1}>
              <Paper elevation={0} variant='outlined' style={{ padding: "10px" }}>
                <TextField label="Profile description" variant="outlined" size="small" fullWidth
                  value={profileDescription} name='profileDescription' onChange={this.handleChangeInput} />
               
              </Paper>
            </Box>
          </Grid>

        </Grid>
        <TabPanel value={value} index={0} padding={1}>
          
            {sourceTableName.map((table, index) => {
              return (

                <Accordion key={index}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    {/* <Typography className='tableHeading'>{table.tableName}</Typography> */}
                    <CardHeader avatar={
                      <Checkbox
                        inputProps={{ 'aria-label': 'all items selected' }}
                      />
                    }
                      title={table.tableName}
                      subheader={`${table.columns.length} Columns`}
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormGroup row>
                      {table.columns.map((column, i) => {
                        return (
                          <FormControlLabel key={i}
                            control={
                              <Checkbox
                                onChange={this.handleChangeCheckbox(table.tableName, column)}
                                name={column} 
                                color="primary"
                                checked={checkedItems[table.tableName].filter(item => item === column).length} 
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
        <TabPanel value={value} index={1}>
          {targetTableName.map((table, i) => {
            return (
              <Accordion key={i}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  {/* <Typography className='tableHeading'>{table.tableName}</Typography> */}
                  <CardHeader

                    avatar={
                      <Checkbox
                        inputProps={{ 'aria-label': 'all items selected' }}
                      />
                    }
                    title={table.tableName}
                    subheader={`${table.columns.length} Columns`}
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <FormGroup row>
                    {table.columns.map((column, index) => {
                      return (
                        <FormControlLabel key={index}
                          control={

                            <Checkbox checked={false} 
                            onChange={this.handleChangeCheckbox(table.tableName, column)}
                            name="checkedB" 
                            color="primary"

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
        <Grid container spacing={1} justify="center" alignItems="center" className='profilegrid'>
          <Grid>
            <Box padding={1}>
              <Button
                variant="contained"
                border={1}
                color="primary"
                size="large"
                onClick={this.handleSaveProfile}
                className='buttonsave'
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
}

export default NewProfileComponentLayout;
