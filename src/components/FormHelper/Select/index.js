import React from 'react';
import {
  FormControl,
  Select,
  InputLabel,
  FormHelperText,
  withStyles,
} from '@material-ui/core';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import style from './style';
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
const renderSelectField = ({
  classes,
  input,
  label,
  placeholder,
  className,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <FormControl
    className={classes.formControl}
    error={touched && error}
    // variant="outlined"
  >
    <InputLabel shrink style={{ color: '#eee' }}>
      {label}
    </InputLabel>
    <Select
      className={className}
      inputlabelprops={{
        name: { label },
      }}
      defaultValue={
        input.value.length === 0 || input.value === '' ? 'AAAA' : input.value
      }
      displayEmpty
      {...input}
      {...custom}
    >
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
);
renderSelectField.propTypes = {
  label: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
  children: PropTypes.array,
  classes: PropTypes.object,
};
export default withStyles(style)(renderSelectField);
