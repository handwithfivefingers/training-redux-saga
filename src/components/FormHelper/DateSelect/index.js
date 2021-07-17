import React from 'react';
import {
  FormControl,
  Select,
  InputLabel,
  FormHelperText,
  withStyles,
  TextField,
} from '@material-ui/core';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import PropTypes from 'prop-types';
import style from './style';
import 'bootstrap/dist/css/bootstrap.min.css';
const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return null;
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>;
  }
};
renderFromHelper.propTypes = {
  touched: PropTypes.bool,
  error: PropTypes.bool,
};
const getDay = () => {
  let newdate = null;
  let dateObj = new Date();
  let month = dateObj.getUTCMonth() + 1; //months from 1-12
  let day = dateObj.getUTCDate();
  let year = dateObj.getUTCFullYear();
  newdate = `${month}/${day}/${year}`;
  return newdate;
};
const renderDateSelectField = ({
  classes,
  input,
  label,
  type,
  value,
  inputlabelprops,
  meta: { touched, error, invalid },
  children,
  ...custom
}) => (
  <FormControl className={classes.formControl} error={touched && error}>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        label={label}
        format="MM/dd/yyyy"
        error={touched && invalid}
        helperText={touched && error}
        defaultValue={getDay()}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
        inputlabelprops={{
          shrink: true,
        }}
        value={value}
        {...input}
        {...custom}
      />
    </MuiPickersUtilsProvider>

    {renderFromHelper({ touched, error })}
  </FormControl>
);
renderDateSelectField.propTypes = {
  label: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
  children: PropTypes.object,
  classes: PropTypes.object,
};
export default withStyles(style)(renderDateSelectField);
