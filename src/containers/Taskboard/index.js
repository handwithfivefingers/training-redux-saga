import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import TaskForm from './../TaskForm';
import TaskList from '../../components/TaskList';
import { STATUSUS } from '../../contants';
import * as modalActions from './../../actions/modal';
import * as taskActions from './../../actions/task';
import SearchBox from './../../components/SearchBox';
import style from './style';

class Taskboard extends Component {
  componentDidMount() {
    const { taskActionsCreator } = this.props;
    const { fetchlistTask } = taskActionsCreator;
    fetchlistTask();
  }
  handleOpenForm = () => {
    const { modalActionCreator, taskActionsCreator } = this.props;
    const { TaskEditting } = taskActionsCreator;
    TaskEditting(null);
    const {
      showModal,
      changeModalTitle,
      changeModalContent,
    } = modalActionCreator;
    showModal();
    changeModalTitle('Add New Task');
    changeModalContent(<TaskForm />);
  };
  handleEdittask = (task) => {
    const { taskActionsCreator, modalActionCreator } = this.props;
    const { TaskEditting } = taskActionsCreator;
    TaskEditting(task);
    const {
      showModal,
      changeModalTitle,
      changeModalContent,
    } = modalActionCreator;
    showModal();
    changeModalTitle('Chỉnh sửa công việc');
    changeModalContent(<TaskForm />);
  };
  handleDeleteTask(task) {
    const { id } = task;
    const { taskActionsCreator } = this.props;
    const { OnDeleteTask } = taskActionsCreator;
    OnDeleteTask(id);
  }
  ShowModalDeleteTask = (task) => {
    const { taskActionsCreator, modalActionCreator, classes } = this.props;
    const {
      showModal,
      changeModalTitle,
      changeModalContent,
      hideModal,
    } = modalActionCreator;
    showModal();
    changeModalTitle('Delete Task');
    changeModalContent(
      <div className={classes.modalDelete}>
        <div className={classes.modalDeleteConfirm}>
          Are you sure for delete{' '}
          <span className={classes.modalDeleteConfirmTitle}>
            {'"'}
            {task.title}
            {'"'}
          </span>
        </div>
        <Box display="flex" flexDirection="row-reverse" m={2}>
          <Box display="flex" mt={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.handleDeleteTask(task)}
            >
              Accept
            </Button>
          </Box>
          <Box display="flex" mt={2}>
            <Button variant="contained" onClick={hideModal}>
              Cancel
            </Button>
          </Box>
        </Box>
      </div>,
    );
  };
  OnRenderTaskBoard = () => {
    const { Listtask } = this.props;
    let html = null;
    html = (
      <Grid container>
        {STATUSUS.map((status) => {
          const taskfiler = Listtask.filter(
            (task) => task.status === status.value,
          );
          return (
            // Function() => { return .... }
            <TaskList
              tasks={taskfiler}
              status={status}
              key={status.value}
              onClickEdit={this.handleEdittask}
              OnClickDelete={this.ShowModalDeleteTask}
            />
          );
        })}
      </Grid>
    );
    return html;
  };
  loadData = () => {
    const { taskActionsCreator } = this.props;
    const { fetchlistTask } = taskActionsCreator;
    fetchlistTask();
  };
  handleFilter = (e) => {
    const { value } = e.target;
    const { taskActionsCreator } = this.props;
    const { filterTask } = taskActionsCreator;
    filterTask(value);
  };
  RenderSearchBox() {
    let xhtml = null;
    xhtml = <SearchBox handleChange={this.handleFilter} />;
    return xhtml;
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.Taskboard}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.handleOpenForm}
        >
          <AddIcon /> Thêm mới công việc
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.loadData}
          style={{
            marginLeft: 10,
          }}
        >
          <AddIcon /> Load Data
        </Button>
        {this.RenderSearchBox()}
        {this.OnRenderTaskBoard()}
      </div>
    );
  }
}
Taskboard.propTypes = {
  classes: PropTypes.object,
  taskActionsCreator: PropTypes.shape({
    fetchlistTask: PropTypes.func,
    filterTask: PropTypes.func,
  }),
  modalActionCreator: PropTypes.shape({
    hideModal: PropTypes.func,
    showModal: PropTypes.func,
    changeModalTitle: PropTypes.func,
    changeModalContent: PropTypes.func,
  }),
  Listtask: PropTypes.array,
  OnDeleteTask: PropTypes.func,
  TaskEditting: PropTypes.object,
  // handleEdittask: PropTypes.func,
};
const mapStatetoProps = (state) => {
  return {
    Listtask: state.task.listTask,
  };
};
const mapDispatchtoProps = (dispatch) => {
  return {
    // taskActionsCreator bên trái là biến props, taskActions bên phải là action
    taskActionsCreator: bindActionCreators(taskActions, dispatch),
    modalActionCreator: bindActionCreators(modalActions, dispatch),
  };
};
const withConnect = connect(mapStatetoProps, mapDispatchtoProps);

export default compose(withStyles(style), withConnect)(Taskboard);
