import React, { useState } from 'react';
import TextField from '../../../components/TextField';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import M from "materialize-css";
import { useHistory } from 'react-router-dom';
import RadioField from '../../../components/RadioField';
import Notification from "../../../components/Notification";
import MaxWidthDialog from '../../../components/AlertDialogBox';

function AddRole(props) {
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '', header: '' })
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '', type: '' })
    const history = useHistory();
    let [showView, setshowView] = useState(false);
    const initialValues = {
        role: '',
    }

    const validate = Yup.object({
        role: Yup.string().matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ").required('Role is required').min(2, "Role must be minimum 2 characters long").max(100, "Role must be 2 to 100 characters long."),
    })
    const BackBtn = () => {
        history.push("/role/view");
    }
    const OnSubmitForm = (values, props) => {
        const APIUrl = process.env.REACT_APP_Base_URL;
        var user_id = localStorage.getItem("user_id");
        const token = localStorage.getItem("jwt");
        var myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            role: values.role,
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

        fetch(APIUrl + `/role`, requestOptions)
            .then((response) => response.json())
            .then((resData) => {
                console.log(resData);
                console.log(resData.status)
                if (resData.status === 200) {
                    // console.log(resData.status)
                    // HandleAlertOpenBox()
                    // M.toast({
                    //     html: '<div class="<div class="card-alert card green" style="width: 450px;"><div class="card-content white-text"> <span class="card-title white-text darken-1"> <i class="material-icons">check</i><strong>Success</strong></span><p>Record Inserted Successfully.</p> </div></div>',
                    //     classes: "#e#00e676 green accent-3",
                    // });
                    setConfirmDialog({
                        isOpen: true,
                        title: 'Alert',
                        subTitle: "Records Added Successfully",
                    })
                    console.log(confirmDialog.type)

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
                                        <h5 className="breadcrumbs-title mt-0 mb-0"><span>Add Role</span></h5>
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
                                                                <TextField label="Role" elementType="add" name="role" type="text" />
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
            <MaxWidthDialog setConfirmDialog={setConfirmDialog} confirmDialog={confirmDialog} link={'/role/view'} />
        </div>
    )
}

export default AddRole;