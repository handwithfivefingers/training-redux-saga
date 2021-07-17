import { withStyles, MenuItem } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/button';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import renderTextField from '../../components/FormHelper/TextField';
import renderSelectField from '../../components/FormHelper/Select';
import * as ModalActions from './../../actions/modal';
import * as TaskActions from './../../actions/task';
import style from './style';
import validate from './validate';
import { Redirect } from 'react-router';
class TaskForm extends Component {
  onSubmitForm = (data) => {
    const { TaskActionCreator, taskEditting } = this.props;
    const { addTask, updateTask } = TaskActionCreator;
    const { _id, title, description, status } = data;
    const token = localStorage.getItem('jwt');
    // if (token && typeof token !== 'undefined') {
    // } else {
    //   <Redirect to="/login" />;
    // }
    if (taskEditting && taskEditting) {
      updateTask(title, description, status, token);
    } else {
      addTask(title, description, token);
    }
  };
  required = (value) => {
    let error = 'Vui lòng nhập tiêu đề';
    if (value !== null && typeof value !== 'undefined' && value.trim() !== '') {
      error = null;
    }
    return error;
  };
  renderStatusSelection() {
    let xhtml = null;
    const { taskEditting, classes } = this.props;
    if (taskEditting && taskEditting._id) {
      xhtml = (
        <Grid item md={12}>
          <Field
            id="status"
            label="Trạng thái"
            className={(classes.select, classes.TextField)}
            component={renderSelectField}
            name="status"
          >
            <MenuItem className={(classes.select, classes.TextField)} value={0}>
              READY
            </MenuItem>
            <MenuItem className={(classes.select, classes.TextField)} value={1}>
              IN PROGRESS
            </MenuItem>
            <MenuItem className={(classes.select, classes.TextField)} value={2}>
              COMPLETE
            </MenuItem>
          </Field>
        </Grid>
      );
    }
    return xhtml;
  }
  render() {
    const { taskEditting } = this.props;
    const {
      classes,
      handleSubmit,
      ModalActionsCreator,
      invalid,
      submitting,
    } = this.props;
    const { hideModal } = ModalActionsCreator;
    return (
      <form
        className={classes.content}
        onSubmit={handleSubmit(this.onSubmitForm)}
      >
        <Grid container spacing={2}>
          <Grid item md={12}>
            <Field
              id="title"
              label="Tiêu đề"
              className={classes.TextField}
              component={renderTextField}
              name="title"
              value={taskEditting ? taskEditting.title : ''}
            />
          </Grid>
          <Grid item md={12}>
            <Field
              id="description"
              label="Mô tả"
              multiline
              rowsMax={4}
              className={classes.TextField}
              component={renderTextField}
              name="description"
              value={taskEditting ? taskEditting.description : ''}
            />
          </Grid>
          {this.renderStatusSelection()}
          <Grid item md={12}>
            <Box display="flex" flexDirection="row-reverse">
              <Box ml={1}>
                <Button
                  disabled={invalid || submitting}
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  mr={2}
                  type="submit"
                >
                  Lưu Lại
                </Button>
              </Box>
              <Button
                variant="contained"
                className={classes.button}
                mr={2}
                onClick={hideModal}
              >
                Hủy
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    );
  }
}
TaskForm.propTypes = {
  classes: PropTypes.object,
  ModalActionsCreator: PropTypes.shape({
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
    changeModalTitle: PropTypes.func,
    changeModalContent: PropTypes.func,
  }),
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func,
  TaskActionCreator: PropTypes.shape({
    addTask: PropTypes.func,
  }),
  taskEditting: PropTypes.object,
};
const FORM_NAME = 'TASK_MANAGEMENT';
const withReduxForm = reduxForm({
  form: FORM_NAME,
  validate,
});
const mapDispatchToProps = (dispatch) => ({
  ModalActionsCreator: bindActionCreators(ModalActions, dispatch),
  TaskActionCreator: bindActionCreators(TaskActions, dispatch),
});
const mapStateToProps = (state) => {
  return {
    taskEditting: state.task.taskEditting,
    initialValues: {
      title: state.task.taskEditting ? state.task.taskEditting.title : '',
      description: state.task.taskEditting
        ? state.task.taskEditting.description
        : '',
      status: state.task.taskEditting ? state.task.taskEditting.status : '',
    },
  };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withStyles(style), withConnect, withReduxForm)(TaskForm);
