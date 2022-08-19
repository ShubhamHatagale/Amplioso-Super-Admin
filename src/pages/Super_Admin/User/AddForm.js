import React, { useEffect, useState } from 'react';
import TextField from '../../../components/TextField';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import M from "materialize-css";
import { useHistory } from 'react-router-dom';
import RadioField from '../../../components/RadioField';
import MaxWidthDialog from '../../../components/AlertDialogBox';
import CustomSelect from "../../../components/Select";


function AddForm(props) {
    const history = useHistory();
    const APIUrl = process.env.REACT_APP_Base_URL;
    let [radioValue, setradioValue] = useState('Male');
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '', type: '' })
    let [getRole, setgetRole] = useState('');
    const token = localStorage.getItem("jwt");
    const initialValues = {
        first_name: '',
        last_name: '',
        dob: '',
        date_of_joining: '',
        gender: '',
        designation: '',
        role: '',
        company_id: '',
        address: '',
        mobile_number: '',
        user_email: '',
        username: '',
        password: '',
        created_by: "",
        updated_by: ""
    }
    useEffect(() => {
        getAllRole()
    }, [])
    const getAllRole = async () => {
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'multipart/form-data')
        myHeaders.append("Authorization", token);
        let res = await fetch(
            APIUrl + `/role`,
            {
                method: "get",
                headers: myHeaders
            }
        );
        let response = await res.json();
        let result = response.data;
        console.log(result)
        setgetRole(result)
    }
    const validate = Yup.object({
        first_name: Yup.string().matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed. ").required('First Name is required').min(2, "First Name must be minimum 2 characters long").max(15, "First Name must be 2 to 15 characters long."),
        last_name: Yup.string().matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed.").required('Last Name is required').min(2, "Last Name must be minimum 2 characters long").max(15, "Last Name must be 2 to 15 characters long."),
        // dob: Yup.date().required("Date of Birth is Required").max(new Date(), "Date cannot be in the Futere"),
        // date_of_joining: Yup.date().required("Date of Joining is Required").max(new Date(), "Date cannot be in the Future").min(Yup.ref('dob'), "Date of joining Must be after DOB"),
        // designation: Yup.string().matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ").required('Designation is required').min(2, "Designation must be minimum 2 characters long").max(15,"Designation must be 2 to 15 characters long."),
        // role: Yup.string().required('User Role is Required').matches(/^\d+$/,"Only Numbers are Allowed"),
        // company_id: Yup.string().required('Company Id is Required').matches(/^\d+$/,"Only Numbers are Allowed"),        
        // address: '',
        mobile_number: Yup.string()
            .required("Mobile Number is required")
            .matches(/^.[0-9-+]+$/, 'Phone number is not valid')
            .min(10, "Mobile no must be 10 digits long.")
            .max(10, "Mobile no must be 10 digits long."),
        user_email: Yup.string().email().required('User Email is Required').matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, "Please enter a valid email."),
        username: Yup.string().required('Username is Required'),
        password: Yup.string().required('Password is Required')
    })
    const HandleStatus = (val) => {
        setradioValue(val);
    }

    const BackBtn = () => {
        history.push("/user/view");
    }
    const OnSubmitForm = (values, props) => {
        const token = localStorage.getItem("jwt");
        var user_id = localStorage.getItem("user_id");
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", token);
        var raw = JSON.stringify({
            first_name: values.first_name,
            last_name: values.last_name,
            // date: values.dob,
            // date_of_joining: values.date_of_joining,
            // gender: radioValue,
            // designation: values.designation,
            // role: values.role,
            // company_id: values.company_id,
            // address: values.address,
            mobile_no: values.mobile_number,
            user_email: values.user_email,
            username: values.username,
            password: values.password,
            created_on: "2021/02/02",
            created_by: user_id,
            updated_by: user_id
        })
        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };
        fetch(APIUrl + `/users`, requestOptions)
            .then((response) => response.json())
            .then((resData) => {
                console.log(resData);
                if (resData.status == 200) {
                    setConfirmDialog({
                        isOpen: true,
                        title: 'Alert',
                        subTitle: "SuperAdmin User Added Successfully",
                    })
                }
                if (resData.status == 400) {
                    setConfirmDialog({
                        isOpen: true,
                        title: 'Error',
                        subTitle: "SuperAdmin User Already Exist With this E-mail,Plaese Change E-mail and try again",
                    })
                }
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
                                        <h5 className="breadcrumbs-title mt-0 mb-0"><span>Add SuperAdmin User</span></h5>
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
                                                            {getRole ? (
                                                                <div>
                                                                    <div className="row">
                                                                        <TextField label="First Name" defaultValue="Ravikant" name="first_name" type="text" />
                                                                        <TextField label="Last Name" name="last_name" type="text" />
                                                                    </div>
                                                                    {/* <div className="row">
                                                                <TextField label="DOB" className="" name="dob" type="date" />
                                                                <TextField label="Date of Joining" className="" name="date_of_joining" type="date" />
                                                            </div>
                                                            <div class="row">
                                                                <div class="col m6 s12 redio_section">
                                                                    <p>Gender</p>
                                                                    <RadioField label="Male" value="Male" name="Male" HandleStatus={HandleStatus} isSelectedCheck={radioValue == "Male"}/>
                                                                    <RadioField label="Female" value="Female" name="group1" HandleStatus={HandleStatus} isSelectedCheck={radioValue == "Female"}/>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <TextField label="Designation" name="designation" type="text" /> */}
                                                                    {/* <TextField label="User Role" name="role" type="text" /> */}
                                                                    {/* <div className="col m6 s12 padtb">
                                                                <label>User Role</label>
                                                                <CustomSelect
                                                                    className='select-dropdown dropdown-trigger'
                                                                    onChange={value => formik.setFieldValue('role', value.value)}
                                                                    value={formik.values.role}
                                                                    options={getRole} 
                                                                    Field={'Role'} 
                                                                    Fieldname={'role'}
                                                                />
                                                            {formik.errors.role ? <div className='error'>{formik.errors.role}</div> : null}                                                                
                                                            </div>
                                                            </div> */}
                                                                    {/* <div className="row">
                                                                <TextField label="Company Id" name="company_id" type="text" />
                                                                <TextField label="Address" name="address" type="text" />
                                                            </div> */}
                                                                    <div className="row">
                                                                        <TextField label="Mobile Number" name="mobile_number" type="text" />
                                                                        <TextField label="User E-mail" name="user_email" type="text" />
                                                                    </div>
                                                                    <div className="row">
                                                                        <TextField label="Username " name="username" type="text" />
                                                                        <TextField label="Password" name="password" type="password" />
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="row">
                                                                            <div className="input-field col s12">
                                                                                <button className="btn cyan  waves-light gen_btn" type="submit" name="action">Save</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ) : (null)}
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
            <MaxWidthDialog setConfirmDialog={setConfirmDialog} confirmDialog={confirmDialog} link={'/user/view'} />
        </div>
    )
}

export default AddForm;