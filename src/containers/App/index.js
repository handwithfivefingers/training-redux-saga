import { withStyles } from '@material-ui/core';
import style from './style/style.js';
import React, { Component } from 'react';
import Taskboard from './../Taskboard';

class App extends Component {
  render() {
    console.log('Props:', this.props);
    const { classes } = this.props;
    return (
      <div container className={classes.box}>
        <Taskboard />
      </div>
    );
  }
}
export default withStyles(style)(App);
