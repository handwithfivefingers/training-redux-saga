import { Typography, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import Carousel from './Carousel';
import style from './style';

class UserContent extends Component {
  render() {
    const { classes, children } = this.props;
    // return <div className={classes.root}>{children}</div>;
    return <>{children}</>;
  }
}

export default withStyles(style)(UserContent);
