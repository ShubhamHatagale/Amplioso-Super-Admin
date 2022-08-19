import React from 'react';
import { Formik, Form } from 'formik';
import TextField from '../../components/Login/TextFeild';
import * as Yup from 'yup';
import M from "materialize-css"
import logo from "../../assets/SuperAdmin/images/logo_login.png";
import { useHistory } from 'react-router-dom';

export const ForgotPassword = () => {
    const history = useHistory()
    const initialValues = {
        user_email: ''
    }
    const validate = Yup.object({
        user_email: Yup.string()
            .email('Email is invalid')
            .required('Email is required')
    })
    const OnSubmitForm = (values, props) => {
        try {
            fetch("http://localhost:8000/masters/users/forgot-password", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    user_email: values.user_email
                })
            }).then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.error) {
                        M.toast({ html: data.error, classes: "#ef5350 red lighten-1" })
                    }
                    else {
                        M.toast({ html: data.massage, classes: "#e#00e676 green accent-3" })
                        const user = JSON.parse(localStorage.getItem("user"));
                        if (user) {
                            history.push('/')
                        }
                    }
                    props.resetForm();
                }
                )
                .catch(err => {
                    console.log(err)
                })
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <div className="login_wrapper" >
                <div className="container">
                    <div className="row">
                        <div className="col s12 m6 logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="col s12 m6 brdr ">
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
                                        {/* <div className="col s12 m6 brdr"> */}
                                        <div className="right_panel">
                                            <h1>Forgot Password</h1>
                                            <div className="row margin">
                                                <TextField label="Email Id" name="user_email" type="text" />
                                                <div className="col s5 topm">
                                                    <button type="submit" className="btn  waves-light border-round  col s12 login-btn">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* </div> */}
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}