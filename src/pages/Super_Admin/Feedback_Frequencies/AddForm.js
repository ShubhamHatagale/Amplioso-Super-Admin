import React, { useState, useEffect } from 'react';
import TextField from '../../../components/TextField';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import M from "materialize-css";
import { useHistory } from 'react-router-dom';
import RadioField from '../../../components/RadioField';
import Notification from "../../../components/Notification";
import MaxWidthDialog from '../../../components/AlertDialogBox';


function AddForm(props) {
    const history = useHistory();
    let [radioValue, setradioValue] = useState('Active');
    const APIUrl = process.env.REACT_APP_Base_URL;
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '', header: '' })
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '', type: '' })

    const initialValues = {
        feedback_frequencies: '',
        feedback_rounds: '',
        status: '',
    }
    const validate = Yup.object({
        feedback_frequencies: Yup.string()
            .required(' feedback frequencies is required').matches(/^[A-Za-z-/]+$/, "Please enter char and Dash only").min(2, "feedback must be minimum 2 characters long").max(15, "feedback must be 2 to 15 characters long."),
        feedback_rounds: Yup.string().required('no of rounds required').matches(/^[0-9/]+$/, "Enter valid data only numbers alloweds")
    })
    const HandleStatus = (val) => {
        setradioValue(val);
    }
    const BackBtn = () => {
        history.push("/feedback/view");
    }
    const OnSubmitForm = (values, props) => {
        const token = localStorage.getItem("jwt");
        var user_id = localStorage.getItem("user_id");
        var myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
            feedback_frequencies: values.feedback_frequencies,
            feedback_rounds: values.feedback_rounds,
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

        fetch(APIUrl + `/feedback`, requestOptions)
            .then((response) => response.json())
            .then((resData) => {
                console.log(resData);
                console.log(resData.status)
                if (resData.status == 200) {
                    setConfirmDialog({
                        isOpen: true,
                        title: 'Alert',
                        subTitle: "FeedBack Frequency Added Successfully",
                    })
                    // M.toast({
                    //     html: '<div class="<div class="card-alert card green" style="width: 450px;"><div class="card-content white-text"> <span class="card-title white-text darken-1"> <i class="material-icons">check</i><strong>Success</strong></span><p>Record Inserted Successfully.</p> </div></div>',
                    //     classes: "#e#00e676 green accent-3",
                    // });
                    // const user = JSON.parse(localStorage.getItem("user"));
                    // if (user) {
                    //     history.push("/feedback/view");
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
                                        <h5 className="breadcrumbs-title mt-0 mb-0"><span>Add Feedback Frequency</span></h5>
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
                                                                <TextField label="Feeback Frequency" elementType="add" name="feedback_frequencies" type="text" />
                                                                <TextField label="No of Rounds" elementType="add" name="feedback_rounds" type="text" />
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
            <Notification
                notify={notify}
                setNotify={setNotify}
            />
            <MaxWidthDialog setConfirmDialog={setConfirmDialog} confirmDialog={confirmDialog} link={'/feedback/view'} />

        </div>
    )
}

export default AddForm;