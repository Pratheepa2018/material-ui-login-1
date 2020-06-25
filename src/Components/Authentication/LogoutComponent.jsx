import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { Redirect, useHistory } from 'react-router-dom';
// import LoginComponent from '../Login/LoginComponent';

export default function Logout() {
  const history = useHistory();
  function handleLogout() {
    localStorage.removeItem("token");
    history.push('/login');
  }
  return(
    <Button color="inherit" onClick={handleLogout}>Logout</Button>
  )
}
