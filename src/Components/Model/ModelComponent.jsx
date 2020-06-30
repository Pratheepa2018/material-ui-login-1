import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {DeleteForever} from '@material-ui/icons';

export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => { 
    props.onDeleteHandle(false);
    setOpen(false);
  };

  useEffect(() => {
    setOpen(props.isOpen)
  });

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
          <Button onClick={handleClose} variant="outlined"  color="primary">
            Cancle
          </Button>
          <Button onClick={handleClose} variant="outlined"  color="secondary" autoFocus>
          <DeleteForever />
           Delete Permanently
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
