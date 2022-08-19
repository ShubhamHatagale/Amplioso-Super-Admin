import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import EditTextField from "../../../components/EditTextField";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ErrorMessage, useField } from "formik";
import { useLocation } from "react-router-dom";
import * as moment from "moment";
import M from "materialize-css";
import CustomSelect from "../../../components/SelectEdit";
import MaxWidthDialog from '../../../components/AlertDialogBox';
import { getAllEmployeeApi } from '../../Services/AllEmployee'
import { getAllAvgEmployeeApi } from '../../Services/AllAvgEmployee'
import { getAllFeedbackApi } from '../../Services/AllFeedback'
import { getAllSectorApi } from '../../Services/AllSector'
import { getAllHeadquatersApi } from '../../Services/AllHeadquaters'
import { getAllPackagesApi } from '../../Services/AllPackages'
import Spinner from 'react-spinner-material';
import getYear from "date-fns/getYear";

function EditComapy(props) {
  const location = useLocation();
  const history = useHistory();
  const range = (start, end) => {
    return new Array((end + 1) - start).fill().map((d, i) => i + start);
  };
  const years = range(1800, (getYear(new Date())));

  const APIUrl = process.env.REACT_APP_Base_URL;
  let [showEdit, setshowEdit] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  let [employeeId, setemployeeId] = useState('')
  let [employeeName, setemployeeName] = useState('')
  let [avgemployeeName, setavgemployeeName] = useState('')
  let [sectorddlName, setsectorddlName] = useState('')
  let [FeedbackddlName, setFeedbackddlName] = useState('')
  let [headquatersIdName, setHeadquatersIdName] = useState('')
  let [packagesIdName, setPackagesIdName] = useState('')
  let [packages, setgetPackage] = useState('');
  let [imageUpload, setimageUpload] = useState("");
  let [comid, setcomid] = useState('')
  let [imageurl, setImageurl] = useState('')
  let [getSector, setgetSector] = useState('');
  let [getEmployee, setgetEmployee] = useState('');
  const [getHeadquater, setgetHeadquater] = useState('');
  let [getAvgEmployee, setgetAvgEmployee] = useState('');
  const token = localStorage.getItem("jwt");
  let [getFeedback, setgetFeedback] = useState('');
  const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '', type: '' })
  let [loading, setLoading] = useState(false);
  const yearOfInception = [];
  const BackBtn = () => {
    history.push("/companies/view");
  }
  const onInputChange = (e) => { 
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };
  const fileHandler = (event) => {
    if (event.target.files && event.target.files[0]) {
      // setimageUpload(URL.createObjectURL(event.target.files[0]))
      setImageurl(URL.createObjectURL(event.target.files[0]))
      setimageUpload(event.target.files[0]);
    }
  };

  useEffect(() => {
    getAllSector();
    getAllEmployee();
    getAllAvgEmployee();
    getAllFeedback();
    getHeadquaters();
    getAllPackage();
    const fetchData = async () => {
      let id = location.state.detail;
      setcomid(location.state.detail);
      //   setformType(location.state.type);
      if (location.state.type == "Edit") {
        setshowEdit(true);
      }
      const token = localStorage.getItem("jwt");
      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'multipart/form-data')
      myHeaders.append("Authorization", token);
      // console.log(myHeaders)
      let res = await fetch(
        APIUrl + `/company/${id}`,
        {
          method: "get",
          headers: myHeaders
        }
      );
      let response = await res.json();
      let result = response.data;
      result.map((item, key) => {
        // let Newdate = moment(item.date_of_inception).format("YYYY-MM-DD");
        // console.log(Newdate);
        // console.log(moment(item.date_of_inception).format("YYYY"));
        yearOfInception[0] = item.date_of_inception;
        console.log(yearOfInception);
        setemployeeId(item.number_of_employee);
        setSelectedUser({
          company_name: item.company_name,
          company_logo: item.company_logo,
          comapany_headquaters: item.comapany_headquaters,
          feedback_frequency: item.feedback_frequency,
          average_employee_compansation: item.average_employee_compansation,
          business_sector: item.business_sector,
          number_of_employee: item.number_of_employee,
          current_package: item.current_package,
          date_of_inception: yearOfInception,
          username: item.username,
          password: item.password,
          first_name: item.first_name,
          last_name: item.last_name,
        });
        setImageurl("http://dev.amplioso.com/images/" + item.company_logo)
        const fetchEmployeeddl = async () => {
          const employee = await getAllEmployeeApi(item.number_of_employee)
          setemployeeName(employee)
        };
        const fetchAvgEmployeeddl = async () => {
          const avgemployee = await getAllAvgEmployeeApi(item.average_employee_compansation)
          setavgemployeeName(avgemployee)
        };
        const fetchSectorddl = async () => {
          console.log(item.business_sector)
          const sector = await getAllSectorApi(item.business_sector);
          setsectorddlName(sector)
        };
        const fetchFeedbackddl = async () => {
          const feedback = await getAllFeedbackApi(item.feedback_frequency)
          setFeedbackddlName(feedback)
        };
        const fetchHeadquatersId = async () => {
          const feedback = await getAllHeadquatersApi(item.comapany_headquaters)
          setHeadquatersIdName(feedback);
        };
        const fetchPackageId = async () => {
          const feedback = await getAllPackagesApi(item.current_package)
          setPackagesIdName(feedback);
        };
        fetchHeadquatersId();
        fetchEmployeeddl();
        fetchAvgEmployeeddl();
        fetchSectorddl();
        fetchFeedbackddl();
        fetchPackageId();
      });
    };
    fetchData();

    console.log("current Year " + (getYear(new Date()) + 1));
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, [location]);


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
    console.log("Headquaters");
    console.log(result);
    setgetHeadquater(result);
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

  const validate = Yup.object({
    company_name: Yup.string()
      .matches(
        /^.[a-zA-Z0-9-.]+$/,
        {
          message: 'Allow  only Alphanumric dash and dot',
          excludeEmptyString: true,
        },
      )
      .required('Comapny Name is required').min(2, "Company Name must be minimum 2 characters long").max(100, "Company Name must be 2 to 15 characters long."),
    comapany_headquaters: Yup.string()
      .required('Comapany Headquater is required').matches(/^\d+$/, "Only Numbers are Allowed"),
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
    date_of_inception: Yup.date()
      .required('Date of Inception is required'),
    current_package: Yup.string()
      .required('Current PAckage is required').matches(/^\d+$/, "Only Numbers are Allowed"),
    username: Yup.string()
      .email('Company E-mail is invalid')
      .required('Company E-mail is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
  });

  const OnSubmitForm = async (values, props) => {
    var myHeaders = new Headers();
    const token = localStorage.getItem("jwt");
    var user_id = localStorage.getItem("user_id");
    myHeaders.append("Authorization", token);

    var formdata = new FormData();
    formdata.append('company_name', values.company_name);
    if (imageUpload) {
      formdata.append("company_logo", imageUpload, imageUpload.name);
    }
    formdata.append('comapany_headquaters', values.comapany_headquaters);
    formdata.append('date_of_inception', values.date_of_inception);
    formdata.append('first_name', values.first_name);
    formdata.append('last_name', values.last_name);
    formdata.append('number_of_employee', values.number_of_employee);
    formdata.append('business_sector', values.business_sector);
    formdata.append('feedback_frequency', values.feedback_frequency);
    formdata.append('average_employee_compansation', values.average_employee_compansation);
    formdata.append('current_package', values.current_package);
    formdata.append('username', values.username);
    formdata.append('password', values.password);
    formdata.append("updated_by", user_id);
    formdata.append("is_deleted", "0");
    formdata.append("createdAt", "2021-02-13");
    formdata.append("updatedAt", "2021-02-16");

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };
    fetch(APIUrl + `/company/${comid}`, requestOptions)
      .then(response => response.json())
      .then(resData => {
        if (resData.status == 200) {
          setConfirmDialog({
            isOpen: true,
            title: 'Alert',
            subTitle: "Company Updated Successfully",
          })
        }
        if (resData.status == 400) {
          setConfirmDialog({
            isOpen: true,
            title: 'Error',
            subTitle: "Company Already Exist With this E-mail,Plaese Change E-mail and try again",
          })
        }
      })
      .catch(error => console.log('error', error));
  };


  return (
    <div>
      <div id="main">
        {loading ? (
          <div className="MuiCircularProgress-root">
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
                      <h5 className="breadcrumbs-title mt-0 mb-0"><span>{showEdit ? "Edit" : "View"} Company</span></h5>
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
                      <div
                        id="Form-advance"
                        className="card card card-default scrollspy"
                      >
                        {showEdit ? (
                          <div className="card-content">
                            <Formik
                              initialValues={selectedUser}
                              enableReinitialize
                              validateOnBlur={false}
                              validateOnChange={false}
                              validationSchema={validate}
                              onSubmit={(values, props) => {
                                OnSubmitForm(values, props);
                              }}
                            >
                              {(formik) => (
                                <Form>
                                  {getSector && getEmployee && getAvgEmployee && getFeedback && employeeName && sectorddlName && FeedbackddlName && avgemployeeName && headquatersIdName ? (
                                    <div>
                                      <div className="row">
                                        <EditTextField
                                          label="Company Name"
                                          elementtype="edit"
                                          name="company_name"
                                          type="text"
                                          onInputChange={onInputChange}
                                          value={selectedUser.company_name}
                                        />
                                        <div className="col m6 s12 padtb">
                                          <label>Company Headquaters</label>
                                          <CustomSelect
                                            onChange={value => formik.setFieldValue('comapany_headquaters', value)}
                                            value={formik.values.comapany_headquaters}
                                            defValue={headquatersIdName}
                                            options={getHeadquater}
                                            Field={'Headquaters'}
                                            Fieldname={'comapany_headquaters'}
                                            className='select-dropdown dropdown-trigger'
                                          />
                                          {formik.errors.number_of_employee ? <div className='error'>{formik.errors.number_of_employee}</div> : null}
                                        </div>
                                      </div>
                                      <div className="row">
                                        <EditTextField
                                          label="First Name"
                                          elementtype="edit"
                                          name="first_name"
                                          type="text"
                                          onInputChange={onInputChange}
                                          value={selectedUser.first_name}
                                        />
                                        <EditTextField
                                          label="Last Name"
                                          elementtype="edit"
                                          name="last_name"
                                          type="text"
                                          value={selectedUser.last_name}
                                          onInputChange={onInputChange}
                                        />
                                      </div>
                                      <div className="row">
                                        <EditTextField
                                          label="Company E-mail"
                                          elementtype="edit"
                                          name="username"
                                          type="text"
                                          onInputChange={onInputChange}
                                          value={selectedUser.username}
                                        />
                                        <EditTextField
                                          label="Password"
                                          elementtype="edit"
                                          name="password"
                                          type="password"
                                          value={selectedUser.password}
                                          onInputChange={onInputChange}
                                        />
                                      </div>
                                      <div className="row">
                                        {/* <EditTextField
                                          label="Number of Employees"
                                          elementtype="edit"
                                          name="number_of_employee"
                                          type="text"
                                          value={selectedUser.number_of_employee}
                                          onInputChange={onInputChange}
                                        /> */}
                                        <div className="col m6 s12 padtb">
                                          <label>Number of Employees</label>
                                          <CustomSelect
                                            className='select-dropdown dropdown-trigger'
                                            onChange={value => formik.setFieldValue('number_of_employee', value)}
                                            value={formik.values.number_of_employee}
                                            defValue={employeeName}
                                            options={getEmployee}
                                            Field={'Employee'}
                                            Fieldname={'number_of_employee'}
                                          />
                                          {formik.errors.number_of_employee ? <div className='error'>{formik.errors.number_of_employee}</div> : null}
                                        </div>
                                        {/* <EditTextField
                                            label="Business Sector"
                                            elementtype="edit"
                                            className="active"
                                            name="business_sector"
                                            type="text"
                                            value={selectedUser.business_sector}
                                            onInputChange={onInputChange}
                                          /> */}
                                        <div className="col m6 s12 padtb">
                                          <label>Business Sector</label>
                                          <CustomSelect
                                            className='select-dropdown dropdown-trigger'
                                            onChange={value => formik.setFieldValue('business_sector', value)}
                                            value={formik.values.business_sector}
                                            defValue={sectorddlName}
                                            options={getSector}
                                            Field={'Sector'}
                                            Fieldname={'business_sector'}
                                          />
                                          {formik.errors.business_sector ? <div className='error'>{formik.errors.business_sector}</div> : null}
                                        </div>
                                      </div>
                                      <div className="row">
                                        {/* <EditTextField
                                            label="Average Employee Compansation"
                                            elementtype="edit"
                                            name="average_employee_compansation"
                                            type="text"
                                            value={selectedUser.average_employee_compansation}
                                            onInputChange={onInputChange}
                                          /> */}
                                        <div className="col m6 s12 padtb">
                                          <label>Average Employee Compansation</label>
                                          <CustomSelect
                                            className='select-dropdown dropdown-trigger'
                                            onChange={value => formik.setFieldValue('average_employee_compansation', value)}
                                            value={formik.values.average_employee_compansation}
                                            defValue={avgemployeeName}
                                            options={getAvgEmployee}
                                            Field={'AvgEmployee'}
                                            Fieldname={'average_employee_compansation'}
                                          />
                                          {formik.errors.average_employee_compansation ? <div className='error'>{formik.errors.average_employee_compansation}</div> : null}
                                        </div>
                                        {/* <EditTextField
                                          label="Feedback Frequency"
                                          elementtype="edit"
                                          name="feedback_frequency"
                                          type="text"
                                          value={selectedUser.feedback_frequency}
                                          onInputChange={onInputChange}
                                        /> */}
                                        <div className="col m6 s12 padtb">
                                          <label>Feedback Frequency</label>
                                          <CustomSelect
                                            className='select-dropdown dropdown-trigger'
                                            onChange={value => formik.setFieldValue('feedback_frequency', value)}
                                            value={formik.values.feedback_frequency}
                                            defValue={FeedbackddlName}
                                            options={getFeedback}
                                            Field={'FeedBack'}
                                            Fieldname={'feedback_frequency'}
                                          />
                                          {formik.errors.feedback_frequency ? <div className='error'>{formik.errors.feedback_frequency}</div> : null}
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col m6 s12 padtb">
                                          <label>Year of Business Inception </label>
                                          <CustomSelect
                                            className='select-dropdown dropdown-trigger'
                                            onChange={value => formik.setFieldValue('date_of_inception', value)}
                                            value={formik.values.date_of_inception}
                                            defValue={selectedUser.date_of_inception}
                                            options={years}
                                            Field={'Bussiness'}
                                            Fieldname={'date_of_inception'}
                                          />
                                          {formik.errors.date_of_inception ? <div className='error'>{formik.errors.date_of_inception}</div> : null}
                                        </div>
                                        <div className="col m6 s12 padtb">
                                          <label>Current Package</label>
                                          <CustomSelect
                                            className='select-dropdown dropdown-trigger'
                                            onChange={value => formik.setFieldValue('current_package', value)}
                                            value={formik.values.current_package}
                                            defValue={packagesIdName}
                                            options={packages}
                                            Field={'Package'}
                                            Fieldname={'current_package'}
                                          />
                                          {formik.errors.current_package ? <div className='error'>{formik.errors.current_package}</div> : null}
                                        </div>
                                        {/* <EditTextField
                                          label="Date of Inception"
                                          elementType="edit"
                                          name="date_of_inception"
                                          type="date"
                                          value={selectedUser.date_of_inception}
                                          onInputChange={onInputChange}
                                        /> */}
                                        {/* <TextField class="file-path validate"  elementType="add_file" name="company_logo"  type="file" fileHandler={fileHandler}/> */}
                                        {/* <input type="file" onChange={fileHandler} />
                                        <img src={imageurl} className="comapnylogoimg" width="120" height="85" /> */}
                                      </div>
                                      <div className="row">
                                        {/* <div className="col s12">
                                          <input type="file" onChange={fileHandler} />
                                          <img src={imageurl} className="comapnylogoimg" width="120" height="85" />
                                        </div> */}
                                        <div className=" col s12">
                                          <div>
                                            <label>Company Logo</label>
                                          </div>
                                          <div>
                                            <input type="file" onChange={fileHandler} />
                                            {imageurl ? (
                                              <img src={imageurl} className="comapnylogoimg" width="120" height="85" />) : (null)}
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="row">
                                          <div className="input-field col s12">
                                            <button
                                              className="btn cyan  waves-light gen_btn"
                                              type="submit"
                                              name="action"
                                            >
                                              Update
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  ) : (null)}
                                </Form>
                              )}
                            </Formik>
                          </div>
                        ) : (
                          // View Form Start From Here
                          <div className="card-content">
                            <Formik
                              initialValues={selectedUser}
                              enableReinitialize
                              validationSchema={validate}
                              onSubmit={(values, props) => {
                                OnSubmitForm(values, props);
                              }}
                            >
                              {(formik) => (
                                <Form>
                                  {getSector && getEmployee && getAvgEmployee && getFeedback && employeeName && sectorddlName && FeedbackddlName && avgemployeeName && headquatersIdName ? (
                                    <div>
                                      <div className="row">
                                        <EditTextField
                                          label="Company Name"
                                          elementtype="edit"
                                          name="company_name"
                                          type="text"
                                          onInputChange={onInputChange}
                                          value={selectedUser.company_name}
                                          disabled
                                        />
                                        <div className="col m6 s12 padtb">
                                          <label>Company Headquaters</label>
                                          <CustomSelect
                                            onChange={value => formik.setFieldValue('comapany_headquaters', value)}
                                            value={formik.values.comapany_headquaters}
                                            defValue={headquatersIdName}
                                            options={getHeadquater}
                                            Field={'Headquaters'}
                                            Fieldname={'comapany_headquaters'}
                                            className='select-dropdown dropdown-trigger'
                                            disable={1} />
                                          {formik.errors.number_of_employee ? <div className='error'>{formik.errors.number_of_employee}</div> : null}
                                        </div>
                                      </div>
                                      <div className="row">
                                        <EditTextField
                                          label="First Name"
                                          elementtype="edit"
                                          name="first_name"
                                          type="text"
                                          onInputChange={onInputChange}
                                          value={selectedUser.first_name}
                                          disabled
                                        />
                                        <EditTextField
                                          label="Last Name"
                                          elementtype="edit"
                                          name="last_name"
                                          type="text"
                                          value={selectedUser.last_name}
                                          onInputChange={onInputChange}
                                          disabled
                                        />
                                      </div>
                                      <div className="row">
                                        <EditTextField
                                          label="Company E-mail"
                                          elementtype="edit"
                                          name="username"
                                          type="text"
                                          onInputChange={onInputChange}
                                          value={selectedUser.username}
                                          disabled
                                        />
                                        <EditTextField
                                          label="Password"
                                          elementtype="edit"
                                          name="password"
                                          type="password"
                                          value={selectedUser.password}
                                          onInputChange={onInputChange}
                                          disabled
                                        />
                                      </div>
                                      <div className="row">
                                        <div className="col m6 s12 padtb">
                                          <label>Number of Employees</label>
                                          <CustomSelect
                                            className='select-dropdown dropdown-trigger'
                                            onChange={value => formik.setFieldValue('number_of_employee', value)}
                                            value={formik.values.number_of_employee}
                                            defValue={employeeName}
                                            options={getEmployee}
                                            Field={'Employee'}
                                            Fieldname={'number_of_employee'}
                                            disable={1}
                                          />
                                          {formik.errors.number_of_employee ? <div className='error'>{formik.errors.number_of_employee}</div> : null}
                                        </div>
                                        <div className="col m6 s12 padtb">
                                          <label>Business Sector</label>
                                          <CustomSelect
                                            className='select-dropdown dropdown-trigger'
                                            onChange={value => formik.setFieldValue('business_sector', value)}
                                            value={formik.values.business_sector}
                                            defValue={sectorddlName}
                                            options={getSector}
                                            Field={'Sector'}
                                            Fieldname={'business_sector'}
                                            disable={1}
                                          />
                                          {formik.errors.business_sector ? <div className='error'>{formik.errors.business_sector}</div> : null}
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col m6 s12 padtb">
                                          <label>Average Employee Annual Compansation</label>
                                          <CustomSelect
                                            className='select-dropdown dropdown-trigger'
                                            onChange={value => formik.setFieldValue('average_employee_compansation', value)}
                                            value={formik.values.average_employee_compansation}
                                            defValue={avgemployeeName}
                                            options={getAvgEmployee}
                                            Field={'AvgEmployee'}
                                            Fieldname={'average_employee_compansation'}
                                            disable={1}
                                          />
                                          {formik.errors.average_employee_compansation ? <div className='error'>{formik.errors.average_employee_compansation}</div> : null}
                                        </div>
                                        <div className="col m6 s12 padtb">
                                          <label>Feedback Frequency</label>
                                          <CustomSelect
                                            className='select-dropdown dropdown-trigger'
                                            onChange={value => formik.setFieldValue('feedback_frequency', value)}
                                            value={formik.values.feedback_frequency}
                                            defValue={FeedbackddlName}
                                            options={getFeedback}
                                            Field={'FeedBack'}
                                            Fieldname={'feedback_frequency'}
                                            disable={1}
                                          />
                                          {formik.errors.feedback_frequency ? <div className='error'>{formik.errors.feedback_frequency}</div> : null}
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col m6 s12 padtb">
                                          <label>Year of Business Inception </label>
                                          <CustomSelect
                                            className='select-dropdown dropdown-trigger'
                                            onChange={value => formik.setFieldValue('date_of_inception', value)}
                                            value={formik.values.date_of_inception}
                                            defValue={selectedUser.date_of_inception}
                                            options={years}
                                            Field={'Bussiness'}
                                            Fieldname={'date_of_inception'}
                                            disable={1}
                                          />
                                          {formik.errors.date_of_inception ? <div className='error'>{formik.errors.date_of_inception}</div> : null}
                                        </div>
                                        <div className="col m6 s12 padtb">
                                          <label>Current Package</label>
                                          <CustomSelect
                                            className='select-dropdown dropdown-trigger'
                                            onChange={value => formik.setFieldValue('current_package', value)}
                                            value={formik.values.current_package}
                                            defValue={packagesIdName}
                                            options={packages}
                                            Field={'Package'}
                                            Fieldname={'current_package'}
                                            disable={1}
                                          />
                                          {formik.errors.current_package ? <div className='error'>{formik.errors.current_package}</div> : null}
                                        </div>
                                        {/* <TextField class="file-path validate"  elementType="add_file" name="company_logo"  type="file" fileHandler={fileHandler}/> */}
                                        {/* <input
                                          type="file"
                                          onChange={fileHandler}
                                          disabled
                                        />
                                        <img src={imageurl} className="comapnylogoimg" width="120" height="85" /> */}
                                      </div>
                                      <div className="row">
                                        <div className=" col s12">
                                          <div>
                                            <label>Company Logo</label>
                                          </div>
                                          <div>
                                            <input type="file" onChange={fileHandler} disabled />
                                            {imageurl ? (
                                              <img src={imageurl} className="comapnylogoimg" width="120" height="85" />) : (null)}
                                          </div>
                                        </div>
                                        {/* <div className="col s12 ">
                                          <input
                                            type="file"
                                            onChange={fileHandler}
                                            disabled
                                          />
                                          <img src={imageurl} className="comapnylogoimg" width="120" height="85" />
                                        </div> */}
                                      </div>
                                    </div>
                                  ) : (null)}
                                </Form>
                              )}
                            </Formik>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-overlay"></div>
            </div>
          </div>
        )}
      </div>
      <MaxWidthDialog setConfirmDialog={setConfirmDialog} confirmDialog={confirmDialog} link={'/companies/view'} />
    </div>
  );
}
export default EditComapy;