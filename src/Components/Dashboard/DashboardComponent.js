import React, { Component } from 'react';
import './DashboardComponent.css';
import { Grid } from '@material-ui/core/';
import FullWidthBanner from '../FullWidthBanner/FullWidthBanner'
import GridComponent from '../Grid/GridComponent'

const cards = [
    { id: 1, title: 'DevOps Automation', discription: 'discription not available', image: '../assets/images/img1.jpg', learnMorelink: '', letsGolink: '/subscribedservices' },
    { id: 2, title: 'System Integration', discription: 'discription not available', image: '../assets/images/img2.jpg', learnMorelink: '', letsGolink: '' },
    { id: 3, title: 'Information Management', discription: 'discription not available', image: '../assets/images/img3.jpg', learnMorelink: '', letsGolink: '' },
    { id: 4, title: 'AI Automation', discription: 'discription not available', image: '../assets/images/img4.jpg', learnMorelink: '', letsGolink: '' },
    { id: 1, title: 'Report Factory Enablement', discription: 'discription not available', image: '../assets/images/img5.jpg', learnMorelink: '', letsGolink: '' },
    { id: 2, title: 'Healthcare Life Sciences', discription: 'discription not available', image: '../assets/images/img7.jpg', learnMorelink: '', letsGolink: '' },
    { id: 3, title: 'Payments Processing', discription: 'discription not available', image: '../assets/images/img6.jpg', learnMorelink: '', letsGolink: '' },
    { id: 1, title: 'Retail & SCM', discription: 'discription not available', image: '../assets/images/img8.jpg', learnMorelink: '', letsGolink: '' },
    
]
class DashboardComponent extends Component {
    render() {
        return (
            <div>
                <FullWidthBanner
                    image="../assets/images/globle.jpg"
                    imageText="alt text" />
                <Grid className='dash_box'>
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <GridComponent card={card} gridSize={3} textAlign='center' />
                        ))}
                    </Grid>
                </Grid>
            </div>
        );
    }
}


export default DashboardComponent;