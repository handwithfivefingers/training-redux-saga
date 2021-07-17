import { withStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TaskItem from '../TaskItem';
import style from './style';
class TaskList extends Component {
  render() {
    const { classes, tasks, status, onClickEdit, OnClickDelete } = this.props;
    return (
      <Grid item md={4} sm={12}>
        <div className={classes.status}>
          <Box mt={1} mb={1}>
            <Typography
              className={classes.title}
              variant="h5"
              component="h3"
              gutterBottom
            >
              {status.label}
            </Typography>
          </Box>
        </div>
        <div className={classes.WrapperListTask}>
          {tasks.map((task) => {
            return (
              <TaskItem
                task={task}
                status={status.label}
                key={task.id}
                onClickEdit={() => onClickEdit(task)}
                OnClickDelete={() => OnClickDelete(task)}
              />
            );
          })}
        </div>
      </Grid>
    );
  }
}
TaskList.propTypes = {
  classes: PropTypes.object,
  tasks: PropTypes.array,
  status: PropTypes.object,
  title: PropTypes.string,
  label: PropTypes.string,
  onClickEdit: PropTypes.func,
};
export default withStyles(style)(TaskList);
