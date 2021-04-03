import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import style from './style';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TaskItem from '../TaskItem';
class TaskList extends Component {
  render() {
    const { classes, tasks, status } = this.props;
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
          { tasks.map((task) => {
            return <TaskItem task={task} status={status.label} key={task.id} />;
          }) }
        </div>
      </Grid>
    );
  }
}

export default withStyles(style)(TaskList);
