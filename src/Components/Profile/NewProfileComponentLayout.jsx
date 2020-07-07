import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PropTypes from 'prop-types';
import FullWidthBanner from '../FullWidthBanner/FullWidthBanner';
import { NotificationManager } from 'react-notifications';
import { PageLoader } from '../../Layout/Loader';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import {
  Box, Grid, Tabs, FormControl, Tab, AppBar, Accordion,
  AccordionSummary, AccordionDetails, InputLabel, Select,
  MenuItem, Checkbox, Button, CardHeader
} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { common } from '../../Utils/Api.env';
import './NewProfileComponentLayout.css'
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
      <Box padding={1} >
        {children}
      </Box>
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
      activeTab: 0,
      setTaget: '',
      sourceTableName: [],
      targetTableName: [],
      profileName: '',
      profileDescription: '',
      sourceConnectorsId: [{ connector_name: '' }],
      targetConnectorsId: [{ connector_name: '' }],
      source: '',
      editProfile: '',
      checkedItems: [],
      sourceTableEdit: [],
      connecterList: [],
      isEdit: false,
      connecterSelected: "",
      masterTable: [],
      saveConnector: false,
      profileId: '',
      isLoading: false
    })
  }
  handleChangeConnecter = (event) => {
    const connecterList = [...this.state.connecterList];

    if (this.state.activeTab === 0) {
      const connecterSource = connecterList.filter((connecter) => {
        if (connecter.connectorId === event.target.value) {
          return connecter
        }
        return false;
      })
      this.setState({
        sourceConnectorsId: connecterSource,
      });
    } else {
      const connecterTarget = connecterList.filter((connecter) => {
        if (connecter.connectorId === event.target.value) {
          return connecter
        }
        return false;
      })
      this.setState({
        targetConnectorsId: connecterTarget,
      });
    }
  };

  handleChangeInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleChangeTab = (event, newValue) => {
    this.setState({
      activeTab: newValue
    });
  };

  saveProfileDataFormate() {
    let sourceTable = Object.keys(this.state.sourceTableName).map((tableName) => {
      return {
        tableName: tableName,
        orderByColumn: "ID",
        columns: this.state.sourceTableName[tableName]
      }
    })

    let targetTable = Object.keys(this.state.targetTableName).map((tableName) => {
      return {
        tableName: tableName,
        orderByColumn: "ID",
        columns: this.state.targetTableName[tableName]
      }
    })

    const dataPostformat = {
      ...(this.state.isEdit) && { profileId: this.state.profileId },
      tenant_id: 1,
      profileName: this.state.profileName,
      profileDescription: this.state.profileDescription,
      source_connector_id: this.state.sourceConnectorsId[0].connectorId,
      source_profile_data: { tables: sourceTable },
      target_connector_id: this.state.targetConnectorsId[0].connectorId,
      target_profile_data: { tables: targetTable }
    }
    return dataPostformat;
  }
  handleSaveProfile = () => {
    //alert(JSON.stringify(this.saveProfileDataFormate()))
    this.setState({ isLoading: true });
    const profile_api_link = common.profile_url;
    try {
      fetch(profile_api_link, {
        method: this.state.isEdit ? 'put' : 'POST',
        crossDomain: true,
        compress: true,
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(this.saveProfileDataFormate())
      }).then(resp => resp.json())
        .then(data => {
          this.setState({ isLoading: false });
          if (data.status === 'Success') {
            NotificationManager.success('Connection Saved Successfully!');
            this.props.history.push('/dashboard/CDP/cdp-connector-profile/profiles');
          } else {

            NotificationManager.error('Please fill all required fields');
          }
        })
    } catch (e) {
      this.setState({ isLoading: false });
      NotificationManager.error('Error! Check the fields');
      return false;
    }

  }

  handleChangeCheckbox = (table, column, typedata) => event => {
    const checkedItems = { ...this.state[typedata] }
    if (event.target.checked) {
      if (!checkedItems[table]) {
        checkedItems[table] = [];
      }
      checkedItems[table].push(column);
    } else {
      checkedItems[table] = checkedItems[table].filter(item => {
        return item !== column
      })
    }
    console.log(checkedItems)
    this.setState({ [typedata]: checkedItems });
  };

  createConnectorlist = () => {
    const searchKey = window.location.search;
    let getKey;
    let queryStringpass;
    if (searchKey.length > 0) {
      queryStringpass = window.location.search.split('?')[1].split('=');
      getKey = queryStringpass[0];
    }

    if (getKey === 'edit') {
      this.setState({ isEdit: true, profileId: queryStringpass[1] });
    }
    let GetConnectorstype = `${common.profile_url}/GetConnectors?tenant_Id=1`;

    try {
      fetch(GetConnectorstype, {
        method: 'GET',
        crossDomain: true,
        compress: true,
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
      }).then(resp => resp.json())
        .then(data => {

          this.setState({ connecterList: data.connectors, })
          if (!this.state.isEdit) {
            this.setState({ isLoading: false })
          }
          this.fetchEditProfileData();
        })
    } catch (e) {
      return false;
    }
  }

  getMasterTablesDetails = () => {
    this.setState({ isLoading: true })
    let ProfileURL = `${common.profile_url}/GetTablesDetails`
    const queryString = {
      "server_address": "collaberamarketplace.mysql.database.azure.com",
      "server_port": "3306",
      "clientdb": "world",
      "dbuser": "cmpadmin@collaberamarketplace",
      "dbpassword": "collabera@123"
    };

    try {
      fetch(ProfileURL, {
        method: 'POST',
        crossDomain: true,
        compress: true,
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(queryString),
      }).then(resp => resp.json())
        .then(data => {
          const sourceTableName = { ...this.state.sourceTableName };
          const targetTableName = { ...this.state.targetTableName };
          data.tables.filter((table) => {
            sourceTableName[table.tableName] = [];
            targetTableName[table.tableName] = [];
            return 0;
          })

          this.setState({
            masterTable: data.tables,
            targetTableName,
            sourceTableName
          })

          this.createConnectorlist();


        })
    } catch (e) {
      return false;
    }
  }

  fetchEditProfileData = () => {
    if (this.state.isEdit) {
      const getProfileURL = `${common.profile_url}/?tenant_Id=1&profileId=${this.state.profileId}`
      try {
        fetch(getProfileURL, {
          method: 'GET',
          crossDomain: true,
          compress: true,
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          },
        }).then(resp => resp.json())
          .then(data => {
            const updateData = data.profiledetails[0];
            const source_profile_data = JSON.parse(updateData.source_profile_data);
            const target_profile_data = JSON.parse(updateData.target_profile_data);
            const sourceTableName = { ...this.state.sourceTableName };
            const targetTableName = { ...this.state.targetTableName };
            source_profile_data.tables.filter((table) => {
              sourceTableName[table.tableName] = table.columns;
              return false;
            })
            target_profile_data.tables.filter((table) => {
              targetTableName[table.tableName] = table.columns;
              return false;;
            })

            const connecterList = [...this.state.connecterList];

            const connecterSource = connecterList.filter((connecter) => {
              if (connecter.connectorId === updateData.source_connector_id) {
                return connecter
              }
              return false;
            })

            const connecterTarget = connecterList.filter((connecter) => {
              if (connecter.connectorId === updateData.target_connector_id) {
                return connecter
              }
              return false;
            })

            this.setState({
              profileId: updateData.profileId,
              tenant_id: updateData.tenant_id,
              profileName: updateData.profileName,
              profileDescription: updateData.profileDescription,
              sourceConnectorsId: connecterSource,
              targetConnectorsId: connecterTarget,
              sourceTableName,
              targetTableName,
              isLoading: false,
              connecterSelected: connecterSource[0].connector_name,
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

  componentDidMount() {
    this.getMasterTablesDetails();
  }

  handleSelectAll = (table) => e =>{
   
    if(this.state.activeTab===0){
      const sourceTableAll= {...this.state.sourceTableName};
       
      e.target.checked ? sourceTableAll[table.tableName]= table.columns : sourceTableAll[table.tableName]=[];
        this.setState({
          sourceTableName: sourceTableAll
        })
      
   }else{
      const targetTableAll= {...this.state.targetTableName};
       
      e.target.checked ? targetTableAll[table.tableName]= table.columns : targetTableAll[table.tableName]=[];
        this.setState({
          targetTableName: targetTableAll
        })
   }
    
    e.stopPropagation(); 
    return false
  }
  render() {
    const {
      activeTab,
      sourceTableName,
      targetTableName,
      profileName,
      profileDescription,
      sourceConnectorsId,
      targetConnectorsId,
      connecterList,
      isEdit,
      masterTable,
      isLoading
    } = this.state

    let activeConnecter =
      activeTab === 0 ? sourceConnectorsId[0].connectorId :
        targetConnectorsId[0].connectorId;

    activeConnecter = activeConnecter ? activeConnecter : "";
    //alert("render")

    return (
      <div className="profilepage">
        <FullWidthBanner
          title="Add New Profile"
          image="../../../../assets/images/globle.jpg"
          imageText="Full Banner"
          exceptimage="../../../../assets/images/learnmore.gif" />

        <AppBar position="static" color="default">
          <Tabs value={activeTab} onChange={this.handleChangeTab} aria-label="simple tabs example">
            <Tab label="Source" elevation={1} {...a11yProps(0)} />
            <Tab label="Target" elevation={1} {...a11yProps(1)} />

          </Tabs>
        </AppBar>
       
        {isLoading ? <PageLoader /> :
          <div className="box_profile">
             <ValidatorForm onSubmit={this.handleSaveProfile} > 
            <Grid container spacing={1} className="lg_space">
              <Grid item sm={6}>
                <Box padding={1}> 
                    <FormControl variant="outlined" className="selectdrop">
                      <InputLabel id="demo-simple-select-outlined-label">Connecter</InputLabel>
                      <Select 
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={activeConnecter}
                        onChange={this.handleChangeConnecter}
                        fullWidth
                        required
                        size="small"
                        label="Connecter"
                        name="connecterSelected"
                        validators={['required']}
                        errorMessages={['This field is required']}
                      >
                        {isEdit ?
                          activeTab === 0 ?
                            <MenuItem key={sourceConnectorsId[0].connectorId} value={sourceConnectorsId[0].connectorId} >
                              {sourceConnectorsId[0].connector_name}
                            </MenuItem> :
                            <MenuItem key={targetConnectorsId[0].connectorId} value={targetConnectorsId[0].connectorId} >
                              {targetConnectorsId[0].connector_name}
                            </MenuItem>
                          :
                          connecterList.map((connecter) => (
                            <MenuItem key={connecter.connectorId} value={connecter.connectorId} >
                              {connecter.connector_name}
                            </MenuItem>
                          ))}
                      </Select>
                    </FormControl>
 
                </Box>
              </Grid>
              <Grid item sm={3}>
              </Grid>
              <Grid item sm={6}>
                <Box padding={1}>
                   
                    <TextValidator 
                    label="Profile Name" 
                    variant="outlined" 
                    size="small" 
                    fullWidth
                    validators={['required']}
                    errorMessages={['This field is required']}
                    value={profileName} 
                    name='profileName' 
                    onChange={this.handleChangeInput} />
 
                </Box>
              </Grid>

              <Grid item sm={6}>
                <Box padding={1}>
                   
                    <TextValidator label="Profile description" 
                    variant="outlined" 
                    size="small" 
                    fullWidth
                    value={profileDescription} 
                    name='profileDescription' 
                    validators={['required']}
                    errorMessages={['This field is required']}
                    onChange={this.handleChangeInput}
                     />
                </Box>
              </Grid>

            </Grid>
            <TabPanel hidden={activeTab === 1} value={activeTab} index={0} padding={1}>
              {masterTable.map((table, index) => {
                return (

                  <Accordion key={index}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      className="accordinheadding"
                    >
                       
                      {/* <Typography className='tableHeading'>{table.tableName}</Typography> */}
                      <CardHeader className="selectAll" avatar={
                        <Checkbox
                          inputProps={{ 'aria-label': 'all items selected' }}
                          onClick={this.handleSelectAll(table)}
                          color="primary"
                          checked={activeTab ===0 ? sourceTableName[table.tableName].length ===table.columns.length  :
                            targetTableName[table.tableName].length === table.columns.length
                           }
                        />
                      }
                        title={table.tableName}
                        subheader={`${table.columns.length} Columns/ 
                        ${activeTab ===0 ? sourceTableName[table.tableName].length :
                          targetTableName[table.tableName].length
                         }
                         Selected Columns `}
                         
                      />
                    
                    </AccordionSummary>
                    <AccordionDetails>
                      <FormGroup row>
                        {table.columns.map((column, i) => {
                          return (
                            <FormControlLabel key={i}
                              control={
                                <Checkbox
                                  onChange={this.handleChangeCheckbox(table.tableName, column, "sourceTableName")}
                                  name={column}
                                  color="primary"
                                  checked={sourceTableName[table.tableName].filter(item => item === column).length ? true : false}
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
            <TabPanel hidden={activeTab === 0} value={activeTab} index={1}>
              {masterTable.map((table, index) => {
                return (

                  <Accordion key={index}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      className="accordinheadding"
                    >
                      {/* <Typography className='tableHeading'>{table.tableName}</Typography> */}
                      <CardHeader className="selectAll" avatar={
                        <Checkbox
                          inputProps={{ 'aria-label': 'all items selected' }}
                          onClick={this.handleSelectAll(table)}
                          color="primary"
                          checked={activeTab ===0 ? sourceTableName[table.tableName].length ===table.columns.length  :
                            targetTableName[table.tableName].length === table.columns.length
                           }
                        />
                      }
                        title={table.tableName}
                        subheader={`${table.columns.length} Columns/ 
                        ${activeTab ===0 ? sourceTableName[table.tableName].length :
                          targetTableName[table.tableName].length
                         }
                         Selected Columns `}
                         
                      />
                    </AccordionSummary>
                    <AccordionDetails>
                      <FormGroup row>
                        {table.columns.map((column, i) => {
                          return (
                            <FormControlLabel key={i}
                              control={
                                <Checkbox
                                  onChange={this.handleChangeCheckbox(table.tableName, column, "targetTableName")}
                                  name={column}
                                  color="primary"
                                  checked={targetTableName[table.tableName].filter(item => item === column).length ? true : false}
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
                    type="submit"
                    className='buttonsave'
                    startIcon={<SaveIcon />}>
                    Save Profile
              </Button>
                </Box>
              </Grid>
            </Grid>
            </ValidatorForm>
          </div>
        }
      </div>
    );
  }
}

export default NewProfileComponentLayout;
