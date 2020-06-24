import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Paper, Checkbox, Toolbar } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';

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

function createData(name, Description) {
    return { name, Description };
}

const rows = [
    createData('Profile1', 'CONNECTOR WORLD TO MYSQL DATABASE'),
    createData('Profile2', 'CONNECTOR SELECTED FOR MSSQL'),
    createData('Profile3', 'CONNECTOR WITH MONGO AND NODEJS'),
    createData('Profile4', 'CONNECTOR FOR AZURE DEVOPS'),
    createData('Profile5', 'CONNECTOR TARGET FOR AMAZON WEBSERVICES'),
];

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
    },
    paper: {
        width: '80%',
        margin: theme.spacing(4),
        marginTop: theme.spacing(4),
    },
    table: {
        minWidth: 750,
    },
}));

export default function CustomizedTables() {
    const classes = useStyles();

    return (

        <TableContainer component={Paper} className={classes.paper} >
            <Toolbar>
                <AddBoxIcon color="primary" fontSize="large"  />
                <DeleteForeverIcon color="primary" fontSize="large" />
            </Toolbar>
            <Table className={classes.table} aria-label="customized table">

                <TableHead>
                    <TableRow>
                        <TableCell padding="checkbox">
                            <Checkbox

                            />
                        </TableCell>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell align="right">Description</StyledTableCell>
                        <StyledTableCell align="right">Actions</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (

                        <StyledTableRow key={row.name}>
                            <TableCell padding="checkbox">
                                <Checkbox
                                />
                            </TableCell>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.Description}</StyledTableCell>
                            <TableCell padding="checkbox">
                            <EditIcon color="primary" />
                            <DeleteForeverIcon color="primary" />
                            </TableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}