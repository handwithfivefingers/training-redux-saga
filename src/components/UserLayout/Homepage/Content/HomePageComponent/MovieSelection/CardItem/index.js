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
import React, { Component } from 'react';
import style from './style';
class MovieSelection extends Component {
  render() {
    const { classes, movie } = this.props;
    return (
      <Grid item md={3} className={classes.root}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={`${movie.image}`}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {movie.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {movie.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Book now
            </Button>
            <Button size="small" color="primary">
              Details
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

export default withStyles(style)(MovieSelection);
