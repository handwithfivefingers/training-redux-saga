import React, { Component } from 'react';
import { withStyles, Grid, Box, Button, Modal } from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';
import style from './style';
import renderTextField from '../../../components/FormHelper/TextField';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from './../../../actions/user';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import history from './../../../history';
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
  }
  onSubmitForm = (data) => {
    const { userActionCreator } = this.props;
    const { RegisterAction } = userActionCreator;
    RegisterAction(data);
  };
  BackLogin = () => {
    history.goBack();
  };
  render() {
    const { classes, handleSubmit } = this.props;
    const { open } = this.state;
    return (
      <div className={classes.wrapper}>
        <Modal open={open} onClose={this.Closemodal}>
          <Grid container className={classes.modal}>
            <Grid item md={12} className={classes.header}>
              <span className={classes.title}>Đăng kí</span>
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
                      label="Tên đăng kí"
                      type="text"
                      className={classes.TextField}
                      component={renderTextField}
                      name="name"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={12}>
                    <Field
                      id="title"
                      label="email"
                      type="email"
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
                          Đăng kí
                        </Button>
                      </Box>
                      <Box ml={1}>
                        <IconButton
                          variant="contained"
                          color="primary"
                          className={classes.iconbutton}
                          mr={2}
                          onClick={this.BackLogin}
                        >
                          <ArrowBackIcon />
                        </IconButton>
                      </Box>
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
const FORM_NAME = 'SIGNUP_FORM';
const withReduxForm = reduxForm({
  form: FORM_NAME,
});
const mapStateToProps = null;
const mapDispatchToProps = (dispatch) => ({
  userActionCreator: bindActionCreators(userActions, dispatch),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(style), withConnect, withReduxForm)(Signup);
