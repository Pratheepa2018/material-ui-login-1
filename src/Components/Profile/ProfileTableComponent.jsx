import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import { Table, Box, Button, Grid, TableBody, TableCell, TableContainer,InputBase  } from '@material-ui/core';

import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';
import { DeleteForever, AddBox, Edit } from '@material-ui/icons';
import FullWidthBanner from '../FullWidthBanner/FullWidthBanner';
import { common } from '../../Utils/Api.env';
import Model from '../Model/ModelComponent';
import { PageLoader } from '../../Layout/Loader';
import SearchIcon from '@material-ui/icons/Search';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'name', numeric: true, disablePadding: true, label: 'Name' },
  { id: 'Description', numeric: true, disablePadding: false, label: 'Description' },
  { id: 'action', numeric: false, label: 'Actions' }
];

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: '#4169e1',
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  return (
    <TableHead>
      <TableRow>
        <StyledTableCell padding="checkbox">
        </StyledTableCell>
        {headCells.map((headCell) => (
          <StyledTableCell
            key={headCell.id}
            align={headCell.numeric ? 'left' : 'right'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};
const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85),
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected, onDelete } = props;
  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
          <Button href="/dashboard/CDP/cdp-connector-profile/profiles/new-profile" aria-label="Add" variant="outlined" color="primary">
            <AddBox />
             Add New profiles
          </Button>
        )}
      {numSelected > 0 && (
        <Tooltip title="Actions">
          <Button aria-label="delete" variant="outlined" color="secondary" onClick={onDelete}>
            <DeleteForever />
            <span> Delete </span>
          </Button>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  
  onDelete: PropTypes.func.isRequired
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'rgba(202, 202, 202, 0.15)',
    '&:hover': {
      backgroundColor: 'rgba(243, 243, 243, 0.8)',
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  }
}));

export default function EnhancedTable(props) {

  const classes = useStyles();
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('calories');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [dense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [dataStatus, getStatus] = useState(false)
  const [rows, getData] = useState(false);  
  const [defaultRows, setDefaultRow] = useState();
  const [isOpen, openModel] = useState();  
  const [filterData, getFilterData] = useState();  
  const allprofilesURL = `${common.profile_url}/?tenant_Id=1&profileId=-1`

  useEffect(() => {
    fetch(allprofilesURL, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }).then(resp => resp.json())
      .then((data) => {        
        Object.keys(data).map((el, index) => {
          getData(data[el]);
          setDefaultRow(data[el]);
          getStatus(true);
          return false;
        })
      });
  }, [allprofilesURL])

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleEdit = (event, id) => {
    const editUrl = `/dashboard/CDP/cdp-connector-profile/profiles/new-profile?edit=${id}`
    props.history.push(editUrl)
  }
   

  const onDeleteHandle = (modelState=true) =>{
    openModel(modelState);
  }
  const deleteProfile = () =>{
     
    const deletedList=[];
    selected.map((item)=>{
    const deleteProfileURL = `${common.profile_url}?profileId=${item}`;
    console.log(deleteProfileURL);
    try {
       fetch(deleteProfileURL, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      }).then(resp => resp.json())
      .then(data => {
        if(data.status === 'Success') {
          
          deletedList.push(item);
         
          if(selected.length === (deletedList.length)){
            window.location.reload(false)
          }
          
        }
      })
    } catch (e) { 
      console.log(e);
    }
    })
    
  }

  const handleFilter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    getFilterData(e.target.value);
    let search = e.target.value.trim().toLowerCase();
    let item = defaultRows.filter((data) => {
      if(search.length <= 0) {
        return defaultRows;
      } else if(data.profileName.toLowerCase().includes(search) || data.profileDescription.toLowerCase().includes(search)) {
        return data;
      }
      return null;
    })
    getData(item);
  }
  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <FullWidthBanner
        title="My Profiles"
        image="../../../assets/images/globle.jpg"
        imageText="Full Banner"
        exceptimage ="../../../assets/images/learnmore.gif"
      />
      {!dataStatus ? <div className="loader-wrapper"><PageLoader /></div>
      : 
      <Box padding={6}>
        <Paper className={classes.paper}>
          <Grid container alignItems="center" justify="space-between">
            <Grid item xs={`${selected.length > 0 ? 12 : ''}`}>
              <EnhancedTableToolbar numSelected={selected.length} onDelete={onDeleteHandle}  />
            </Grid>
          { selected.length <= 0 &&
              <Grid item>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    type="text"
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    value={filterData}
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={handleFilter}
                  />
                 </div>
              </Grid>
            }
          </Grid>
          <TableContainer>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              size={dense ? 'small' : 'medium'}
              aria-label="enhanced table"
            >
              <EnhancedTableHead
                classes={classes}
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
             
                <TableBody>
                  {stableSort(rows, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      const isItemSelected = isSelected(row.profileId);
                      const labelId = `enhanced-table-checkbox-${index}`;
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={row.profileId}
                          selected={isItemSelected}
                        >
                          <TableCell padding="checkbox">
                            <Checkbox
                              checked={isItemSelected}
                              onClick={(event) => handleClick(event, row.profileId)}
                              inputProps={{ 'aria-labelledby': labelId }}
                            />
                          </TableCell>
                          <TableCell component="th" id={labelId} scope="row" padding="none" >
                            {row.profileName}
                          </TableCell>
                          <TableCell align="left">{row.profileDescription}</TableCell>
                          <TableCell align="right">
                            <Button aria-label="edit" variant="outlined" color="primary" onClick={(event) => handleEdit(event, row.profileId)}>
                              <Edit />
                            </Button>
                            
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                      
                    </TableRow>
                  )}
                </TableBody>
            </Table>
            {rows.length <= 0 && 
              <p className="empty-message">There is no connector! Please add new.</p>
            }
          </TableContainer>
          {rows.length > 0 && 
          <TablePagination           
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
          } 
        </Paper>
      </Box>}
      <Model isOpen={isOpen} deleteEntry={deleteProfile}   />
    </div>
  );
}