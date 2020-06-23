import React, { Component } from 'react';
import './DashboardComponent.css';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { Grid, Container, Card, CardContent,Icon ,Typography, CardActions, Button, Box } from '@material-ui/core/';
import FullWidthBanner from '../FullWidthBanner/FullWidthBanner'

const cards = [
    {id:1, title: 'Collabera Information Platform(CIP)', discription: 'discription not available', image:'https://www.m-files.com/blog/wp-content/uploads/2018/05/Img-IMMovingToTheCloudAndSaaS-600x300.jpg', learnMorelink: '#', letsGolink:''},
    {id:2, title: 'Collabera DevOps Platform(CDP)', discription: 'discription not available', image:'https://quantummile.com/wp-content/uploads/2018/03/DevOps-FAQ-1280x720-600x300.jpg', learnMorelink: '#', letsGolink:''},
    {id:3, title: 'Collabera Connectors MarketPlace(CCM)', discription: 'discription not available', image:'https://www.mediamath.com/blog/wp-content/uploads/2017/05/HitTheTarget-600x300.png', learnMorelink: '#', letsGolink:''},
    {id:4, title: 'Collabera Cloud Accelerators(CCA)', discription: 'discription not available', image:'https://www.torontointernetcity.com/wp-content/uploads/2018/09/cloud_computing--600x300.jpg', learnMorelink: '#', letsGolink:''},
]

 class DashboardComponent extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div>
                <FullWidthBanner 
                 title=" Subscribed Services" 
                 description="description"
                 linkText="Learn more"
                 image="https://www.bpmthread.com/wp-content/uploads/2017/11/business-banner-4-1200x300.jpg"
                 imageText="alt text" />
           
            <Container className='dash_box' maxWidth="lg">
                 
                  
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card.id} xs={12} sm={6} md={4}>
                            <Card className='desh_card'>
                                <img src={card.image} alt={card.imageText} className='dash_img' />
                                <CardContent className='dash_content'>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {card.title}
                                </Typography>
                                    <Typography>
                                       {card.discription}
                                </Typography>
                                </CardContent>
                                <CardActions>
                                <Button
                                        variant="contained"
                                        color="primary"
                                        endIcon={<KeyboardArrowRightIcon>send</KeyboardArrowRightIcon>}
                                    >
                                        Learn More
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className='right_btn'
                                        endIcon={<KeyboardArrowRightIcon>Do Automation</KeyboardArrowRightIcon>}
                                    >
                                        Do Automation
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            </div>
        );
    }
}

 
export default DashboardComponent;