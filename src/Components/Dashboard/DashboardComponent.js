import React, { Component } from 'react';
import './DashboardComponent.css';
import { Grid } from '@material-ui/core/';
import FullWidthBanner from '../FullWidthBanner/FullWidthBanner'
import GridComponent from '../Grid/GridComponent'

const cards = [
    { id: 1, title: 'Collabera Information Platform(CIP)', discription: 'discription not available', image: 'https://www.m-files.com/blog/wp-content/uploads/2018/05/Img-IMMovingToTheCloudAndSaaS-600x300.jpg', learnMorelink: '#', letsGolink: '' },
    { id: 2, title: 'Collabera DevOps Platform(CDP)', discription: 'discription not available', image: 'https://quantummile.com/wp-content/uploads/2018/03/DevOps-FAQ-1280x720-600x300.jpg', learnMorelink: '#', letsGolink: './collaberadevopsplatform' },
    { id: 3, title: 'Collabera Connectors MarketPlace(CCM)', discription: 'discription not available', image: 'https://www.mediamath.com/blog/wp-content/uploads/2017/05/HitTheTarget-600x300.png', learnMorelink: '#', letsGolink: '' },
    { id: 4, title: 'Collabera Cloud Accelerators(CCA)', discription: 'discription not available', image: 'https://www.torontointernetcity.com/wp-content/uploads/2018/09/cloud_computing--600x300.jpg', learnMorelink: '#', letsGolink: '' },
]

class DashboardComponent extends Component {
    render() {
        return (
            <div>
                <FullWidthBanner
                    title=" Subscribed Services"
                    description="description"
                    linkText="Learn more"
                    image="https://www.bpmthread.com/wp-content/uploads/2017/11/business-banner-4-1200x300.jpg"
                    imageText="alt text" />
                <Grid className='dash_box'>
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <GridComponent card={card} />
                        ))}
                    </Grid>
                </Grid>
            </div>
        );
    }
}


export default DashboardComponent;