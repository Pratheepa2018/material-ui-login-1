import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const buttonStyle = {
  fontSize: '12px',
  textTransform: 'capitalize',
  fontWeight: 500,
  marginBottom: '15px'
}

export default function AlertDialog(props) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    props.deleteConnector(false);
    setOpen(false);
  };

  useEffect(() => {
    setOpen(props.isOpen)
  }, [props.isOpen]);

  return (
    <div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Delete"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to permanently delete this item?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" color="primary" style={buttonStyle}>
            Cancle
          </Button>
          <Button onClick={() => props.deleteConnector(false)} variant="contained" color="secondary" autoFocus style={buttonStyle}>
            Delete Permanently
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
