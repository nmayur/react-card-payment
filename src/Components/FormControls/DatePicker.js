import React from 'react';
import DateView from 'react-datepicker';
import { Field, ErrorMessage } from 'formik';
import FieldError from './FieldError';
import 'react-datepicker/dist/react-datepicker.css';

function DatePicker(props) {
  const { label, name, ...rest } = props
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form
          const { value } = field
          return (
            <DateView
              className="form_control"
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={val => setFieldValue(name, val)}
              showMonthYearPicker
              dateFormat="MM/yyyy"
            />
          )
        }}
      </Field>
      <ErrorMessage component={FieldError} name={name} />
    </div>
  )
}

export default DatePicker;
