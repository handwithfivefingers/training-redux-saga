import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/button';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TaskForm from '../../components/TaskForm';
import TaskList from '../../components/TaskList';
import { STATUSUS } from '../../contants';
import style from './style';

const Liststask = [
  {
    id: 1,
    name: ' Read book',
    des: ' Read Material UI',
    status: 0,
  },
  {
    id: 2,
    name: ' Learn ReactJs',
    des: ' Read Material UI',
    status: 2,
  },
  {
    id: 3,
    name: ' Play POE ',
    des: ' Read Material UI',
    status: 1,
  },
];

class Taskboard extends Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleOpenForm = () => {
    this.setState({
      open: true,
    });
  };
  OnRenderTaskBoard = () => {
    // const { classes } = this.props;
    let html = null;
    html = (
      <Grid container spacing={3}>
        {STATUSUS.map((status) => {
          const taskfiler = Liststask.filter(
            (task) => task.status === status.value,
          );
          return (
            // Function() => { return .... }
            <TaskList tasks={taskfiler} status={status} key={status.value} />
          );
        })}
      </Grid>
    );
    return html;
  };
  RenderForm() {
    const { open } = this.state;
    let xhtml = null;
    xhtml = <TaskForm open={open} OnClose={this.handleClose} />;
    return xhtml;
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.Taskboard}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.handleOpenForm}
        >
          <AddIcon /> Thêm mới công việc
        </Button>
        {this.OnRenderTaskBoard()}
        {this.RenderForm()}
      </Grid>
    );
  }
}
Taskboard.propTypes = {
  classes: PropTypes.object,
};
export default withStyles(style)(Taskboard);
