import React from 'react';
import FullWidthBanner from '../../../Components/FullWidthBanner/FullWidthBanner';
import { Grid} from '@material-ui/core';
import './PipelineDashboard.css';

export default function DevopsTools() {

  return (
    <div id="myprojects">
      <FullWidthBanner
        title="Devops Tools"
        image="../../assets/images/globle.jpg"
        imageText="Full Banner"
        exceptimage="../../assets/images/learnmore.gif"
      />
      <Grid container className="container">
        
      </Grid>
    </div>
  );
}
