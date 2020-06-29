import React from 'react';
import { IconButton} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
// import LoginComponent from '../Login/LoginComponent';

export default function Logout() {
  const history = useHistory();
  function handleLogout() {
    localStorage.removeItem("token");
    history.push('/login');
    window.location.reload(false);

  }
  return(
    <IconButton onClick={handleLogout} className="logoutBtn" color="inherit">
      <ExitToAppIcon />
    </IconButton>
  )
}