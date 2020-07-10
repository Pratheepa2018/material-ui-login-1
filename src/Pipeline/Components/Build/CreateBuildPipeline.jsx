import React from 'react';
import FullWidthBanner from '../../../Components/FullWidthBanner/FullWidthBanner';
import {  FormControl, Select, Grid, Box,InputLabel, MenuItem, Checkbox,
     FormControlLabel, FormLabel, Button   } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { makeStyles } from '@material-ui/core/styles';
import './Build.css';


const useStyles = makeStyles((theme) => ({
 
    formControl: {
        margin: theme.spacing(3),
      },
  }));

export default function AddScriptTemplates() {
    const classes = useStyles();
  
    const projectList = [
        'All',
        'Project1',
        'Pipeline Proj'
      ];
    
      const DevOpsBuildTools = [
        'All',
        'Azure',
        'Jenkins'
      ];
      
      const YAMLScript = [
        { id: 1, icon: '../../../../assets/images/pipeline/aspdotnet.png', name: 'ASP.Net' },
        { id: 2, icon: '../../../../assets/images/pipeline/aspdotnetcore.png', name: 'ASP.Net Core' },
        { id: 3, icon: '../../../../../assets/images/asp-net-core-logo-24x24.png', name: '.Net Desktop' }
      ];
      
      const handleChanges = (e) => {
        const { name, value } = e.target;
       console.log(name, value)
      }

      const otherPackages = [
        { id: 1, icon: '../../../../assets/images/pipeline/azurefilecopy.png', name: 'Azure File Copy  ' },
        { id: 2, icon: '../../../../assets/images/azure-app-service-deploy-icon-24x24.png', name: 'Cache' },
        { id: 3, icon: '../../../../../assets/images/pipeline/npm-logo.png', name: 'npm' }
      ];
    

  return (
    <div>
      <FullWidthBanner
        title="Create CI Build Pipeline"
        image="../../../../assets/images/globle.jpg"
        imageText="Full Banner"
        exceptimage="../../../../assets/images/learnmore.gif"
      />
      
      <Box marginY={5}>
        <Grid container spacing={3} direction="row" alignItems="center" justify="center">
          <Grid item xs={7}>
            <Box marginY={3} border={1} padding={2} boxShadow={3}>
              <Box padding={3}>
                <ValidatorForm>
                  <Grid container spacing={3} direction="row" justify="space-between" alignItems="center" alignContent="center">
                    
                  <Grid item xs={6} >
                  <FormControl variant="outlined" >
                          <InputLabel id="demo-simple-select-outlined-label">Project List</InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            onChange={handleChanges}
                            fullWidth
                            label="Project List"
                            size="small"
                            name="projectList"
                            required
                          >
                          {projectList.map((name) => (
                            <MenuItem key={name} value={name} >
                              {name}
                            </MenuItem>
                          ))}
                        </Select>
                        </FormControl>
                     
                    </Grid>
                    <Grid item xs={6} >
                    <FormControl variant="outlined" >
                          <InputLabel id="demo-simple-select-outlined-label">DevOps Build Tools</InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            onChange={handleChanges}
                            fullWidth
                            label="DevOps Build Tools"
                            size="small"
                            name="DevOpsBuildTools"
                            required
                          >
                          {DevOpsBuildTools.map((name) => (
                            <MenuItem key={name} value={name} >
                              {name}
                            </MenuItem>
                          ))}
                        </Select>
                        </FormControl>
                     
                    </Grid>

                    <Grid item xs={12}  >
                    <TextValidator
                        type="text"
                        variant="outlined"
                        margin="normal"
                        required
                        id="projName"
                        label="Script Template Title"
                        name="Script_Template_Title"
                        size="small"
                        fullWidth
                      />
                    </Grid>

                    <Grid item xs={6}>
                    <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Select the YAML Script Template</FormLabel>
                      {YAMLScript.map((task) => (
                        <Grid item xs={12}>
                          <FormControlLabel
                            value={task}
                            control={<Checkbox color="primary" />}
                            label={<span className="label"><img src={task.icon} alt={task.name} /> {task.name}</span>}
                            labelPlacement="end"
                          />
                        </Grid>
                      ))}
                      </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                    <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Other Packages</FormLabel>
                      {otherPackages.map((task) => (
                        <Grid item xs={12}>
                          <FormControlLabel
                            value={task}
                            control={<Checkbox color="primary" />}
                            label={<span className="label"><img src={task.icon} alt={task.name} /> {task.name}</span>}
                            labelPlacement="end"
                          />
                        </Grid>
                      ))}
                    </FormControl>
                    </Grid>
                    
                 <Grid item xs={3}></Grid>
                 <Grid item xs={3}>
                      <Button type="clear" variant="contained" color="primary" fullWidth >Save</Button>
                    </Grid>
                    <Grid item xs={3}>
                      <Button variant="outlined" color="primary" fullWidth href="/dashboard/CDP/pipeline/build-pipeline" >Cancel</Button>
                    </Grid>
                    <Grid item xs={3}></Grid>
                  </Grid>
                </ValidatorForm>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>


    </div >
  );
}
