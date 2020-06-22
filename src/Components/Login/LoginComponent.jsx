import React, { Component } from 'react';
import { TextField } from '@material-ui/core';

class index extends Component {
    constructor(props) {
        super(props);
        
    }
   
    render() {
        return (
            <form noValidate autoComplete="off">
                <TextField id="standard-basic" label="Standard" />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </form>
        );
    }
}

export default index;