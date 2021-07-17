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
  KeyboardTimePicker,
} from '@material-ui/pickers';

import PropTypes from 'prop-types';
import style from './style';
import { ViewDay } from '@material-ui/icons';
import { getByDisplayValue } from '@testing-library/dom';

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
const getTime = () => {
  let newdate = null;
  let dateObj = new Date();
  let hours = dateObj.getHours(); //months from 1-12
  let minute = dateObj.getMinutes();
  newdate = `${hours}:${minute}`;
  return newdate;
};
const renderTimeSelectField = ({
  classes,
  input,
  label,
  type,
  value,
  meta: { touched, error, invalid },
  children,
  ...custom
}) => (
  <FormControl className={classes.formControl} error={touched && error}>
    {/* <InputLabel htmlFor="age-native-simple">{label}</InputLabel> */}
    {/* <TextField
      label={label}
      // placeholder={label}
      error={touched && invalid}
      helperText={touched && error}
      type={type}
      format="DD MMM YYYY"
      value={!value ? null : new Date(value)}
      {...input}
      {...custom}
    /> */}
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardTimePicker
        label={label}
        error={touched && invalid}
        helperText={touched && error}
        defaultValue="7:00 PM"
        // value={!value ? null : new Date(value)}
        KeyboardButtonProps={{
          'aria-label': 'change time',
        }}
        // value={value}
        {...input}
        {...custom}
      />
    </MuiPickersUtilsProvider>
    {renderFromHelper({ touched, error })}
  </FormControl>
);
renderTimeSelectField.propTypes = {
  label: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
  children: PropTypes.object,
  classes: PropTypes.object,
};
export default withStyles(style)(renderTimeSelectField);
