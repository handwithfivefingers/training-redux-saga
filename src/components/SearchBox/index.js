import { TextField, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import style from './style';
class SearchBox extends Component {
  render() {
    const { classes, handleChange } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          autoComplete="off"
          label="Search field"
          type="search"
          margin="normal"
          onChange={handleChange}
          className={classes.TextField}
        />
      </form>
    );
  }
}
SearchBox.propTypes = {
  classes: PropTypes.object,
  handleChange: PropTypes.func,
};
export default withStyles(style)(SearchBox);
