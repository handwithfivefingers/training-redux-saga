import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import style from './style';
import UserHomepage from './../../../components/UserLayout/Homepage';
import { Route } from 'react-router-dom';

class UserLayoutRoutes extends Component {
  render() {
    const { component: YourComponent, path, ...remainProps } = this.props;
    // console.log(YourComponent);
    return (
      <Route
        {...remainProps}
        render={(routeProps) => {
          return (
            <UserHomepage {...remainProps} path={path}>
              <YourComponent {...routeProps} />
            </UserHomepage>
          );
        }}
      />
    );
  }
}

export default withStyles(style)(UserLayoutRoutes);
