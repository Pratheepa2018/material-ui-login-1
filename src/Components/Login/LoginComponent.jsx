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
    }
  }
  handleChanges = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value})
  }


  handleSignIn = async () => {
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
<<<<<<< HEAD
      }).then((response) => {
        return response.json();
      }).then(data => {
        if (data.status === "Success") {
            return this.props.history.push('/dashboard')
        }
        else {
=======
      }).then(resp => resp.json())
      .then(data => {
        if(data.status === 'Success') {
          localStorage.setItem("token", 1);
          this.props.history.push('/subscribedservices');
        } else {
>>>>>>> 520daa9a91a41a4da3928e272cd2829a8d7d3679
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
    const { email, password } = this.state;
    const auth = Auth.isAuthenticated();
    return (
<<<<<<< HEAD
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
=======
      <Grid container component="main" className='bgimg' alignItems="center" justifyContent="center">
        {!auth ?
          <Grid item xs={12} sm={6} md={5} p={2} component={Paper} elevation={2} square>
            <Box className='loginbox' pt={4} pb={4}>
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
>>>>>>> 520daa9a91a41a4da3928e272cd2829a8d7d3679
                </Grid>

<<<<<<< HEAD
            </ValidatorForm>
          </Box>
        </Grid>
        
=======
              </ValidatorForm>
            </Box>
          </Grid>
        : ''}  
        <Grid item xs={false} sm={6} md={7} alignItems="center" >
          <Box m={2} p={3} className='tre_bg'>
            <h2>The Material Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts.</h2>
            <p>The grid creates visual consistency between layouts while allowing flexibility across a wide variety of designs. Material Design’s responsive UI is based on a 12-column grid layout.</p>
            <h2>Auto-layout</h2>
            <p>The Auto-layout makes the items equitably share the available space. That also means you can set the width of one item and the others will automatically resize around it.</p>
          </Box>
        </Grid>
>>>>>>> 520daa9a91a41a4da3928e272cd2829a8d7d3679
      </Grid>
    );
  }
}