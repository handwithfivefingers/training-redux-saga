import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import Dashboard from './../../../components/Dashboard';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import * as UserActions from '../../../actions/user';
import history from './../../../history';
class AdminLayoutRoutes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ReadyFor: false,
    };
  }
  componentDidMount() {
    const { user } = this.props;
    const { location, UserActionCreators } = this.props;
    const { checkUserLogin } = UserActionCreators;
    if (location.pathname === '/') {
      checkUserLogin();
    }
  }

  render() {
    const {
      user,
      component: YourComponent,
      usertoken,
      ...remainProps
    } = this.props;
    // redirect qua login nếu token k hợp lệ
    if (user.authenticate) {
      history.push('/dash-board');
    }
    return (
      <Route
        {...remainProps}
        render={(routeProps) => {
          return (
            <Dashboard {...remainProps}>
              <YourComponent {...routeProps} />
            </Dashboard>
          );
        }}
      />
    );
  }
}
AdminLayoutRoutes.propTypes = {
  path: PropTypes.string,
  exact: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  name: PropTypes.string,
};

const mapStatetoProps = (state) => ({
  user: state.user,
});
const mapDispatchtoProps = (dispatch) => ({
  UserActionCreators: bindActionCreators(UserActions, dispatch),
});
const withConnect = connect(mapStatetoProps, mapDispatchtoProps);

export default compose(withConnect)(AdminLayoutRoutes);
