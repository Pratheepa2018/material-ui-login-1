import React from 'react';
import FullWidthBanner from '../../../Components/FullWidthBanner/FullWidthBanner';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import {  Grid,Button, FormControl, InputLabel, Select, MenuItem} from '@material-ui/core';
import { AddBox } from '@material-ui/icons';

import './Release.css';


const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#4169e1',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const dashboard = [
  { id: 1, build: '202001519.2', release: 'Release - 02', branch: 'master', dev: '../../assets/images/alpha-x-circle.svg', test: 'Deploy', preProd: 'Deploy', prod: 'Deploy' },
  { id: 1, build: '202001512.1', release: 'Release - 03', branch: 'pipeline-02', dev: '../../assets/images/check-circle.svg', test: '../../assets/images/check-circle.svg', preProd: '../../assets/images/check-circle.svg', prod: '../../assets/images/check-circle.svg' },
  { id: 1, build: '202001512.0', release: 'Release - 04', branch: 'pipeline-03', dev: '../../assets/images/check-circle.svg', test: '../../assets/images/alpha-x-circle.svg', preProd: 'Deploy', prod: 'Deploy' },
  { id: 1, build: '202001513.2', release: 'Release - 05', branch: 'pipeline-04', dev: '../../assets/images/check-circle.svg', test: 'Deploy', preProd: '../../assets/images/alpha-x-circle.svg', prod: '../../assets/images/alpha-x-circle.svg' }
];

const projList = [
  'All/Project 1',
  'Project 2',
  'Project 3',
];

const handleChanges = (e) => {
  const { name, value } = e.target;
  console.log(name, value)
}

export default function DevopsTools() {
  const classes = useStyles();

  return (
    <div id="myprojects">
      <FullWidthBanner
        title="CD Release Pipeline"
        image="../../assets/images/globle.jpg"
        imageText="Full Banner"
        exceptimage="../../assets/images/learnmore.gif"
      />
      <Grid container className="container">
        <Grid item xs={3}>
        <Button href="/pipeline/repos/release-details" type="button" variant="outlined" color="primary">
          <AddBox/> Add Release Pipeline</Button>
          <FormControl variant="outlined" className="selectProject">
            <InputLabel id="selectProject">Select the Project</InputLabel>
            <Select
              labelId="selectProject"
              id="selectProject"
              onChange={handleChanges}
              fullWidth
              label="Project List"
              size="small"
              name="selectProject"
              required
            >
              {projList.map((name) => (
                <MenuItem key={name} value={name} >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Table className={`${classes.table} projectTable`} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell rowSpan={2}>Build</StyledTableCell>
              <StyledTableCell rowSpan={2}>Release</StyledTableCell>
              <StyledTableCell rowSpan={2}>Branch</StyledTableCell>
              <StyledTableCell colSpan={4} align="center">Stage</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell >Dev</StyledTableCell>
              <StyledTableCell >Test</StyledTableCell>
              <StyledTableCell >Pre-prod</StyledTableCell>
              <StyledTableCell >Prod</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dashboard.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell >{row.build}</StyledTableCell>
                <StyledTableCell >{row.release}</StyledTableCell>
                <StyledTableCell >{row.branch}</StyledTableCell>
                <StyledTableCell >{ row.dev === 'Deploy' ? <button> Deploy</button> : <img src={row.dev} alt='' />}</StyledTableCell>
                <StyledTableCell >{ row.test === 'Deploy' ? <button> Deploy</button> : <img src={row.test} alt='' />}</StyledTableCell>
                <StyledTableCell >{ row.preProd === 'Deploy' ? <button> Deploy</button> : <img src={row.preProd} alt='' />}</StyledTableCell>
                <StyledTableCell >{ row.prod === 'Deploy' ? <button> Deploy</button> : <img src={row.prod} alt='' />}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
    </div >
  );
}
