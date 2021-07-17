import React, { Component } from 'react';
import { withStyles, Grid, Box, Button, Modal } from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';
import style from './style';
import renderTextField from '../../../components/FormHelper/TextField';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import history from './../../../history';
import * as userActions from './../../../actions/user';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
  }
  onSubmitForm = (data) => {
    const { userActionCreators } = this.props;
    const { Login } = userActionCreators;
    const { email, password } = data;
    Login(email, password);
  };
  render() {
    console.log(history);
    const { classes, handleSubmit } = this.props;
    const { open } = this.state;
    return (
      <div
        className={classes.wrapper}
        style={{ background: 'rgba(0,0,0,0.8)' }}
      >
        <Modal open={open} onClose={this.Closemodal}>
          <Grid container className={classes.modal}>
            <Grid item md={12} className={classes.header}>
              <span className={classes.title}>Đăng nhập</span>
            </Grid>
            <Grid item md={12} className={classes.content}>
              <form
                className={classes.content}
                onSubmit={handleSubmit(this.onSubmitForm)}
              >
                <Grid container spacing={2}>
                  <Grid item md={12}>
                    <Field
                      id="title"
                      label="Email đăng nhập"
                      className={classes.TextField}
                      component={renderTextField}
                      name="email"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={12}>
                    <Field
                      id="description"
                      label="Mật khẩu"
                      type="password"
                      rowsMax={4}
                      className={classes.TextField}
                      component={renderTextField}
                      name="password"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={12}>
                    <Box display="flex" flexDirection="row-reverse">
                      <Box ml={1}>
                        <Button
                          variant="contained"
                          color="primary"
                          className={classes.button}
                          mr={2}
                          type="submit"
                        >
                          Đăng nhập
                        </Button>
                      </Box>
                      <Link className={classes.button} to="/signup">
                        <Button
                          variant="contained"
                          color="primary"
                          className={classes.button}
                          mr={2}
                        >
                          Đăng kí
                        </Button>
                      </Link>
                    </Box>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Modal>
      </div>
    );
  }
}
const FORM_NAME = 'LOGIN_FORM';
const withReduxForm = reduxForm({
  form: FORM_NAME,
});
const mapStateToProps = null;
const mapDispatchToProps = (dispatch) => ({
  userActionCreators: bindActionCreators(userActions, dispatch),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(style), withConnect, withReduxForm)(Login);
