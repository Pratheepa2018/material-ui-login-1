import React, { Component } from 'react';
import { Grid, Typography, Box, TextField, Button } from '@material-ui/core';
export default class NewConnector extends Component {
  render() {
    return (
      <Box marginY={5}>
        <Grid container spacing={3} direction="row" alignItems="center" justify="center">
          <Grid item xs={8} alignItems="center">
            <Typography marginY={3} align="left" component="h2" variant="h5">Add new Connector</Typography>
            <Box marginY={3} border={1} padding={2} borderColor="grey.500" boxShadow={3}>
              <Typography variant="subtitle1">Data Source Connector</Typography>
              <Box padding={3}>
                <form>
                  <Grid container spacing={3} direction="row" justify="space-between" alignItems="center" alignContent="center">
                    <Grid item xs={8}>
                      <TextField 
                        variant="outlined"
                        margin="normal"
                        required
                        id="serverAddress"
                        label="Server Address"
                        name="serverAddress"
                        size="small"
                        autoFocus
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={4} padding={0}>
                      <Button variant="contained" color="primary" fullWidth>Test Connection</Button>
                    </Grid>
                    <Grid item xs={8}>
                      <TextField 
                        variant="outlined"
                        margin="normal"
                        required
                        id="serverPort"
                        label="Server Port"
                        name="serverPort"
                        size="small"
                        autoFocus
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={4} padding={0}>
                      <Button variant="contained" color="primary" fullWidth>View Meta Data</Button>
                    </Grid>
                    <Grid item xs={8}>
                      <TextField 
                        variant="outlined"
                        margin="normal"
                        required
                        id="dbName"
                        label="DB Name"
                        name="dbName"
                        size="small"
                        autoFocus
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={4} padding={0}>
                      <Button variant="contained" color="primary" fullWidth>Save Connector Details</Button>
                    </Grid>
                    <Grid item xs={4}>
                      <TextField 
                        variant="outlined"
                        margin="normal"
                        required
                        id="dbUserName"
                        label="DB User Name"
                        name="dbUserName"
                        size="small"
                        autoFocus
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField 
                        type="password"
                        variant="outlined"
                        margin="normal"
                        required
                        id="dbPassword"
                        label="DB Password"
                        name="dbPassword"
                        size="small"
                        autoFocus
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={4} padding={0}>
                      <Button variant="contained" color="primary" fullWidth>Clear All</Button>
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