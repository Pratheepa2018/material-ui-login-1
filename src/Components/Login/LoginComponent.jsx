import React, { Component } from 'react';
import { Button, TextField, FormControlLabel, Checkbox, Link, Paper, Box, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { ValidatorForm } from 'react-material-ui-form-validator';
import './LoginComponent.css'
import { NotificationManager} from 'react-notifications';

export default class LoginComponent extends Component {
  state = {
    LoginName: '',
    password: ''
  }
  handleEmailChange = (event) => {
    const LoginName = event.target.value;
    this.setState({ LoginName });
  }
  handlePasswordChange = (event) => {
    const password = event.target.value;
    this.setState({ password });
  }

  handleSignIn = async () => {
    const values = {
      LoginName: this.state.LoginName,
      password: this.state.password
    }

    try {
       await fetch(`https://cdplogin.azurewebsites.net/login`, {
        method: 'POST',
        crossDomain: true,
        compress: true,
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(values),
      }).then((response) => {
        return response.json();
      }).then(data => {
        if (data.status === "Success") {
            return this.props.history.push('/dashboard')
        }
        else {
          return NotificationManager.warning(data.message);
        }
      })
    } catch (e) {
      return {
        responseStatus: false,
        responseMessage: "Something went wrong."
      };
    }
  }


  render() {
    const classes = { root: 'root', image: "img", paper: 'paper' }
    const { LoginName, password } = this.state;
    return (
      <Grid container component="main" className='bgimg' alignItems="center" justifyContent="right" justify="flex-end">
       
        
      
        <Grid item xs={12} sm={12} md={5} p={2}  elevation={2} square >
          <Box className='loginbox' padding={4} marginLeft={5} marginRight={5} marginTop={8} marginBottom={8} component={Paper}>
            <Typography component="h1" variant="h5">Sign in</Typography>
            <ValidatorForm ref="form"
              onSubmit={this.handleSignIn}
              onError={errors => console.log(errors)}
              className={classes.form} >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={this.handleEmailChange}
                autoFocus
                value={LoginName}
                validators={['required', 'isEmail']}
                errorMessages={['this field is required', 'email is not valid']}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={this.handlePasswordChange}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">Forgot password?</Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>

            </ValidatorForm>
          </Box>
        </Grid>
        
      </Grid>
    );
  }
}