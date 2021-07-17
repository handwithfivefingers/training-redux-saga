import { withStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { toastError } from '../../helper/toastHelper';
import * as TaskActions from './../../actions/task';
import style from './style';
class TaskItem extends Component {
  render() {
    const { task, classes, status, onClickEdit, OnClickDelete } = this.props;
    const { id, title, description } = task;
    return (
      <Card key={id} className={classes.card}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={8}>
              <Typography
                className={classes.title}
                variant="h5"
                component="h2"
                gutterBottom
              >
                {title}
              </Typography>
            </Grid>
            <Grid item md={4}>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {status}
              </Typography>
            </Grid>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {description}
            </Typography>
          </Grid>
        </CardContent>
        <CardActions className={classes.cardAction}>
          <Fab color="primary" size="small" onClick={onClickEdit}>
            <EditIcon />
          </Fab>
          <Fab color="secondary" size="small" onClick={OnClickDelete}>
            <DeleteIcon />
          </Fab>
        </CardActions>
      </Card>
    );
  }
}
TaskItem.propTypes = {
  classes: PropTypes.object,
  status: PropTypes.string,
  task: PropTypes.object,
  id: PropTypes.number,
  description: PropTypes.string,
  title: PropTypes.string,
  onClickEdit: PropTypes.func,
  OnClickDelete: PropTypes.func,
};
const mapStateToProps = null;
const mapDispatchToProps = null;
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(style), withConnect)(TaskItem);
