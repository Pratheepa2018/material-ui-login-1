import React, { Component } from 'react';
import { Grid, Typography, Box, TextField, Button } from '@material-ui/core';
import { common } from '../../Utils/Api.env';

export default class NewConnector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      connector_name: '',
      connector_desc: '',
      connector_type: '',
      tenant_id: '',
      server_address: '',
      server_port: '',
      clientdb: '',
      dbuser: '',
      dbpassword: ''
    }
    this.baseState = this.state;
  }
  handleChanges = (e) => {
    const {name, value} = e.target;
    this.setState({ [name]: value })
  }
  handleClear = () => {
    this.setState(this.baseState);
  }
  handelSave = async () => {
    const { connector_name, connector_desc, connector_type, server_address, server_port, clientdb, dbuser, dbpassword } = this.state;
    const fields = {
      "connector_name": connector_name,
      "connector_desc": connector_desc,
      "connector_type": connector_type,
      "tenant_id": 1,
      "server_address": server_address,
      "server_port": server_port,
      "clientdb": clientdb,
      "dbuser": dbuser,
      "dbpassword": dbpassword 
    }
    const saveConnectorURL = `${common.api_url}/connector`;
    try {
      await fetch(saveConnectorURL, {
        method: 'POST',
        crossDomain: true,
        compress: true,
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(fields),
      }).then(resp => resp.json())
      .then((data) => {
        if(data.status === 'Success') {
          this.props.history.push('/subscribedservices/CDP/connectors');
        } else {
          console.log('Something went wrong!');
        }
      })
    } catch (e) {
      console.log(e, 'Oh no something went wrong!!!');
    }
  }
  componentDidMount() {
    const getKey = window.location.search.split('?')[1].split('=')[0];
    if(getKey === 'edit') {
      const id = window.location.search.split('?')[1].split('=')[1]
      const connectorId = parseInt(id);
      const ConnectorsURL = `${common.api_url}/connector?tenant_Id=1&connectorId=${connectorId}` 
      console.log(ConnectorsURL);
      fetch(ConnectorsURL, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      }).then(resp => resp.json())
      .then((data) => {
        Object.keys(data).map(element => {
          const flag = Object.keys(data[element][0])
          flag.map(item => {
            console.log(item)
          })
        })  
      });
    }
  }

  render() {
    const { connector_name, connector_desc, connector_type, server_address, server_port, clientdb, dbuser, dbpassword } = this.state;
    const buttonStyle ={
      fontSize: '12px',
      textTransform: 'capitalize'
    }
    return (
      <Box marginY={5}>
        <Grid container spacing={3} direction="row" alignItems="center" justify="center">
          <Grid item xs={8}>
            <Typography marginY={3} align="left" component="h2" variant="h5">Add new Connector</Typography>
            <Box marginY={3} border={1} padding={2} borderColor="grey.500" boxShadow={3}>
              <Typography variant="subtitle1">Data Source Connector</Typography>
              <Box padding={3}>
                <form>
                  <Grid container spacing={3} direction="row" justify="space-between" alignItems="center" alignContent="center">
                    <Grid item xs={6}>
                      <TextField
                        type="text" 
                        variant="outlined"
                        margin="normal"
                        required
                        id="connectorName"
                        label="Connector Name"
                        name="connector_name"
                        size="small"
                        autoFocus
                        fullWidth
                        value={connector_name}
                        onChange={this.handleChanges}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        type="text" 
                        required
                        variant="outlined"
                        margin="normal"
                        id="connector_desc"
                        label="Connector Desc"
                        name="connector_desc"
                        autoFocus
                        fullWidth
                        size="small"
                        value={connector_desc}
                        onChange={this.handleChanges}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        type="text" 
                        variant="outlined"
                        margin="normal"
                        required
                        id="connectorType"
                        label="Connector Type"
                        name="connector_type"
                        size="small"
                        autoFocus
                        fullWidth
                        value={connector_type}
                        onChange={this.handleChanges}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        type="text" 
                        variant="outlined"
                        margin="normal"
                        required
                        id="clientDb"
                        label="Client DB"
                        name="clientdb"
                        size="small"
                        autoFocus
                        fullWidth
                        value={clientdb}
                        onChange={this.handleChanges}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        type="text" 
                        variant="outlined"
                        margin="normal"
                        required
                        id="serverAddress"
                        label="Server Address"
                        name="server_address"
                        size="small"
                        autoFocus
                        fullWidth
                        value={server_address}
                        onChange={this.handleChanges}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        type="text" 
                        variant="outlined"
                        margin="normal"
                        required
                        id="serverPort"
                        label="Server Port"
                        name="server_port"
                        size="small"
                        autoFocus
                        fullWidth
                        value={server_port}
                        onChange={this.handleChanges}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        type="text" 
                        variant="outlined"
                        margin="normal"
                        required
                        id="dbUserName"
                        label="DB User Name"
                        name="dbuser"
                        size="small"
                        autoFocus
                        fullWidth
                        value={dbuser}
                        onChange={this.handleChanges}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField 
                        type="password"
                        variant="outlined"
                        margin="normal"
                        required
                        id="dbPassword"
                        label="DB Password"
                        name="dbpassword"
                        size="small"
                        autoFocus
                        fullWidth
                        value={dbpassword}
                        onChange={this.handleChanges}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <Button variant="outlined" color="primary" fullWidth style={buttonStyle} onClick={this.handleClear}>Clear All</Button>
                    </Grid>
                    <Grid item xs={3}>
                      <Button variant="contained" color="primary" fullWidth style={buttonStyle}>Test Connection</Button>
                    </Grid>
                    <Grid item xs={3}>
                      <Button variant="contained" color="primary" fullWidth style={buttonStyle}>View Meta Data</Button>
                    </Grid>
                    <Grid item xs={3}>
                      <Button variant="contained" color="primary" fullWidth style={buttonStyle} onClick={this.handelSave}>Save Connector Details</Button>
                    </Grid>
                  </Grid>
                </form>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    )
  }
}