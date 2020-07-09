import React from 'react';
import FullWidthBanner from '../../../Components/FullWidthBanner/FullWidthBanner';
import {  FormControl, Select, Grid, Box,InputLabel, MenuItem, FormGroup , Checkbox,
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
      const handleChanges = (e) => {
        const { name, value } = e.target;
       console.log(name, value)
      }

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

                    <Grid item xs={6}  >
                    <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Select the YAML Script Template</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox  name="ASPNet" />}
            label="ASP.Net"
          />
          <FormControlLabel
            control={<Checkbox  name="ASPNetCore" />}
            label="ASP.Net Core"
           
          />
          <FormControlLabel
            control={<Checkbox name="NetDesktop" />}
            label=".Net Desktop"
          />
        </FormGroup>
      </FormControl>
                    </Grid>
                    <Grid item xs={6}  >
                    <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Other Packages</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox  name="azure" />}
            label="Azure File Copy"
          />
          <FormControlLabel
            control={<Checkbox  name="cache" />}
            label="Cache"
          />
          <FormControlLabel
            control={<Checkbox name="npm" />}
            label="npm"
          />
        </FormGroup>
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
