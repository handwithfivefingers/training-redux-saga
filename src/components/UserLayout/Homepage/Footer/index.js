import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import { Divider, Grid, Typography, withStyles } from '@material-ui/core';
import style from './style';
class UserFooter extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container alignItems="center" className={classes.root}>
          <Typography className={classes.left}>Welcome Footer</Typography>
          <Divider orientation="vertical" flexItem />
          <Typography className={classes.right}>Design by side</Typography>
        </Grid>
      </div>
    );
  }
}

export default withStyles(style)(UserFooter);
