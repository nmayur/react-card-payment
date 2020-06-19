import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormControls from '../../Components/FormControls/FormControls';
import Spinner from '../../Components/Spinner';

const PaymentForm = (props) => {

    const { getFormStatus } = props;

    const [formState, setFormState] = useState({
        loading: false,
        success: false,
        data: {}
    })

    const initialValues = {
        name: '',
        card_number: '',
        expiry_date: '',
        cvv: '',
        save_card: false
    }
    const onlyNumbers = /^[0-9]*$/;
    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        card_number: Yup.string().required('Required')
            .matches(onlyNumbers, 'Please enter a valid card number')
            .matches(/^.{16}$/, 'Card number should be of 16 digits'),
        expiry_date: Yup.string().required('Required'),
        cvv: Yup.string().required('Required')
            .matches(onlyNumbers, 'Please enter a valid CVV Number')
            .matches(/^.{3}$/, 'CVV should be of 3 digits')
    })

    const onSubmit = values => {
        // console.log('Form data', values)
        setFormState({ ...formState, loading: true });
        setTimeout(() => {
            setFormState({ ...formState, loading: false, success: true, data: values });
        }, 3000);
    }

    useEffect(() => {
        if (formState.success) {
            getFormStatus(formState);
        }
    }, [formState])

    return (
        <div className="payment_form_wrap">
            <h1 className="form_title">Your Payment Details</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                {formik => {
                    return (
                        <Form className="pay_now_form flex flex__wrap">
                            <div
                                className={"form_group " +
                                    (formik.touched.name && formik.errors.name ? " invalid" : "")}>
                                <label htmlFor="name">Card Holder Name</label>
                                <FormControls control='input' type='text' name='name' />
                            </div>
                            <div className={"form_group " +
                                (formik.touched.card_number && formik.errors.card_number ? " invalid" : "")}>
                                <label htmlFor="card_number">Card Number</label>
                                <FormControls control='input' type='text' min="16" max="16" name='card_number' />
                            </div>
                            <div className={"form_group expiry_group " +
                                (formik.touched.expiry_date && formik.errors.expiry_date ? " invalid" : "")}>
                                <label htmlFor="expiry_date">Expiration Date</label>
                                <FormControls control='date' name='expiry_date' />
                            </div>
                            <div className={"form_group cvv_group  " +
                                (formik.touched.cvv && formik.errors.cvv ? " invalid" : "")}>
                                <label htmlFor="cvv">CVV</label>
                                <FormControls control='input' type='password' min="3" max="3" name='cvv' />
                            </div>
                            <div className="form_group">
                                <FormControls control='checkbox' name='save_card'
                                    label="Save my details for future payments" />
                            </div>
                            <button type='submit'
                                disabled={formState.loading}
                                className={"btn btn__primary btn__block submit_btn" + (formState.success ? ' btn__success' : ' ')}>
                                {
                                    formState.loading ? <Spinner /> :
                                        formState.success ? 'Success' : 'Pay Now'
                                }
                            </button>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    );
}

export default PaymentForm;