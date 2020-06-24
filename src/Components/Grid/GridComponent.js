import React, { Component } from 'react';
import { Grid, Card, CardContent ,Typography, CardActions, Button } from '@material-ui/core/';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import './GridComponent.css';


class GridComponent extends Component {
    render() {
        const {card}=this.props;
        return (
            <Grid item key={card.id} xs={12} sm={6} md={4}>
                            <Card className='grid_card'>
                                <img src={card.image} alt={card.imageText} className='grid_img' />
                                <CardContent className='grid_content'>
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
                                        href={card.letsGolink}
                                    >
                                        Learn More
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className='right_btn'
                                        href={card.letsGolink}
                                        endIcon={<KeyboardArrowRightIcon>Do Automation</KeyboardArrowRightIcon>}
                                    >
                                        Do Automation
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                  
        );
    }
}

export default GridComponent;