import React from 'react';
import FullWidthBanner from '../../../Components/FullWidthBanner/FullWidthBanner';
import {  FormControl, Select, Grid, Box,InputLabel, MenuItem, Paper    } from '@material-ui/core';
import { ValidatorForm } from 'react-material-ui-form-validator';
import { makeStyles } from '@material-ui/core/styles';
import './Repos.css';


const useStyles = makeStyles((theme) => ({
    paper: {
      width: '100%',
      padding: '10px 10px 0'
    },
  }));

export default function AddScriptTemplates() {
    const classes = useStyles();
    const branchDetails = [
        'Master',
        'Master-copy'
      ];

      const reposDetails = [
        'MarketPlace',
        'DQE-Azure',
        'Pipeline-Azure'
      ];

      const handleChanges = (e) => {
        const { name, value } = e.target;
       console.log(name, value)
      }
  return (
    <div>
      <FullWidthBanner
        title="Source Control Repo Details"
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
                          <InputLabel id="demo-simple-select-outlined-label">Repositary Details</InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            onChange={handleChanges}
                            fullWidth
                            label="Repositary Details"
                            size="small"
                            name="repoDetails"
                            required
                          >
                          {reposDetails.map((name) => (
                            <MenuItem key={name} value={name} >
                              {name}
                            </MenuItem>
                          ))}
                        </Select>
                        </FormControl>
                     
                    </Grid>
                    <Grid item xs={6} >
                  <FormControl variant="outlined" >
                          <InputLabel id="demo-simple-select-outlined-label">Branch Details</InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            onChange={handleChanges}
                            fullWidth
                            label="Branch Details"
                            size="small"
                            name="branchDetails"
                            required
                          >
                          {branchDetails.map((name) => (
                            <MenuItem key={name} value={name} >
                              {name}
                            </MenuItem>
                          ))}
                        </Select>
                        </FormControl>
                     
                    </Grid>

                    <Grid item xs={12} className='maindiv' >
                      <Paper className={classes.paper} >
                        <InputLabel>Fetching YAML files here</InputLabel>
                        <pre><code>
                          <object width="100%" height="300" type="text/plain" data="../../../../assets/images/ASP.NetCore_Yaml.txt" border="0" >
                          </object>
                        </code></pre>
                      </Paper>
                    </Grid>

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
