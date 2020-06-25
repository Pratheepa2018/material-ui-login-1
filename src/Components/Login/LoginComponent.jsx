import React, { Component } from 'react';
import { Button, TextField, FormControlLabel, Checkbox, Link, Paper, Box, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { ValidatorForm } from 'react-material-ui-form-validator';
import './LoginComponent.css'
import { NotificationManager} from 'react-notifications';
import Auth from '../../Layout/Authentication';
export default class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      submitting: false
    }
  }
  handleChanges = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value})
  }

  handleSignIn = async () => {
    this.setState({submitting: true})
    const values = {
      LoginName: this.state.email,
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
      }).then(resp => resp.json())
      .then(data => {
        this.setState({submitting: false})
        if(data.status === 'Success') {
          localStorage.setItem("token", 1);
          this.props.history.push('/subscribedservices');
        } else {
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
    const { email, password, submitting} = this.state;
    const auth = Auth.isAuthenticated();
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
                onChange={this.handleChanges}
                autoFocus
                value={email}
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
                onChange={this.handleChanges}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}
              > {
                !submitting ? 'Sign In' : 'Submitting'
              }
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">Forgot password?</Link>
                </Grid>
              </Grid>
            </ValidatorForm>
          </Box>
        </Grid>
        
      </Grid>
    );
  }
}