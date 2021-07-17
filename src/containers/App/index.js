import { withStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { Router, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import theme from '../../commons/Theme/index';
import CommonModal from '../../components/CommonModal';
import GlobalLoading from '../../components/GlobalLoading';
import configureStore from '../../redux/configureStore';

import AdminLayoutRoutes from './../../commons/Layout/AdminLayoutRoutes';
import { ADMIN_ROUTES } from './../../contants/index';
import history from './../../history';
import style from './style';

const store = configureStore();
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
    };
  }

  renderAdminRoutes = () => {
    let xhtml = null;
    xhtml = ADMIN_ROUTES.map((route) => {
      return (
        <AdminLayoutRoutes
          key={route.path}
          path={route.path}
          component={route.component}
          exact={route.exact}
          name={route.name}
        />
      );
    });
    return xhtml;
  };
  // renderUserRoutes = () => {
  //   let xhtml = null;
  //   console.log('userrouter');
  //   xhtml = USER_ROUTES.map((route) => {
  //     return (
  //       <UserLayoutRoutes
  //         key={route.path}
  //         path={route.path}
  //         component={route.component}
  //         exact={route.exact}
  //         name={route.name}
  //       />
  //     );
  //   });
  //   return xhtml;
  // };
  render() {
    return (
      <Provider store={store}>
        <CssBaseline />
        <Router history={history}>
          <ThemeProvider theme={theme}>
            {/* <UserLogin /> */}
            <ToastContainer />
            <GlobalLoading />
            <CommonModal />
            <Switch>
              {this.renderAdminRoutes()}
              {/* {this.checkAuth()
                ? this.renderAdminRoutes()
                : this.renderUserRoutes()} */}
              {/* {this.renderAdminRoutes()}
              {this.renderUserRoutes()} */}
            </Switch>
          </ThemeProvider>
        </Router>
      </Provider>
    );
  }
}

export default withStyles(style)(App);
