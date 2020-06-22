import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Link, Typography } from '@material-ui/core';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        backgroundColor: '#4169e1'
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing.unit * 8,
        padding: `${theme.spacing.unit * 6}px 0`,
    },
    grow: {
        flexGrow: 1,
    },
});

function Footer(props) {
    const { classes } = props;

    return (
        <footer className={classes.footer}>
            <Paper className={classes.root} elevation={1}>
            <div style={{ display: "flex" }}>
                <Typography >
                    Collabera MarketPlace Platform(TM)  @2020 All right reserved
        </Typography>
        <div className={classes.grow}/>
                <Link href="#" color="inherit">Privacy Policy </Link>
                </div>
            </Paper>
        </footer>
    );
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);