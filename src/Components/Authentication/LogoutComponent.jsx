import React from 'react';
import { Button} from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export default function Logout() {
  function handleLogout() {
    localStorage.removeItem("token");
    window.location.reload(false)
  }
  return(
    <Button color="inherit" onClick={handleLogout} className="logoutBtn">
      <ExitToAppIcon color="primary" />
    </Button>
  )
}