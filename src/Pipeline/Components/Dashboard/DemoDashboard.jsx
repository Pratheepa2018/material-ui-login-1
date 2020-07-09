import React, { Component } from 'react';

import { Grid } from '@material-ui/core/';
import FullWidthBanner from '../../../Components/FullWidthBanner/FullWidthBanner';
import GridComponent from '../../../Components/Grid/GridComponent';
import '../../../Styles/dashboard.scss';

const cards = [
  { id: 1, title: 'Projects', description: '', image: '../../../assets/images/pipeline/project.png', learnMorelink: '', letsGolink: '/dashboard/CDP/pipeline/Projects' },
  { id: 2, title: 'DevOps Tools', description: '', image: '../../../assets/images/pipeline/devops.jpg', learnMorelink: '', letsGolink: '/dashboard/CDP/pipeline/devopstools' },
  { id: 3, title: 'Script Templates', description: '', image: '../../../assets/images/pipeline/scripttemplates.png', learnMorelink: '', letsGolink: '/dashboard/CDP/pipeline/script-templates' },
  { id: 4, title: 'Repos', description: '', image: '../../../assets/images/pipeline/repos.png', learnMorelink: '', letsGolink: '/dashboard/CDP/pipeline/repos' },
  { id: 1, title: 'Build', description: '', image: '../../../assets/images/pipeline/build.jpg', learnMorelink: '', letsGolink: '/dashboard/CDP/pipeline/build-pipeline' },
  { id: 2, title: 'Release', description: '', image: '../../../assets/images/pipeline/release.jpg', learnMorelink: '', letsGolink: '/dashboard/CDP/pipeline/release' },

]
class DashboardComponent extends Component {


  render() {
    return (
      <div>
        <FullWidthBanner
        title="Pipeline Automation"
          image="../../../assets/images/globle.jpg"
          imageText="alt text"
          exceptimage="../../../assets/images/learnmore.gif" />
        <Grid className='dash_box'>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <GridComponent card={card} gridSize={3} textAlign='center' />
            ))}
          </Grid>
        </Grid>
      </div>
    );
  }
}


export default DashboardComponent;