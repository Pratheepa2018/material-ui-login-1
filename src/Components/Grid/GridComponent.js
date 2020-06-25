import React, { Component } from 'react';
import { Grid, Card, CardContent ,Typography, CardActions, Button } from '@material-ui/core/';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import './GridComponent.css';


class GridComponent extends Component {
    render() {
        const {card, gridSize, textAlign}=this.props;
        return (
            <Grid item key={card.id} xs={12} sm={6} md={gridSize ? gridSize : 4} alignItems="center" justify="center">
                            <Card className={`grid_card ${textAlign}`}  >
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
                                    {card.learnMorelink && (
                                <Button
                                        variant="contained"
                                        color="primary"
                                        endIcon={<KeyboardArrowRightIcon>send</KeyboardArrowRightIcon>}
                                        href={card.learnMorelink}
                                    >
                                        Learn More
                                    </Button>
                                    )}
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