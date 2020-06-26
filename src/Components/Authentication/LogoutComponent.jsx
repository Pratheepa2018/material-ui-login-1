import React from 'react';
import { Button} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
// import LoginComponent from '../Login/LoginComponent';

export default function Logout() {
  const history = useHistory();
  function handleLogout() {
    localStorage.removeItem("token");
    history.push('/login');
  }
  return(
    <Button color="inherit" onClick={handleLogout} className="logoutBtn">
      <ExitToAppIcon color="primary" />
    </Button>
  )
}