import React from 'react';
import { Field, ErrorMessage } from 'formik';
import FieldError from './FieldError';

function CheckboxGroup(props) {
    const { label, name, ...rest } = props
    return (
        <div className=''>
            <Field type="checkbox" className="form_check_input" name={name} {...rest} id={name}/>
            <label htmlFor={name} className="form_check_label">{label}</label>
            <ErrorMessage component={FieldError} name={name} />
        </div>
    )
}

export default CheckboxGroup
