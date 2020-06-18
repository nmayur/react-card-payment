import React from 'react';
import Input from './Input';
import Checkbox from './Checkbox';
import DatePicker from './DatePicker';

function FormControls(props) {
    const { control, ...rest } = props
    switch (control) {
        case 'input':
            return <Input {...rest} />
        case 'checkbox':
            return <Checkbox {...rest} />
        case 'date':
            return <DatePicker {...rest} />
        default:
            return null
    }
}

export default FormControls;