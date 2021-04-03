import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import style from './style';

class TaskForm extends Component {
  render() {
    const { open, classes, OnClose } = this.props;
    return (
      <Dialog open={open} onClose={OnClose} aria-labelledby="form-dialog-title" className={classes.Dialog}>
        <DialogTitle id="form-dialog-title">Thêm Mới Công Việc</DialogTitle>
        <DialogContent>
          <TextField required id="standard-required" label="Required" defaultValue="Hello World" />
          <TextField
            id="standard-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={OnClose} color="primary">
            Cancel
          </Button>
          <Button onClick={OnClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
TaskForm.propTypes = {
  open: PropTypes.object,
  classes: PropTypes.object,
  OnClose: PropTypes.object,
};
export default withStyles(style)(TaskForm);
