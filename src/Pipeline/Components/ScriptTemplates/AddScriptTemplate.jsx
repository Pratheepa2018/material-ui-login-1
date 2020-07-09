import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FullWidthBanner from '../../../Components/FullWidthBanner/FullWidthBanner';
import { Checkbox,  FormControlLabel, Typography, Grid, Box, Button, Paper, InputBase, 
     Select, MenuItem, InputLabel, FormControl  } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import './ScriptTemplates.css';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '4px',
    display: 'flex',
    alignItems: 'center',
    border: '#ccc 1px solid'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  }
}));

export default function AddScriptTemplates() {
  const classes = useStyles();
  
  const frameworkType = [
    'ASP.Net',
    'ASP.Net Core',
    '.Net Installer'
  ];
  const templateCategory = [
    'Build',
    'Release'
  ];
  
  const handleChanges = (e) => {
    const { name, value } = e.target;
   console.log(name, value)
  }

  return (
    <div id="addNewProject">
      <FullWidthBanner
        title="Add Script Templates"
        image="../../assets/images/globle.jpg"
        imageText="Full Banner"
        exceptimage="../../assets/images/learnmore.gif"
      />
      <Box marginY={5}>
        <Grid container spacing={3} direction="row" alignItems="center" justify="center">
          <Grid item xs={6}>
            <Box marginY={3} border={1} padding={2} borderColor="grey.500" boxShadow={3}>
              <Typography variant="subtitle1" className="bold">Add Script Templates</Typography>
              <Box padding={3}>
                <ValidatorForm>
                  <Grid container spacing={3} direction="row" justify="space-between" alignItems="center" alignContent="center">
                    <Grid item xs={12}>
                      <TextValidator
                        type="text"
                        variant="outlined"
                        margin="normal"
                        required
                        id="projName"
                        label="Script Template Title"
                        name="Script_Template_Title"
                        size="small"
                        autoFocus
                        fullWidth
                        validators={['required', 'matchRegexp:^[A-Za-z]+']}
                        errorMessages={['This field is require', 'Enter proper name!']}
                      />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl variant="outlined" >
                          <InputLabel id="demo-simple-select-outlined-label">Script Template Category</InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            onChange={handleChanges}
                            fullWidth
                            label="Script Template Category"
                            size="small"
                            name="templateCategory"
                            required
                          >
                          {templateCategory.map((name) => (
                            <MenuItem key={name} value={name} >
                              {name}
                            </MenuItem>
                          ))}
                        </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                    <FormControl variant="outlined" >
                          <InputLabel id="demo-simple-select-outlined-label">Select Framework</InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            onChange={handleChanges}
                            fullWidth
                            label="Select Framework"
                            size="small"
                            name="framework"
                            required
                          >
                          {frameworkType.map((name) => (
                            <MenuItem key={name} value={name} >
                              {name}
                            </MenuItem>
                          ))}
                        </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="subtitle1">YAML Script File</Typography>

                      <Paper component="form" className={classes.root}>
                        <InputBase
                          className={classes.input}
                          placeholder="Choose File"
                          inputProps={{ 'aria-label': 'Choose File' }}
                          accept="image/*"
                          id="contained-button-file"
                          multiple
                          type="file"
                          variant="outlined"
                        />

                      </Paper>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        value="Is Active"
                        control={<Checkbox color="primary" />}
                        label="Is Active"
                        labelPlacement="start"
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <Button type="clear" variant="contained" color="primary" fullWidth >Save</Button>
                    </Grid>
                    <Grid item xs={3}>
                      <Button variant="outlined" color="primary" fullWidth href="/pipeline/script-templates" >Cancel</Button>
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
