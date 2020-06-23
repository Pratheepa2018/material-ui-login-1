import React, { Component } from 'react';
import { TextField } from '@material-ui/core';

export default class SignUp extends Component {
  render() {
    return (
      <div>
        <form>
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
        </form>
      </div>
    )
  }
}