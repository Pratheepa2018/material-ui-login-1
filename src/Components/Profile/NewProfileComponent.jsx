import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import FullWidthBanner from '../FullWidthBanner/FullWidthBanner'
import { Button, ButtonGroup, Box, FormControl, Select, MenuItem, Divider ,
  Checkbox, ListItemIcon, ListItemText, ListItem, CardHeader, Card, List, Grid, Typography  } from '@material-ui/core';
  import SaveIcon from '@material-ui/icons/Save';
  import { green } from '@material-ui/core/colors';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  grid:{
    margin: 'auto',   
  },
  fabGreen: {
    borderRadius: '35px',
    color: theme.palette.common.white,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[600],
    },
  },

  formControl: {
    marginLeft: theme.spacing(30),
    marginBottom: theme.spacing(5),
    minWidth: 120,
    maxWidth: 300,
  },
  cardHeader: {
    padding: theme.spacing(1, 2),
  },
  list: {
    width: 200,
    height: 230,
    backgroundColor: theme.palette.background.paper,
    overflow: 'auto',
  },
  comparebutton: {
    margin: theme.spacing(0.5, 0),
    borderRadius: '50%',
    minWidth: 'unset',
    width: '40px',
    height: '40px'
  },

}));

const sourceConnectors = [
  'source MYsql',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];


const targetConnectors = [
  'Target Mysql',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

//code for transfer-list
function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

function union(a, b) {
  return [...a, ...not(b, a)];
}


export default function NewProfile() {

  const classes = useStyles();
  const theme = useTheme();

  const [personName, setPersonName] = useState([]);

  const [source, notSource] = useState(false)
  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  const handleBtn = () =>{
    notSource(true)
  }
//code for transfer list

const [checked, setChecked] = useState([]);
  const [left, setLeft] = useState([0, 1, 2, 3, 4, 5, 6, 7]);
  const [right, setRight] = useState([]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

 
  const numberOfChecked = (items) => intersection(checked, items).length;

  const handleToggleAll = (items) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

const handleSaveProfile = () =>{
 
  if(right.length === 0){
    alert('No Data Choosen')
  }
  else{
    alert(right)
    console.log('daataTosend', right)
  }
}

  const customList = (title, items) => (
    <Card>
      <CardHeader
        className={classes.cardHeader}
        avatar={
          <Checkbox
            onClick={handleToggleAll(items)}
            checked={numberOfChecked(items) === items.length && items.length !== 0}
            indeterminate={numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0}
            disabled={items.length === 0}
            inputProps={{ 'aria-label': 'all items selected' }}
          />
        }
        title={title}
        subheader={`${numberOfChecked(items)}/${items.length} selected`}
      />
      <Divider />
      <List className={classes.list} dense component="div" role="list">
        {items.map((value) => {
          const labelId = `transfer-list-all-item-${value}-label`;

          return (
            <ListItem key={value} role="listitem" button onClick={handleToggle(value)}>
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`Column ${value + 1}`} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Card>
  );

  useEffect(() => {

  });

  return (
    <div className={classes.root}>

      <FullWidthBanner
        title="Add New Profile"
        image="../../../assets/images/globle.jpg"
        imageText="Full Banner" />

          <Box padding={6} >
          <Box border={1} borderRadius={16} padding={6} >
            
          <div style = {{display: 'block'}}>
      
          <ButtonGroup  variant="contained" >
              <Button onClick = {handleBtn}  color="primary">Source</Button>
              <Button onClick = {handleBtn}  color="secondary">Target</Button>
            </ButtonGroup>
           
            <FormControl  className={clsx(classes.formControl)}>
            <Select
              displayEmpty
              value={personName}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              
              {source ? <MenuItem disabled value="">
                <em>Select Source Connectors</em>
              </MenuItem>
              
              : <MenuItem disabled value="">
                <em>Select Target Connectors</em>
              </MenuItem>}

              {sourceConnectors.map((name) => (
                <MenuItem key={name} value={name} >
                  {name}
                </MenuItem>
              ))} 
           
            </Select>
          </FormControl>
        
          </div>

          <Grid container spacing={2} justify="center" alignItems="center" className={classes.grid}>
       
      <Grid item>{customList('Choices', left)}</Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            variant="contained"
            size="small"
            color="primary"
            className={classes.comparebutton}
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label="move selected right"
          >
            &gt;
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            className={classes.comparebutton}
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label="move selected left"
          >
            &lt;
          </Button>
        </Grid>
      </Grid>
      <Grid item>{customList('Chosen', right)}</Grid>
    </Grid>
    <div  style={{ display:'flex', justifyContent: 'flex-end' }}  >
    <Button 
     variant="contained"
     border={1} borderRadius={16}
        color="primary"
        size="large"
        onClick={handleSaveProfile}
       className= {classes.fabGreen}
        startIcon={<SaveIcon />}>Save Profile</Button>
    </div>
  
    </Box>  
          </Box>         


    </div>

  );
}