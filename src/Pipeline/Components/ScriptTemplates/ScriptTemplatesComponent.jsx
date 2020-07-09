import React from 'react';
import FullWidthBanner from '../../../Components/FullWidthBanner/FullWidthBanner';
import { AddBox } from '@material-ui/icons';
import { Checkbox, Card, CardActions, FormControlLabel, Button,
   Grid, Typography,Divider,FormLabel, Box   } from '@material-ui/core';
import './ScriptTemplates.css';

export default function ScriptTemplates() {
  const myprojects = [
    { id: 1, img: '../../../assets/images/aspdotnet.png',name:'ASP.Net', type: 'Build', details: 'Yaml Script Skeleton Details' },
    { id: 2, img: '../../../assets/images/aspdotnetcore.png',name:'ASP.Net Core', type: 'Build', details: 'Yaml Script Skeleton Details' },
    { id: 3, img: '../../../assets/images/dotnet.png', name:'.Net Desktop',type: 'Build', details: 'Yaml Script Skeleton Details' },
    { id: 1, img: '../../../assets/images/dotnetcore.png',name:'Install .Net Core Runtime', type: 'Release', details: 'Yaml Script Skeleton Details' },
 
  ];

  return (
    <div id="myprojects">
      <FullWidthBanner
        title="Script Templates"
        image="../../../assets/images/globle.jpg"
        imageText="Full Banner"
        exceptimage="../../../assets/images/learnmore.gif"
      />
      <Box margin={5}>
      <Grid container className="container">
        <Grid direction="row" className="topbar">
          <Button href="/dashboard/CDP/pipeline/script-templates/add-script-templates" type="button" variant="outlined" color="primary">
            <AddBox />Add Script Templates</Button>
        </Grid>
        <Grid item xs={12}>
        <div className= 'flexdiv'>
                  <FormLabel className="scriptlabel">Script Category:  </FormLabel>
                  <FormControlLabel
                    value="Build"
                    control={<Checkbox color="primary" />}
                    label="Build"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="Release"
                    control={<Checkbox color="primary" />}
                    label="Release"
                    labelPlacement="start"
                  />
                  </div>
        </Grid>
        <Grid spacing={3} container direction="row">
          {myprojects.map((proj) => (
            <Grid key={proj.id} item>
              <Card>
                <div className="title">
                <div className= 'flexdiv'>
                <img src={proj.img} alt={proj.name} />
                  <Typography >
                    {proj.name}
                  </Typography>
                  </div>
                  <Typography variant="h6" component="h2" color="blue">
                  Script Type : {proj.type}
                  </Typography>
                  <Divider  style={{margin:'20px'}}/>
                  <Typography color="blue">
                    {proj.details}
                  </Typography>

                </div>
                <Divider  style={{margin:'2px'}}/>
                <CardActions className="buttons">
                  <Grid item xs={3}>
                  <Button size="small" color="primary">
                      <svg viewBox="0 0 24 24">
                        <path fill="currentColor" d="M15.5,12C18,12 20,14 20,16.5C20,17.38 19.75,18.21 19.31,18.9L22.39,22L21,23.39L17.88,20.32C17.19,20.75 16.37,21 15.5,21C13,21 11,19 11,16.5C11,14 13,12 15.5,12M15.5,14A2.5,2.5 0 0,0 13,16.5A2.5,2.5 0 0,0 15.5,19A2.5,2.5 0 0,0 18,16.5A2.5,2.5 0 0,0 15.5,14M5,3H19C20.11,3 21,3.89 21,5V13.03C20.5,12.23 19.81,11.54 19,11V5H5V19H9.5C9.81,19.75 10.26,20.42 10.81,21H5C3.89,21 3,20.11 3,19V5C3,3.89 3.89,3 5,3M7,7H17V9H7V7M7,11H12.03C11.23,11.5 10.54,12.19 10,13H7V11M7,15H9.17C9.06,15.5 9,16 9,16.5V17H7V15Z" />
                      </svg>
                    </Button>
                  </Grid>
                  <Grid item xs={3}>
                  <Button size="small" color="secondary">
                      <svg viewBox="0 0 24 24">
                        <path fill="currentColor" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" />
                      </svg></Button>
                  </Grid>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
      </Box>
    </div>
  );
}
