import React from 'react';
import { Typography, Dialog, DialogTitle, DialogContent, Accordion, AccordionSummary, AccordionDetails, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../../Styles/metaModel.scss';
const MetaDialog = (props) => {
  const { onClose, open, metaDatavalues } = props;
  const handleModelClose = () => {
    onClose(metaDatavalues)
  };
  return (
    <div class="model-outer">
      <Dialog
        open={open}
        onClose={handleModelClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div class="model-inner-wrapper">
          <DialogTitle disableTypography id="alert-dialog-title" className="model-title">
            <Typography variant="h6">
              View Meta Data
            </Typography>
            {onClose ? (
                <IconButton aria-label="close" onClick={handleModelClose} className="model-close-icon">
                  <CloseIcon />
                </IconButton>
              ) : null
            }
          </DialogTitle>
          <DialogContent>
            { open &&
              metaDatavalues.map((item, index) => (
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    key={index}
                  >
                    <Typography >{item.tableName}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul className="meta-model-list">
                      {
                        item.columns.map((data, Index) => (
                          <li key={Index}>
                            {data}, 
                          </li>
                        ))
                      }
                    </ul>
                  </AccordionDetails>
                </Accordion>
              ))
            }
          </DialogContent>
        </div>
      </Dialog>
    </div>
  )
}

export default MetaDialog;