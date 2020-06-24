import React from "react";
import { Breadcrumbs } from '@material-ui/core';
import { Link } from "react-router-dom";
import withBreadcrumbs from "react-router-breadcrumbs-hoc";

const PureBreadcrumbs = ({ breadcrumbs }) => {
    console.log('here', breadcrumbs);
    return (

        <Breadcrumbs>
            {breadcrumbs.map(({ breadcrumb, match }, index) => (
                <div key={match.url} className='sd'>
                    <Link to={match.url || ""}>{breadcrumb }</Link>
                </div>
            ))}
        </Breadcrumbs>
    )
};

export default withBreadcrumbs()(PureBreadcrumbs); 