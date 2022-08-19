import React, { useState } from 'react';
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
    let [radioValue, setradioValue] = useState('Single');
    const APIUrl = process.env.REACT_APP_Base_URL;
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '', type: '' })


    const initialValues = {
        coupon_name: '',
        coupon_percentage: '',
        package: '',
        start_date: '',
        end_date: '',
    }
    const HandleStatus = (val) => {
        console.log(val)
        setradioValue(val);
    }


    const BackBtn = () => {
        history.push("/coupon/view");
    }
    const validate = Yup.object({
        coupon_name: Yup.string()
            .required('Coupon Name is required').matches(/^[A-Za-z0-9-]+$/, "Please enter valid data").min(2, "Coupon Name must be minimum 2 characters long").max(100, "coupon Name must be 2 to 100 characters long."),
        coupon_percentage: Yup.string()
            .matches(
                /^[1-9][0-9]?$|^100$/,
                {
                    message: 'allow Only 1 to 100 numbers ',
                    excludeEmptyString: true,
                },
            )
            .required('Coupon Percentage is required'),
        start_date: Yup.date()
            .required('Start Date is required'),
        end_date: Yup.date().min(
            Yup.ref('start_date'),
            "End date can't be before Start date"
        )
    })

    const OnSubmitForm = (values, props) => {
        const token = localStorage.getItem("jwt");
        var user_id = localStorage.getItem("user_id");
        var myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            coupon_name: values.coupon_name,
            coupon_percentage: values.coupon_percentage,
            package: radioValue,
            start_date: values.start_date,
            end_date: values.end_date,
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

        fetch(APIUrl + `/coupon`, requestOptions)
            .then((response) => response.json())
            .then((resData) => {
                console.log(resData);
                if (resData.status == 200) {
                    setConfirmDialog({
                        isOpen: true,
                        title: 'Alert',
                        subTitle: "Coupon Added Successfully",
                    })

                    // M.toast({
                    //     html: '<div class="<div class="card-alert card green" style="width: 450px;"><div class="card-content white-text"> <span class="card-title white-text darken-1"> <i class="material-icons">check</i><strong>Success</strong></span><p>Record Inserted Successfully.</p> </div></div>',
                    //     classes: "#e#00e676 green accent-3",
                    // });
                    // const user = JSON.parse(localStorage.getItem("user"));
                    // if (user) {
                    //     history.push("/coupon/view");
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
                                        <h5 className="breadcrumbs-title mt-0 mb-0"><span>Add Coupon</span></h5>
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
                                                                <TextField label="Coupon Name" elementType="add" name="coupon_name" type="text" />
                                                                <TextField label="Coupon Percentage" elementType="add" name="coupon_percentage" type="text" />
                                                            </div>
                                                            <div className="row">
                                                                <TextField label="Start Date" elementType="add" name="start_date" type="date" />
                                                                <TextField label="End Date" elementType="add" name="end_date" type="date" />
                                                            </div>
                                                            {/* <div className="row">
                                                                <div class="col m6 s12 redio_section">
                                                                    <p>Package</p>
                                                                    <RadioField label="Single" value="Single" name="package" HandleStatus={HandleStatus} isSelectedCheck={radioValue == "Single"} />

                                                                    <RadioField label="Multiple" value="Multiple" name="package" HandleStatus={HandleStatus} isSelectedCheck={radioValue == "Multiple"}/>
                                                                </div>
                                                            </div> */}

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
            <MaxWidthDialog setConfirmDialog={setConfirmDialog} confirmDialog={confirmDialog} link={'/coupon/view'} />

        </div>
    )
}

export default AddForm;