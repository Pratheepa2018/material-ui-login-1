import React from 'react';
import FullWidthBanner from '../../../Components/FullWidthBanner/FullWidthBanner';
import { AddBox } from '@material-ui/icons';
import { Checkbox, Card, CardActions, FormControlLabel, Button, Grid, Typography } from '@material-ui/core';
import './DevopsTools.css';

export default function DevopsTools() {
  const myprojects = [
    { id: 1, img: '../../assets/images/git-logo.png', name: 'Git', details: 'Git Details' },
    { id: 2, img: '../../assets/images/TFS-logo.png', name: 'TFS', details: 'TFS Details' },
    { id: 3, img: '../../assets/images/jenkins.png', name: 'Jenkins', details: 'Jenkins Details' }
  ];

  return (
    <div id="myprojects">
      <FullWidthBanner
        title="Devops Tools"
        image="../../assets/images/globle.jpg"
        imageText="Full Banner"
        exceptimage="../../assets/images/learnmore.gif"
      />
      <Grid container className="container">
        <Grid direction="row" className="topbar">
          <Button href="/DevopsTools/AddDevopsTool" type="button" variant="outlined" color="primary">
            <AddBox />Add Devops Tool</Button>
        </Grid>
        <Grid spacing={3} container direction="row">
          {myprojects.map((proj) => (
            <Grid key={proj.id} item>
              <Card>
                <div className="title">
                  <div className="devops-logos" dangerouslySetInnerHTML={{ __html: `<img src=${proj.img} />` }} />
                  <Typography variant="h6" component="h2" color="blue">
                    {proj.name}

                  </Typography>
                  <Typography color="blue">
                    {proj.details}
                  </Typography>

                </div>
                <div className="innercard">
                  <FormControlLabel
                    value="CI"
                    control={<Checkbox color="primary" />}
                    label="CI"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="CD"
                    control={<Checkbox color="primary" />}
                    label="CD"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="Source Control"
                    control={<Checkbox color="primary" />}
                    label="Source Control"
                    labelPlacement="start"
                  />
                </div>
                <CardActions className="buttons">
                  <Grid item xs={3}>
                    <Button variant="contained" color="primary" fullWidth href="/DevopsTools/AddDevopsTool">Edit</Button>
                  </Grid>
                  <Grid item xs={3}>
                    <Button variant="outlined" color="primary" fullWidth href="/Projects" >Delete</Button>
                  </Grid>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
