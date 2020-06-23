import React, { Component } from 'react';
import { Button, TextField, FormControlLabel, Checkbox, Link, Paper, Box, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import './LoginComponent.css'

class index extends Component {
    render() {
        const classes = { root: 'root', image: "img", paper: 'paper', avatar: 'avater' }
        return (
            <Grid container component="main" className='bgimg' alignItems="center" justifyContent="center">
                <Grid item xs={12} sm={6} md={5} p={2} component={Paper} elevation={2} square>
                <Box className='loginbox' pt={4} pb={4}>

                <Typography component="h1" variant="h5">
                            Sign in
                </Typography>
                        <form className={classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
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
                                Sign In
                  </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                      </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>

                        </form>
                    </Box>
                </Grid>

                <Grid item xs={false} sm={6} md={7}  alignItems="center" >
                    <Box m={2} p={3} className='tre_bg'>
                        <h2>The Material Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts.</h2>
                        <p>The grid creates visual consistency between layouts while allowing flexibility across a wide variety of designs. Material Design’s responsive UI is based on a 12-column grid layout.</p>
                        <h2>Auto-layout</h2>
                        <p>The Auto-layout makes the items equitably share the available space. That also means you can set the width of one item and the others will automatically resize around it.</p>
                    </Box>
                </Grid>
            </Grid>
        );
    }
}
export default index;