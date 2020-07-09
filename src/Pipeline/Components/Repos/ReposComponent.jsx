import React from 'react';
import FullWidthBanner from '../../../Components/FullWidthBanner/FullWidthBanner';
import { Radio,  FormControlLabel, Typography, Grid, Box, Button, RadioGroup } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import './Repos.css';

export default function AddScriptTemplates() {

  return (
    <div>
      <FullWidthBanner
        title="Source Control Integration"
        image="../../../assets/images/globle.jpg"
        imageText="Full Banner"
        exceptimage="../../../assets/images/learnmore.gif"
      />
      <Box marginY={5}>
        <Grid container spacing={3} direction="row" alignItems="center" justify="center">
          <Grid item xs={7}>
            <Box marginY={3} border={1} padding={2} boxShadow={3} className='maindiv'>
              <Typography variant="subtitle1" className="bold">Sign into Source Control</Typography>
              <Box padding={3}>
                <ValidatorForm>
                  <Grid container spacing={3} direction="row" justify="space-between" alignItems="center" alignContent="center">
                    
                  <Grid item xs={12} >
             
                  <RadioGroup aria-label="sourceControl" name="sourceControl" style={{display:'block'}} >
                  <FormControlLabel
                        value="Azure Repos"
                        control={<Radio color="primary"  />}
                        label="Azure Repos"
                      />
                       <FormControlLabel
                        value="TFS"
                        control={<Radio color="primary"  />}
                        label="TFS"
                      />
                       <FormControlLabel
                        value="GitHub"
                        control={<Radio color="primary" />}
                        label="GitHub"
                      />
                   </RadioGroup>
                     
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                      <TextValidator
                        type="text"
                        variant="outlined"
                        margin="normal"
                        required
                        id="projName"
                        label="User Name"
                        name="userName"
                        size="small"
                        autoFocus
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                      <TextValidator
                        type="password"
                        variant="outlined"
                        margin="normal"
                        required
                        id="projName"
                        label="Password"
                        name="password"
                        size="small"
                        autoFocus
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={2}>
                      
                    </Grid>
                    <Grid item xs={3}>
                    <Button  variant="contained" color="primary" fullWidth >SignIn</Button>
                    </Grid>
                    <Grid item xs={3}>
                    <Button href="/dashboard/CDP/pipeline/repos/repos-details"  variant="contained" color="primary" fullWidth >Sign UP</Button>
                    </Grid>
                    <Grid item xs={2}>
                      
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
