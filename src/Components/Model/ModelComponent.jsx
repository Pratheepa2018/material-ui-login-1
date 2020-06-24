import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

class ModelComponent extends React.Component {
    constructor(props) {
        super(props);
      this.state=({
          isOpen: false
      })    
      this.handleClose= this.handleClose.bind(this);
    }

    handleClose(){

    }

    
    
    render() {
        alert(this.props);
        return (
            <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="globleModel"
        open={true}
        onClose={this.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={true}>
          <div className='modelBody'>
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
          </div>
        </Fade>
      </Modal>
        );
    }
}

export default ModelComponent;
