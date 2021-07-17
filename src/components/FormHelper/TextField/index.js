import React from 'react';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
const renderTextField = ({
  label,
  input,
  InputLabelProps,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    InputLabelProps={{
      shrink: true,
    }}
    {...input}
    {...custom}
  />
);
renderTextField.propType = {
  label: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
};
export default renderTextField;
