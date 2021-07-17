import React, { Component } from 'react';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  withStyles,
} from '@material-ui/core';
import style from './style';
import iphoneimage from '../../assets/images/iphoneimg.jpg';
class Product extends Component {
  render() {
    const { item, classes } = this.props;
    return (
      <Grid item xs={4}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={iphoneimage}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {item.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.des}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Grid md={8}>
              <Button
                size="small"
                color="primary"
              >
                Add to cart
              </Button>
              <Button size="small" color="primary">
                Quick Buy
              </Button>
            </Grid>
            <Grid md={4}>
              <Typography variant="body1" color="textPrimary" component="h5">
                {item.price} $
              </Typography>
            </Grid>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

export default withStyles(style)(Product);
