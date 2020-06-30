import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import FullWidthBanner from '../FullWidthBanner/FullWidthBanner'
import {Button, ButtonGroup } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));



export default function NewProfile(props) {

    const classes = useStyles();
    const theme = useTheme();


    useEffect(() => {

    });


    return (
        <div className={classes.root}>
            <FullWidthBanner
                title="My Connectors"
                image="../../../assets/images/globle.jpg"
                imageText="Full Banner" />
    <ButtonGroup disableElevation variant="contained" color="primary">
  <Button>Source</Button>
  <Button>Target</Button>
</ButtonGroup>
          
        </div>

    );
}