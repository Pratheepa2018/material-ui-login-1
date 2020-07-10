import React from 'react';
import FullWidthBanner from '../../../Components/FullWidthBanner/FullWidthBanner';
import {
  Checkbox, Card, CardActions, FormControlLabel, Button, Box,
  Grid, Typography, Divider, TextField, FormLabel, FormControl, InputLabel, Select, MenuItem
} from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import './Release.css';

export default function ScriptTemplates() {
  const myprojects = [
    { id: 1, img: '../../assets/images/aspdotnet.png', name: 'ASP.Net', type: 'Build', details: 'Yaml Script Skeleton Details' },
    { id: 2, img: '../../assets/images/aspdotnetcore.png', name: 'ASP.Net Core', type: 'Build', details: 'Yaml Script Skeleton Details' },
    { id: 3, img: '../../assets/images/dotnet.png', name: '.Net Desktop', type: 'Build', details: 'Yaml Script Skeleton Details' },
    { id: 1, img: '../../assets/images/dotnetcore.png', name: 'Install .Net Core Runtime', type: 'Release', details: 'Yaml Script Skeleton Details' },

  ];

  const projList = [
    'Project 1',
    'Project 2',
    'Project 3',
  ];

  const devopsRelTool = [
    'Azure',
    'AWS',
    'Jenkins',
    'GitHub'
  ];

  const buildDetails = [
    '2020001.1',
    '2020003.2',
    '2020002.2',
  ];
  const tasks = [
    { id: 1, icon: '../../assets/images/azure-key-vault-icon-24x24.png', name: 'Azure Key Vault' },
    { id: 2, icon: '../../assets/images/azure-app-service-deploy-icon-24x24.png', name: 'Azure App Service Deploy' },
    { id: 3, icon: '../../../assets/images/alpha-x-circle.svg', name: 'NuGet authenticate' }
  ];

  const handleChanges = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
  }

  return (
    <div id="myprojects">
      <FullWidthBanner
        title="Add Release Details"
        image="../../assets/images/globle.jpg"
        imageText="Full Banner"
        exceptimage="../../assets/images/learnmore.gif"
      />
      <Box marginY={5}>
        <Grid container spacing={3} direction="row" alignItems="center" justify="center">
          <Grid item xs={6}>
            <Box marginY={3} border={1} padding={2} borderColor="grey.500" boxShadow={3}>
              <Typography variant="subtitle1" className="bold">Add Release Details</Typography>
              <Box padding={3}>
                <ValidatorForm>
                  <Grid container spacing={3} direction="row" justify="space-between" alignItems="center" alignContent="center">
                    <Grid item xs={12}>
                      <Typography variant="subtitle1">Release Pipeline Title</Typography>
                      <TextValidator
                        type="text"
                        variant="outlined"
                        margin="normal"
                        required
                        id="projName"
                        label="Project Title"
                        name="project_name"
                        size="small"
                        autoFocus
                        fullWidth
                        validators={['required', 'matchRegexp:^[A-Za-z]+']}
                        errorMessages={['This field is require', 'Enter proper name!']}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="subtitle1">Project List</Typography>
                      <FormControl variant="outlined" className="selectProject">
                        <InputLabel id="selectProject">Project List</InputLabel>
                        <Select
                          labelId="selectProject"
                          id="selectProject"
                          onChange={handleChanges}
                          fullWidth
                          label="Select the Project"
                          size="small"
                          name="selectProject"
                          required
                        >
                          {projList.map((name) => (
                            <MenuItem key={name} value={name} >
                              {name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="subtitle1">Devops Release Tool</Typography>
                      <FormControl variant="outlined" className="selectProject">
                        <InputLabel id="selectProject">Project List</InputLabel>
                        <Select
                          labelId="selectProject"
                          id="selectProject"
                          onChange={handleChanges}
                          fullWidth
                          label="Select the Project"
                          size="small"
                          name="selectProject"
                          required
                        >
                          {devopsRelTool.map((name) => (
                            <MenuItem key={name} value={name} >
                              {name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="subtitle1">Build Details</Typography>
                      <FormControl variant="outlined" className="selectProject">
                        <InputLabel id="selectProject">Project List</InputLabel>
                        <Select
                          labelId="selectProject"
                          id="selectProject"
                          onChange={handleChanges}
                          fullWidth
                          label="Select the Project"
                          size="small"
                          name="selectProject"
                          required
                        >
                          {buildDetails.map((name) => (
                            <MenuItem key={name} value={name} >
                              {name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="subtitle1">Tasks</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      {tasks.map((task) => (
                        <Grid item xs={12}>
                          <FormControlLabel
                            value={task}
                            control={<Checkbox color="primary" />}
                            label={task.name}
                            labelPlacement="end"
                          />
                        </Grid>
                      ))}

                    </Grid>
                    <Grid item xs={6}>
                      {tasks.map((task) => (
                        <Grid item xs={12}>
                          <IconButton aria-label="delete">
                            <DeleteIcon className="red" />
                          </IconButton>
                          <span variant="subtitle1">{task.name}</span>

                        </Grid>
                      ))}

                    </Grid>
                    <Grid item xs={3}>
                      <Button type="clear" variant="contained" color="primary" fullWidth >Save</Button>
                    </Grid>
                    <Grid item xs={3}>
                      <Button variant="outlined" color="primary" fullWidth href="/dashboard/CDP/pipeline/projects" >Cancel</Button>
                    </Grid>

                  </Grid>
                </ValidatorForm>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>


      <Grid container className="container">

        <Grid item xs={12}>
          <div className='flexdiv'>
            <FormLabel className="scriptlabel">Project List:  </FormLabel>
            <FormControl variant="outlined" className="selectProject">
              <InputLabel id="selectProject">Select the Project</InputLabel>
              <Select
                labelId="selectProject"
                id="selectProject"
                onChange={handleChanges}
                fullWidth
                label="Select the Project"
                size="small"
                name="selectProject"
                required
              >
                {projList.map((name) => (
                  <MenuItem key={name} value={name} >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControlLabel
              value="Build"
              control={<Checkbox color="primary" />}
              label="Build"
              labelPlacement="start"
            />
            <FormControlLabel
              value="Release"
              control={<Checkbox color="primary" />}
              label="Release"
              labelPlacement="start"
            />
          </div>
        </Grid>
        <Grid spacing={3} container direction="row">
          {myprojects.map((proj) => (
            <Grid key={proj.id} item>
              <Card>
                <div className="title">
                  <div className='flexdiv'>
                    <img src={proj.img} alt={proj.name} />
                    <Typography >
                      {proj.name}
                    </Typography>
                  </div>
                  <Typography variant="h6" component="h2" color="blue">
                    Script Type : {proj.type}
                  </Typography>
                  <Divider style={{ margin: '20px' }} />
                  <Typography color="blue">
                    {proj.details}
                  </Typography>

                </div>
                <Divider style={{ margin: '2px' }} />
                <CardActions className="buttons">
                  <Grid item xs={3}>
                    <Button size="small" color="primary">
                      <svg viewBox="0 0 24 24">
                        <path fill="currentColor" d="M15.5,12C18,12 20,14 20,16.5C20,17.38 19.75,18.21 19.31,18.9L22.39,22L21,23.39L17.88,20.32C17.19,20.75 16.37,21 15.5,21C13,21 11,19 11,16.5C11,14 13,12 15.5,12M15.5,14A2.5,2.5 0 0,0 13,16.5A2.5,2.5 0 0,0 15.5,19A2.5,2.5 0 0,0 18,16.5A2.5,2.5 0 0,0 15.5,14M5,3H19C20.11,3 21,3.89 21,5V13.03C20.5,12.23 19.81,11.54 19,11V5H5V19H9.5C9.81,19.75 10.26,20.42 10.81,21H5C3.89,21 3,20.11 3,19V5C3,3.89 3.89,3 5,3M7,7H17V9H7V7M7,11H12.03C11.23,11.5 10.54,12.19 10,13H7V11M7,15H9.17C9.06,15.5 9,16 9,16.5V17H7V15Z" />
                      </svg>
                    </Button>
                  </Grid>
                  <Grid item xs={3}>
                    <Button size="small" color="secondary">
                      <svg viewBox="0 0 24 24">
                        <path fill="currentColor" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" />
                      </svg></Button>
                  </Grid>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
