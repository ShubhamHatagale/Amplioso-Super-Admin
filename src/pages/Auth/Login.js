import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { Formik, Form } from 'formik';
import TextField from '../../components/Login/TextFeild';
import * as Yup from 'yup';
import logo from "../../assets/SuperAdmin/images/default-logo.png"
import { useHistory, Link } from "react-router-dom";
import M from "materialize-css";
var crypto = require("crypto")
require("dotenv").config();
export const Login = () => {
    // const { state, dispatch } = useContext(UserContext);
    const BaseURL = process.env.REACT_APP_Base_URL_Gateway;
    const history = useHistory();
    const initialValues = {
        email: '',
        password: ''
    }
    const validate = Yup.object({
        email: Yup.string()
            .email('User E-mail is invalid')
            .required('User E-mail is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 charaters')
            .required('Password is required'),
    })
    const onclickfuc = () => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user) {
            history.push("/forgot-password");
        }
    }
    const OnSubmitForm = (values, props) => {
        try {
            var hash = crypto.createHash('sha512');
            var data = hash.update(values.password, 'utf-8');
            var gen_hash = data.digest('hex');
            fetch(BaseURL, {
                method: "post", 
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: values.email,
                    password: values.password,
                }),
            })
                .then((res) => {
                    return res.json();
                })
                .then((resData) => {
                    if (resData.status == 200) {
                        localStorage.setItem("jwt", resData.resultSet.token)
                        localStorage.setItem("user", JSON.stringify(resData.resultSet))
                        localStorage.setItem("user_id", JSON.stringify(resData.resultSet.userId))
                        // dispatch({ type: "USER", payload: resData.resultSet })
                        console.log(resData)
                        history.push("/")
                        // M.toast({
                        //     html: "login Successfully",
                        //     classes: "#e#00e676 green accent-3",
                        // });
                    }
                    if (resData.code == 204) {
                        M.toast({
                            html: "Email Or password does not match",
                            classes: "#FF0000 red accent-3",
                        });
                    }
                    props.resetForm();
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (err) {
            console.log(err);
        }
        props.resetForm()
    }
    return (
        <div>
            <div className="row">
                <div className="col s12">
                    <div className="container center-align">
                        <img src={logo} alt="" className="logo_login" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    <div className="container">
                        <div id="login-page" className="row">
                            <div className="col s12 m6 l4 z-depth-4 card-panel border-radius-6 login-card bg-opacity-8">
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
                                        <Form className="login-form">
                                            <div className="row">
                                                <div className="  col s12">
                                                    <h5 className="ml-4" >Sign in</h5>
                                                </div>
                                            </div>
                                            <div className="row margin">
                                                <div className="      col s12">
                                                    {/* <i class="material-icons prefix pt-2">person_outline</i> */}
                                                    <TextField label="User E-mail" name="email" type="text" />
                                                </div>
                                            </div>
                                            <div className="row margin">
                                                <div className="  col s12">
                                                    {/* <i className="material-icons prefix pt-2">lock_outline</i> */}
                                                    <TextField label="Password" name="password" type="password" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col s12 m12 l12 ml-2 mt-1">
                                                    <p>
                                                        <label>
                                                            <input type="checkbox" />
                                                            <span>Remember Me</span>
                                                        </label>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s6">
                                                    <button className="btn  waves-light   col s12 login-btn" type="submit" name="action">Submit</button>
                                                </div>
                                                <div className="input-field col s12 m6 l6 forgot_pwd_col">
                                                    <p className="margin right-align medium-small" onClick={onclickfuc}><i class="material-icons prefix pt-2 forgot_pwd">lock_outline</i> Forgot password ?</p>
                                                </div>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Login;
