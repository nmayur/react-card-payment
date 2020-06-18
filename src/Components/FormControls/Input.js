import React from 'react';
import { Field, ErrorMessage } from 'formik';
import FieldError from './FieldError';

function Input (props) {
  const { label, name, ...rest } = props
  return (
    <div className=''>
      <Field id={name} name={name} className="form_control" {...rest} />
      <ErrorMessage component={FieldError} name={name} />
    </div>
  )
}

export default Input;
