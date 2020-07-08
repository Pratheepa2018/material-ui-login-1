import React, { Component } from 'react';
import FullWidthBanner from '../FullWidthBanner/FullWidthBanner';
import { Box, Grid, Card, CardContent, Typography, CardActions, Button } from '@material-ui/core/';
import { PageLoader } from '../../Layout/Loader';
import '../../Styles/connectorsType.scss';

export default class ConnectorType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      fetchStatus: false
    }
  }
  handelRedirection = (id) => {
    sessionStorage.setItem('connector-id', id);
    this.props.history.push('/dashboard/CDP/cdp-connector-profile/connectors/new-connector');
  }
  componentDidMount() {
    const connectorAPI = 'https://cdpprofile.azurewebsites.net/profile/GetMasterConnectors';
    fetch(connectorAPI, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }).then(data => data.json())
      .then(resp => {
        this.setState({data: resp.masterConnectors, fetchStatus: true});
      })
  }
  render() {
    const { data, fetchStatus} = this.state;
    return (
      <div className="connector-type">
        <FullWidthBanner 
          title="Connector Type"
          image="../../../../assets/images/globle.jpg"
          imageText="Full Banner"
          exceptimage ="../../../../assets/images/learnmore.gif"
        />
        <Box className={`connector-type-wrapper ${fetchStatus ? 'load-wrapper' : ''}`}>
          {fetchStatus ? 
            <Grid container spacing={4} className="ct-coneciner">
              {data.map((card) => (
                <Grid item key={card.id} xs={12} sm={6} md={4} alignItems="center" justify="center" className="dashboard-grid-container">
                  <Card className={`grid_card left`}  >
                    <figure className={`box-figure ${card.image ? '' : 'no-image'}`}>
                      {card.image &&
                        <img src={card.image} alt={card.imageText} className='grid_img' />
                      }
                    </figure>
                    <CardContent className='grid_content'>
                      <Typography gutterBottom variant="h5" component="h2">
                        {card.masterConnector_name}
                      </Typography>
                      <Typography>
                        {card.masterConnector_description}
                      </Typography>
                    </CardContent>
                    <CardActions className="ct-grid-action center">
                      <Button
                        type="text"
                        variant="contained"
                        color="primary"
                        className='right_btn'
                        onClick={() => this.handelRedirection(card.masterConnectorId)}
                        disabled={!card.masterConnectorId}
                      >
                        Go
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          :
            <PageLoader />
          }
        </Box>
      </div>
    )
  }
}