import React from 'react';
import Box from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import '../../Styles/banner.scss';

import Breadcrumbs from '../../Layout/BreadCrumbs';

class FullWidthBanner extends React.Component {

  render() {
    const { image, imageText, title } = this.props; //description, linkText
    const bannerStyle = {
      backgroundImage: `url(${image})`
    }
    return (
      <div>
        <Box className='banner_body' style={bannerStyle} p={{ xs: 4, sm: 6, md: 8 }}>
          {<img style={{ display: 'none' }} src={image} alt={imageText} />}
          <Typography component="h1" variant="h2" className="main-head" align="center">{title}</Typography>
        </Box>
        <div className="breadcrumbs-wrapper">
          <Breadcrumbs />
        </div>
      </div>
    );
  }
}

export default FullWidthBanner;
