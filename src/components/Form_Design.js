import React from 'react';
import TextField from '../components/TextField';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';

export const Form_Design = () => {
    const initialValues = {
        company_name: '',
        com_headquater: '',
        feedback_freq: '',
        avg_emp_com: '',
        business_sector: '',
        no_of_emp: ''
    }
    const validate = Yup.object({
        company_name: Yup.string()
            .matches(
                /^.[a-zA-Z0-9-.]+$/,
                {
                    message: 'Alphanumeric characters or dash or dot only',
                    excludeEmptyString: true,
                },
            )
            .required('Comapny Name is required'),
        com_headquater: Yup.number()
            .required('Comapany Headquater is required'),
        no_of_emp: Yup.number()
            .required('No of employee is required'),
        business_sector: Yup.number()
            .required('Business Sector is required'),
        feedback_freq: Yup.number()
            .required('feed back Frequency is required'),
        avg_emp_com: Yup.number()
            .required('Average Employee Compansation is required')
    })
    const OnSubmitForm = (values, props) => {
        alert(JSON.stringify(values), null, 2)
        props.resetForm()
    }
    return (
        <div>
            <div id="main">
                <div className="row">
                    <div className="content-wrapper-before gradient-45deg-indigo-purple"></div>
                    <div className="breadcrumbs-dark pb-0 pt-4" id="breadcrumbs-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col s10 m6 l6">
                                    <h5 className="breadcrumbs-title mt-0 mb-0"><span>Section Title</span></h5>
                                    <ol className="breadcrumbs mb-0">
                                        <li className="breadcrumb-item"><a href="index.html">Home</a>
                                        </li>
                                        <li className="breadcrumb-item"><a href="#">Form</a>
                                        </li>
                                        <li className="breadcrumb-item active">Section Title</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col s12">
                        <div className="container">
                            <div className="seaction">
                                <div className="row">
                                    <div className="col s12 m12 l12">
                                        <div id="Form-advance" className="card card card-default scrollspy">
                                            <div className="card-content">
                                                <Formik
                                                    initialValues={
                                                        initialValues
                                                    }
                                                    validationSchema={validate}
                                                    onSubmit={(values, props) => {
                                                        OnSubmitForm(values, props)
                                                    }}
                                                >
                                                    {formik => (
                                                        <Form>
                                                            <div className="row">
                                                                <TextField label="Company Name" name="company_name" type="text" />
                                                                <TextField label="Company Headquaters" name="com_headquater" type="text" />
                                                            </div>
                                                            <div className="row">
                                                                <TextField label="Number of Employee" name="no_of_emp" type="text" />
                                                                <TextField label="Business Sector" name="business_sector" type="text" />
                                                            </div>
                                                            <div className="row">
                                                                <TextField label="Average Employee Compansation" name="avg_emp_com" type="text" />
                                                                <TextField label="Feedback Frequency" name="feedback_freq" type="text" />
                                                            </div>
                                                            <div className="row">
                                                                <div className="row">
                                                                    <div className="input-field col s12">
                                                                        <button className="btn cyan waves-effect waves-light gen_btn" type="submit" name="action">Submit</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Form>
                                                    )}
                                                </Formik>                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="content-overlay"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Form_Design;