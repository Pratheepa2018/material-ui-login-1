import React from 'react';
import FullWidthBanner from '../../../Components/FullWidthBanner/FullWidthBanner';
import {
  Checkbox, FormControlLabel, Button, Box,
  Grid, Typography, FormControl, InputLabel, Select, MenuItem
} from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import './Release.css';

export default function AddReleaseDetails() {
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
    { id: 1, icon: '../../../../assets/images/azure-key-vault-icon-24x24.png', name: 'Azure Key Vault' },
    { id: 2, icon: '../../../../assets/images/azure-app-service-deploy-icon-24x24.png', name: 'Azure App Service Deploy' },
    { id: 3, icon: '../../../../../assets/images/asp-net-core-logo-24x24.png', name: 'NuGet authenticate' }
  ];

  const handleChanges = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
  }

  return (
    <div id="myprojects">
      <FullWidthBanner
        title="Create CD Release Details"
        image="../../../../assets/images/globle.jpg"
        imageText="Full Banner"
        exceptimage="../../../../assets/images/learnmore.gif"
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
                            label={<span className="label"><img src={task.icon} alt={task.name} /> {task.name}</span>}
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
                          <span className="label"><img src={task.icon} alt={task.name} /> {task.name}</span>

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

    </div>
  );
}
