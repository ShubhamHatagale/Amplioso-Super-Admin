import React, { useEffect, useState } from 'react';

import TextField from '../../../components/TextField';
import * as Yup from 'yup';
import * as ReactDOM from 'react-dom';
import getYear from "date-fns/getYear";
import { Formik, Form, Field } from 'formik';
import Notification from "../../../components/Notification";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import M from "materialize-css";
import MaxWidthDialog from '../../../components/AlertDialogBox';
import CustomSelect from "../../../components/Select";
import Spinner from 'react-spinner-material';



function AddCompany(props) {
    const range = (start, end) => {
        return new Array((end + 1) - start).fill().map((d, i) => i + start);
    };
    const years = range(1800, getYear(new Date()));
    const history = useHistory();
    const APIUrl = process.env.REACT_APP_Base_URL;
    let [imageUpload, setimageUpload] = useState('');
    let [getSector, setgetSector] = useState('');
    let [getEmployee, setgetEmployee] = useState('');
    let [getAvgEmployee, setgetAvgEmployee] = useState('');
    let [getFeedback, setgetFeedback] = useState('');
    let [packages, setgetPackage] = useState('');
    const [getHeadquater, setgetHeadquater] = useState('');
    const token = localStorage.getItem("jwt");
    let [imageurl, setImageurl] = useState('')
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '', type: '' })
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })
    const percentage = 100;

    let [loading, setLoading] = useState(false);


    const BackBtn = () => {
        history.push("/companies/view");
    }
    useEffect(() => {
        console.log(token)
        getHeadquaters();
        getAllSector();
        getAllEmployee();
        getAllAvgEmployee();
        getAllFeedback();
        getAllPackage();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 4000);
    }, [])
    const getHeadquaters = async () => {
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'multipart/form-data')
        myHeaders.append("Authorization", token);
        let res = await fetch(APIUrl + `/country`,
            {
                method: "get",
                headers: myHeaders
            }
        );
        let response = await res.json();
        let result = response.data;
        setgetHeadquater(result);
    }
    const getAllEmployee = async () => {
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'multipart/form-data')
        myHeaders.append("Authorization", token);
        let res = await fetch(
            APIUrl + `/employee`,
            {
                method: "get",
                headers: myHeaders
            }
        );
        let response = await res.json();
        let result = response.data;
        setgetEmployee(result);
    }
    const getAllAvgEmployee = async () => {
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'multipart/form-data')
        myHeaders.append("Authorization", token);
        let res = await fetch(
            APIUrl + `/averageEmp`,
            {
                method: "get",
                headers: myHeaders
            }
        );
        let response = await res.json();
        let result = response.data;
        setgetAvgEmployee(result);
    }
    const getAllSector = async () => {
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'multipart/form-data')
        myHeaders.append("Authorization", token);
        let res = await fetch(
            APIUrl + `/sector`,
            {
                method: "get",
                headers: myHeaders
            }
        );
        let response = await res.json();
        let result = response.data;
        setgetSector(result)
    }
    const getAllFeedback = async () => {
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'multipart/form-data')
        myHeaders.append("Authorization", token);
        let res = await fetch(
            APIUrl + `/feedback`,
            {
                method: "get",
                headers: myHeaders
            }
        );
        let response = await res.json();
        let result = response.data;
        setgetFeedback(result);
    }
    const getAllPackage = async () => {
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'multipart/form-data')
        myHeaders.append("Authorization", token);
        let res = await fetch(
            APIUrl + `/package`,
            {
                method: "get",
                headers: myHeaders
            }
        );
        let response = await res.json();
        let result = response.data;
        setgetPackage(result);
    }
    const initialValues = {
        company_name: '',
        comapany_headquaters: '',
        first_name: '',
        last_name: '',
        feedback_frequency: '',
        average_employee_compansation: '',
        business_sector: '',
        number_of_employee: '',
        date_of_inception: '',
        current_package: '',
        company_logo: '',
        username: '',
        password: ''
    }

    const validate = Yup.object({
        company_name: Yup.string()
            .matches(
                /^.[a-zA-Z0-9-. ]+$/,
                {
                    message: 'Allow  only Alphanumric dash and dot',
                    excludeEmptyString: true,
                },
            )
            .required('Comapny Name is required').min(2, "Company Name must be minimum 2 characters long").max(100, "Company Name must be 2 to 15 characters long."),
        comapany_headquaters: Yup.string()
            .required('Comapany Headquater is Required').matches(/^\d+$/, "Only Numbers are Allowed"),
        first_name: Yup.string().matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed. ").required('First Name is required').min(2, "First Name must be minimum 2 characters long").max(15, "First Name must be 2 to 15 characters long."),
        last_name: Yup.string().matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed.").required('Last Name is required').min(2, "Last Name must be minimum 2 characters long").max(15, "Last Name must be 2 to 15 characters long."),
        number_of_employee: Yup.string()
            .required('No of employee is required').matches(/^\d+$/, "Only Numbers are Allowed"),
        business_sector: Yup.string()
            .required('Business Sector is required').matches(/^\d+$/, "Only Numbers are Allowed"),
        feedback_frequency: Yup.string()
            .required('feed back Frequency is required').matches(/^\d+$/, "Only Numbers are Allowed"),
        average_employee_compansation: Yup.string()
            .required('Average Employee Compansation is required').matches(/^\d+$/, "Only Numbers are Allowed"),
        date_of_inception: Yup.number()
            .required('Date of Inception is required'),
        current_package: Yup.string()
            .required('Current PAckage is required').matches(/^\d+$/, "Only Numbers are Allowed"),
        username: Yup.string()
            .email('Company E-mail is invalid')
            .required('Company E-mail is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 charaters')
            .required('Password is required'),
    })
    const fileHandler = event => {
        setimageUpload(event.target.files[0]);
        if (event.target.files && event.target.files[0]) {
            setImageurl(URL.createObjectURL(event.target.files[0]))
            setimageUpload(event.target.files[0]);
        }
    }
    const OnSubmitForm = (values, props) => {

        var user_id = localStorage.getItem("user_id");
        const token = localStorage.getItem("jwt");
        var formdata = new FormData();
        formdata.append('company_name', values.company_name);
        formdata.append('company_logo', imageUpload);
        formdata.append('first_name', values.first_name);
        formdata.append('last_name', values.last_name);
        formdata.append('comapany_headquaters', values.comapany_headquaters);
        formdata.append('date_of_inception', values.date_of_inception);
        formdata.append('number_of_employee', values.number_of_employee);
        formdata.append('business_sector', values.business_sector);
        formdata.append('feedback_frequency', values.feedback_frequency);
        formdata.append('average_employee_compansation', values.average_employee_compansation);
        formdata.append('current_package', values.current_package);
        formdata.append('username', values.username);
        formdata.append('password', values.password);
        formdata.append('created_by', user_id);
        formdata.append('updated_by', user_id);
        formdata.append('created_on', "2021/02/02");
        console.log(formdata.get('company_logo'));
        console.log(JSON.stringify(formdata.get('current_package')));

        var raw = JSON.stringify({
            company_name: values.company_name,
            company_logo: imageUpload,
            comapany_headquaters: values.comapany_headquaters,
            date_of_inception: values.date_of_inception,
            number_of_employee: values.number_of_employee,
            business_sector: values.business_sector,
            feedback_frequency: values.feedback_frequency,
            average_employee_compansation: values.average_employee_compansation,
            current_package: values.current_package,
            username: values.username,
            password: values.password,
            created_by: user_id,
            updated_by: user_id,
        });

        var config = {
            method: 'post',
            url: APIUrl + `/company`,
            headers: {
                'Authorization': token,
                'Content-Type': 'multipart/form-data'
            },
            data: formdata
        };
        console.log(config);
        axios(config).then(function (response) {
            console.log(JSON.stringify(response.data));
            if (response.data.status == 200) {
                setConfirmDialog({
                    isOpen: true,
                    title: 'Alert',
                    subTitle: "Company Added Successfully",
                })
            }
            if (response.data.status == 400) {
                setConfirmDialog({
                    isOpen: true,
                    title: 'Error',
                    subTitle: "Company Already Exist With this E-mail,Plaese Change E-mail and try again",
                })
            }
        })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div>
            <div id="main">
                {loading ? (
                    <div className="MuiCircularProgress-root ">
                        <Spinner size={120} spinnerColor={"#748ad0"} visible={true} />
                    </div>
                ) : (
                    <div className="row">
                        <div className="content-wrapper-before gradient-45deg-indigo-purple"></div>
                        <div className="col s9">
                            <div className="breadcrumbs-dark pb-0 pt-4" id="breadcrumbs-wrapper">
                                {/* <!-- Search for small screen--> */}
                                <div className="container">
                                    <div className="row">
                                        <div className="col s10 m6 l6">
                                            <h5 className="breadcrumbs-title mt-0 mb-0"><span>Add Company</span></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col s3">
                            <div className="invoice-create-btn mt-10 right pr-5">
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
                                                        validateOnBlur={false}
                                                        validateOnChange={false}
                                                        validationSchema={validate}
                                                        onSubmit={(values, props) => {
                                                            OnSubmitForm(values, props)
                                                        }}
                                                    >
                                                        {formik => (
                                                            <Form>
                                                                {getFeedback ? (
                                                                    <div>
                                                                        <div className="row">
                                                                            <TextField label="Company Name" elementType="add" name="company_name" type="text" />
                                                                            {/* <TextField label="Company Headquaters" elementType="add" name="comapany_headquaters" type="text" /> */}
                                                                            <div className="col m6 s12 padtb">
                                                                                <label>Company Headquaters</label>
                                                                                <CustomSelect
                                                                                    className='select-dropdown dropdown-trigger'
                                                                                    onChange={value => formik.setFieldValue('comapany_headquaters', value.value)}
                                                                                    value={formik.values.comapany_headquaters}
                                                                                    options={getHeadquater}
                                                                                    Field={'Headquaters'}
                                                                                    Fieldname={'comapany_headquaters'}
                                                                                />
                                                                                {formik.errors.comapany_headquaters ? <div className='error'>{formik.errors.comapany_headquaters}</div> : null}
                                                                            </div>
                                                                        </div>
                                                                        <div className="row">
                                                                            <TextField label="First Name" elementType="add" name="first_name" type="text" />
                                                                            <TextField label="Last Name" elementType="add" name="last_name" type="text" />
                                                                        </div>
                                                                        <div className="row">
                                                                            <TextField label="Company E-mail" elementType="add" name="username" type="text" />
                                                                            <TextField label="Password" elementType="add" name="password" type="password" />
                                                                        </div>
                                                                        <div className="row">
                                                                            {/* <TextField label="Number of Employees" elementType="add" name="number_of_employee" type="text" /> */}
                                                                            {/* <TextField label="Business Sector" elementType="add" name="business_sector" type="text" /> */}
                                                                            <div className="col m6 s12 padtb">
                                                                                <label>Number of Employees</label>
                                                                                <CustomSelect
                                                                                    className='select-dropdown dropdown-trigger'
                                                                                    onChange={value => formik.setFieldValue('number_of_employee', value.value)}
                                                                                    value={formik.values.number_of_employee}
                                                                                    options={getEmployee}
                                                                                    Field={'Employee'}
                                                                                    Fieldname={'number_of_employee'}
                                                                                />
                                                                                {formik.errors.number_of_employee ? <div className='error'>{formik.errors.number_of_employee}</div> : null}
                                                                            </div>
                                                                            <div className="col m6 s12 padtb">
                                                                                <label>Business Sector</label>
                                                                                <CustomSelect
                                                                                    className='select-dropdown dropdown-trigger'
                                                                                    onChange={value => formik.setFieldValue('business_sector', value.value)}
                                                                                    value={formik.values.business_sector}
                                                                                    options={getSector}
                                                                                    Field={'Sector'}
                                                                                    Fieldname={'business_sector'}
                                                                                />
                                                                                {formik.errors.business_sector ? <div className='error'>{formik.errors.business_sector}</div> : null}
                                                                            </div>
                                                                        </div>
                                                                        <div className="row">
                                                                            {/* <TextField label="Average Employee Compansation" elementType="add" name="average_employee_compansation" type="text" /> */}
                                                                            <div className="col m6 s12 padtb">
                                                                                <label>Average Employee Annual Compansation</label>
                                                                                <CustomSelect
                                                                                    className='select-dropdown dropdown-trigger'
                                                                                    onChange={value => formik.setFieldValue('average_employee_compansation', value.value)}
                                                                                    value={formik.values.average_employee_compansation}
                                                                                    options={getAvgEmployee}
                                                                                    Field={'AvgEmployee'}
                                                                                    Fieldname={'average_employee_compansation'}
                                                                                />
                                                                                {formik.errors.average_employee_compansation ? <div className='error'>{formik.errors.average_employee_compansation}</div> : null}
                                                                            </div>
                                                                            <div className="col m6 s12 padtb">
                                                                                <label>Feedback Frequency</label>
                                                                                <CustomSelect
                                                                                    className='select-dropdown dropdown-trigger'
                                                                                    onChange={value => formik.setFieldValue('feedback_frequency', value.value)}
                                                                                    value={formik.values.feedback_frequency}
                                                                                    options={getFeedback}
                                                                                    Field={'FeedBack'}
                                                                                    Fieldname={'feedback_frequency'}
                                                                                />
                                                                                {formik.errors.feedback_frequency ? <div className='error'>{formik.errors.feedback_frequency}</div> : null}
                                                                            </div>
                                                                            {/* <TextField label="Feedback Frequency" elementType="add" name="feedback_frequency" type="text" /> */}
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="col m6 s12 padtb">
                                                                                <label>Year of Business Inception  </label>
                                                                                <CustomSelect
                                                                                    search={true}
                                                                                    className='select-dropdown dropdown-trigger'
                                                                                    onChange={value => formik.setFieldValue('date_of_inception', value.value)}
                                                                                    value={formik.values.date_of_inception}
                                                                                    options={years}
                                                                                    Field="Bussiness"
                                                                                />
                                                                                {formik.errors.date_of_inception ? <div className='error'>{formik.errors.date_of_inception}</div> : null}
                                                                            </div>
                                                                            <div className="col m6 s12 padtb">
                                                                                <label>Current Package</label>
                                                                                <CustomSelect
                                                                                    search={true}
                                                                                    className='select-dropdown dropdown-trigger'
                                                                                    onChange={value => formik.setFieldValue('current_package', value.value)}
                                                                                    value={formik.values.current_package}
                                                                                    options={packages}
                                                                                    Field="Package"
                                                                                />
                                                                                {formik.errors.current_package ? <div className='error'>{formik.errors.current_package}</div> : null}
                                                                            </div>
                                                                            {/* <TextField label="Date of Inception" elementType="add" name="date_of_inception" type="date" /> */}
                                                                            {/* <TextField label="Date of Inception" elementType="add" name="date_of_inception" type="date" /> */}
                                                                            {/* <TextField class="file-path validate"  elementType="add_file" name="company_logo"  type="file" fileHandler={fileHandler}/> */}
                                                                            {/* <input type="file" onChange={fileHandler} />
                                                                            <img src={imageurl} className="comapnylogoimg" width="120" height="85" /> */}
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className=" col s12">
                                                                                <div>
                                                                                    <label>Company Logo</label>
                                                                                </div>
                                                                                <div>
                                                                                    <input type="file" onChange={fileHandler} />
                                                                                    {imageurl ? (
                                                                                        <img src={imageurl} className="comapnylogoimg" width="120" height="85" />) : (null)}
                                                                                    {/* <div className="col m6 s12 padtb">
                                                                                       </div> */}
                                                                                </div>
                                                                            </div>
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
                            <Notification
                                notify={notify}
                                setNotify={setNotify}
                            />
                            <div className="content-overlay"></div>
                        </div>
                    </div>
                )}
            </div>
            <MaxWidthDialog setConfirmDialog={setConfirmDialog} confirmDialog={confirmDialog} link={'/companies/view'} />
        </div >
    )
}
export default AddCompany;