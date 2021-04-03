import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import style from './style';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
class TaskItem extends Component {
  render() {
    const { task, classes, status } = this.props;
    const { id, name, des } = task;
    return (
      <Card key={id} className={classes.card}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={8}>
              <Typography
                className={classes.title}
                variant="h5"
                component="h2"
                gutterBottom
              >
                {name}
              </Typography>
            </Grid>
            <Grid item md={4}>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {status}
              </Typography>
            </Grid>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {des}
            </Typography>
          </Grid>
        </CardContent>
        <CardActions className={classes.cardAction}>
          <Fab color="primary" size="small">
            <EditIcon fontSize="12" />
          </Fab>
          <Fab color="secondary" size="small">
            <DeleteIcon fontSize="12" />
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(style)(TaskItem);
