import React from 'react';
import FullWidthBanner from '../../../Components/FullWidthBanner/FullWidthBanner';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import {  Grid, FormControl, InputLabel, Select, MenuItem} from '@material-ui/core';

import './PipelineDashboard.css';


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
  { id: 1, build: '202001519.2', release: 'Release - 02', branch: 'master', dev: '../../assets/images/alpha-x-circle.svg', test: '...', preProd: '...', prod: '' },
  { id: 1, build: '202001512.1', release: 'Release - 03', branch: 'pipeline-02', dev: '../../assets/images/check-circle.svg', test: '...', preProd: '...', prod: '...' },
  { id: 1, build: '202001512.0', release: 'Release - 04', branch: 'pipeline-03', dev: '...', test: '../../assets/images/alpha-x-circle.svg', preProd: '...', prod: '...' },
  { id: 1, build: '202001513.2', release: 'Release - 05', branch: 'pipeline-04', dev: '../../assets/images/check-circle.svg', test: '...', preProd: '../../assets/images/alpha-x-circle.svg', prod: '../../assets/images/alpha-x-circle.svg' }
];

const templateCategory = [
  'Project 1',
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
        title="Devops Tools"
        image="../../assets/images/globle.jpg"
        imageText="Full Banner"
        exceptimage="../../assets/images/learnmore.gif"
      />
      <Grid container className="container">
        <Grid item xs={3} className="selectProject">
          <FormControl variant="outlined">
            <InputLabel id="selectProject">Select the Project</InputLabel>
            <Select
              labelId="selectProject"
              id="selectProject"
              onChange={handleChanges}
              fullWidth
              label="Select the Project"
              size="small"
              name="selectProject"
              required
            >
              {templateCategory.map((name) => (
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
                <StyledTableCell >{ row.dev === '...' ? '...' : <img src={row.dev} alt='' />}</StyledTableCell>
                <StyledTableCell >{ row.test === '...' ? '...' : <img src={row.test} alt='' />}</StyledTableCell>
                <StyledTableCell >{ row.preProd === '...' ? '...' : <img src={row.preProd} alt='' />}</StyledTableCell>
                <StyledTableCell >{ row.prod === '...' ? '...' : <img src={row.prod} alt='' />}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
    </div >
  );
}
