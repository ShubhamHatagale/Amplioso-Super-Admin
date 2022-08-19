import React, { useState } from 'react';
import TextField from '../../../components/TextField';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import M from "materialize-css";
import { useHistory } from 'react-router-dom';
import MaxWidthDialog from '../../../components/AlertDialogBox';


function AddForm(props) {
    const history = useHistory();
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '', type: '' })

    const initialValues = {
        package_name: '',
        no_of_employees: '',
        start_date: '',
        end_date: '',
    }

    const APIUrl = process.env.REACT_APP_Base_URL;
    const BackBtn = () => {
        history.push("/package/view");
    }

    const validate = Yup.object({
        package_name: Yup.string()
            .required('Package Name is required').matches(/^[A-Za-z0-9-+/ ]+$/, "Please enter valid data"),
        no_of_employees:
            Yup.string().matches(/^[0-9+.-]+$/, {
                message: 'allow only number and dash',
                excludeEmptyString: true,
            }).required("Number of Employee is required"),
        actual_price: Yup.string()
            .required('Actual Price is required').matches(/^[ A-Za-z0-9\$,-]*$/, "Allow only alphanumeric,doller,comma and dash"),
        price: Yup.string()
            .required('Price is required').matches(/^[ A-Za-z0-9\$,-]*$/, "Allow only alphanumeric,doller,comma and dash"),
        // start_date: Yup.date()
        //     .required('Start Date is required'),
        // end_date: Yup.date().min(
        //     Yup.ref('start_date'),
        //     "End date can't be before Start date"
        // )
    })

    const OnSubmitForm = (values, props) => {
        const token = localStorage.getItem("jwt");
        var user_id = localStorage.getItem("user_id");
        var myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
            package_name: values.package_name,
            no_of_employees: values.no_of_employees,
            actual_price: values.actual_price,
            price: values.price,
            // start_date: values.start_date,
            // end_date: values.end_date,
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
        fetch(APIUrl + `/package`, requestOptions)
            .then((response) => response.json())
            .then((resData) => {
                console.log(resData);
                if (resData.status == 200) {
                    setConfirmDialog({
                        isOpen: true,
                        title: 'Alert',
                        subTitle: "Package Added Successfully",
                    })
                    // M.toast({
                    //     html: '<div class="<div class="card-alert card green" style="width: 450px;"><div class="card-content white-text"> <span class="card-title white-text darken-1"> <i class="material-icons">check</i><strong>Success</strong></span><p>Record Inserted Successfully.</p> </div></div>',
                    //     classes: "#e#00e676 green accent-3",
                    // });
                    // const user = JSON.parse(localStorage.getItem("user"));
                    // if (user) {
                    //     history.push("/package/view");
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
                                        <h5 className="breadcrumbs-title mt-0 mb-0"><span>Add Package</span></h5>
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
                                                                <TextField label="Package Name" elementType="add" name="package_name" type="text" />
                                                                <TextField label="Number of Employees" elementType="add" name="no_of_employees" type="text" />
                                                            </div>
                                                            <div className="row">
                                                                <TextField label="Actual Price" elementType="add" name="actual_price" type="text" />
                                                                <TextField label="Price" elementType="add" name="price" type="text" />
                                                                {/* <TextField label="Start Date" elementType="add" name="start_date" type="date" />
                                                                <TextField label="End Date" elementType="add" name="end_date" type="date" /> */}
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
            <MaxWidthDialog setConfirmDialog={setConfirmDialog} confirmDialog={confirmDialog} link={'/package/view'} />
        </div>
    )
}

export default AddForm;