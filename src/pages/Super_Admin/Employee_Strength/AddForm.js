import React, { useState } from 'react';
import TextField from '../../../components/TextField';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import M from "materialize-css";
import { useHistory } from 'react-router-dom';
import RadioField from '../../../components/RadioField';
import MaxWidthDialog from '../../../components/AlertDialogBox';


function AddForm(props) {
    const history = useHistory();
    let [radioValue, setradioValue] = useState('Active');
    const APIUrl = process.env.REACT_APP_Base_URL;
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '', type: '' })


    const initialValues = {
        number_of_employee: '',
        status: '',
    }
    const validate = Yup.object({
        number_of_employee:
            Yup.string().matches(/^[ A-Za-z0-9\()\-+/<>]*$/, "Allow only alphanumeric ,(,),-,/,<,>").required("Number of Employee is required"),
    })
    const HandleStatus = (val) => {
        console.log(val)
        setradioValue(val);
    }


    const BackBtn = () => {
        history.push("/employee/view");
    }

    const OnSubmitForm = (values, props) => {
        console.log("submitted")
        const token = localStorage.getItem("jwt");
        var user_id = localStorage.getItem("user_id");
        var myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            number_of_employee: values.number_of_employee,
            status: radioValue,
            created_on: "2021/02/02",
            created_by: user_id,
            updated_by: user_id
        });

        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };

        fetch(APIUrl + `/employee`, requestOptions)
            .then((response) => response.json())
            .then((resData) => {
                console.log(resData.status);
                if (resData.status == 200) {
                    setConfirmDialog({
                        isOpen: true,
                        title: 'Alert',
                        subTitle: "Employee Strength Added Successfully",
                    })

                    // M.toast({
                    //     html: '<div class="<div class="card-alert card green" style="width: 450px;"><div class="card-content white-text"> <span class="card-title white-text darken-1"> <i class="material-icons">check</i><strong>Success</strong></span><p>Record Inserted Successfully.</p> </div></div>',
                    //     classes: "#e#00e676 green accent-3",
                    // });

                    // const user = JSON.parse(localStorage.getItem("user"));
                    // if (user) {
                    //     history.push("/employee/view");
                    // } else {
                    //     history.push("/");
                    // }
                }
                props.resetForm();
            })
            .catch((error) => console.log("error", error));
    }

    return (
        <div>
            <div id="main">
                <div className="row">
                    <div className="content-wrapper-before gradient-45deg-indigo-purple"></div>
                    <div className="col s9">
                        <div className="breadcrumbs-dark pb-0 pt-4" id="breadcrumbs-wrapper">
                            {/* <!-- Search for small screen--> */}
                            <div className="container">
                                <div className="row">
                                    <div className="col s10 m6 l6">
                                        <h5 className="breadcrumbs-title mt-0 mb-0"><span>Add Employee Strength</span></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col s3"><div className="invoice-create-btn mt-10 right pr-5">
                        <a onClick={BackBtn} className="btn  waves-light invoice-create  z-depth-1 ">
                            <i className="material-icons">arrow_back</i>
                        </a>
                    </div></div>
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
                                                                <TextField label="Number of Employee" elementType="add" name="number_of_employee" type="text" />
                                                            </div>
                                                            <div className="row">
                                                                <div class="col m6 s12 redio_section">
                                                                    <p>Status</p>
                                                                    <RadioField label="Active" value="Active" name="status" HandleStatus={HandleStatus} isSelectedCheck={radioValue == "Active"} />

                                                                    <RadioField label="Inactive" value="Inactive" name="status" HandleStatus={HandleStatus} isSelectedCheck={radioValue == "Inactive"} />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="row">
                                                                    <div className="input-field col s12">
                                                                        <button className="btn cyan  waves-light gen_btn" type="submit" name="action">Save</button>
                                                                    </div>
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

                        </div>
                        <div className="content-overlay"></div>
                    </div>
                </div>
            </div>
            <MaxWidthDialog setConfirmDialog={setConfirmDialog} confirmDialog={confirmDialog} link={'/employee/view'} />

        </div>
    )
}

export default AddForm;