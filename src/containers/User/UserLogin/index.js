import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { bindActionCreators, compose } from 'redux';
import * as UserActions from './../../../actions/user';
import style from './style';
import { withRouter } from 'react-router-dom';
class UserLogin extends Component {
  render() {
    let xhtml = null;
    const { user } = this.props;
    if (user !== null && user !== '' && typeof user !== 'undefined') {
      xhtml = <Redirect to="/" />;
    } else {
      xhtml = <Redirect to="/login" />;
    }
    return xhtml;
    // return <div>{this.CheckUserAreLogin}</div>;
  }
}
const mapStateToProps = (state) => ({
  user: state.user.usertoken,
  path: state.path.path,
});
const mapDispatchToProps = (dispatch) => ({
  UserActionCreators: bindActionCreators(UserActions, dispatch),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withStyles(style), withConnect, withRouter)(UserLogin);
