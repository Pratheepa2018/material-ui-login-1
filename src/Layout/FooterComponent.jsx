import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Link, Typography, Divider } from '@material-ui/core';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        backgroundColor: '#042380',
        color: 'white',
        marginTop: '20px',
    },
 
});

function Footer(props) {
    const { classes } = props;

    return (
        <footer>
            <Paper className={classes.root} elevation={1}>
                <div style={{ display: "flex" }}>
                    <Typography >
                        Collabera MarketPlace Platform(TM)
                    </Typography>
                    <Divider variant="middle" orientation="vertical" flexItem style={{ backgroundColor: "white" }} />
                    <Typography >
                        All right reserved
                    </Typography>
                    <Divider variant="middle" orientation="vertical" flexItem style={{ backgroundColor: "white" }} />
                    <Link href="#" color={"inherit"}>Privacy & Legal </Link>
                    <Divider variant="middle" orientation="vertical" flexItem style={{ backgroundColor: "white" }} />
                    <Link href="#" color={"inherit"}>Onboarding. Sell. Service. Markets. Success </Link>
                </div>

            </Paper>
        </footer>
    );
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);