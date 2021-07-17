import React, { Component } from 'react';
import {
  Breadcrumbs,
  Grid,
  Link,
  Typography,
  withStyles,
} from '@material-ui/core';
import style from './style';
import PropTypes from 'prop-types';
import Header from './Header';
import Sidebar from './Sidebar';
class Dashboard extends Component {
  render() {
    const { children, classes, name } = this.props;
    return (
      <div className={classes.dashboard}>
        <Header name={name} />
        <div className={classes.wrapper}>
          <Grid container>
            <Grid item md={2} className={classes.Sidebar}>
              <Sidebar />
            </Grid>
            <Grid item md={10} className={classes.Content}>
              <Grid item className={classes.item} md={12}>
                <Breadcrumbs aria-label="breadcrumb" className={classes.Breadcrumbs}>
                  <Link color="inherit" href="/">
                    Home
                  </Link>
                  <Typography color="textPrimary">{name}</Typography>
                </Breadcrumbs>
              </Grid>
              <div className={classes.wrapperContent}>{children}</div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  children: PropTypes.object,
  classes: PropTypes.object,
  name: PropTypes.string,
};
export default withStyles(style)(Dashboard);
