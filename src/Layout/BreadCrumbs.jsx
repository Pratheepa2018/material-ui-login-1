import React from "react";
import { Breadcrumbs } from '@material-ui/core';
import { Link } from "react-router-dom";
import withBreadcrumbs from "react-router-breadcrumbs-hoc";

const PureBreadcrumbs = ({ breadcrumbs }) => {
    console.log('here', breadcrumbs);
    return (

        <Breadcrumbs>
            {breadcrumbs.map(({ Breadcrumbs, location }, index) => (
                <div key={location.pathname} className='sd'>
                    <Link to={location.pathname || ""}>{location.pathname}</Link>
                </div>
            ))}
        </Breadcrumbs>
    )
};

export default withBreadcrumbs()(PureBreadcrumbs); 