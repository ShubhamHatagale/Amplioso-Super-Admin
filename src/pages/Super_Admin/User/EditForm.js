import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import EditTextField from "../../../components/EditTextField";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ErrorMessage, useField } from "formik";
import { useLocation } from "react-router-dom"; 
import * as moment from "moment";
import M from "materialize-css";
import RadioEdit from "../../../components/RadioEdit";
import MaxWidthDialog from '../../../components/AlertDialogBox';
import { getAllRoleApi } from '../../Services/AllRole'


function EditForm(props) {
  const location = useLocation();
  const history = useHistory();
  const APIUrl = process.env.REACT_APP_Base_URL;
  let [showEdit, setshowEdit] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  let [radioValue, setradioValue] = useState("");
  let [result, setresult] = useState([]);
  let [roleddlName, setroleddlName] = useState('');
  const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '', type: '' })
  let [comid, setcomid] = useState("");
  const onInputChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };

  const BackBtn = () => {
    history.push("/user/view");
  }
  const HandleStatus = (val) => {
    console.log(val);
    setradioValue(val);
    result.map((item, key) => {
      setSelectedUser({
        first_name: selectedUser.first_name,
        last_name: selectedUser.last_name,
        // date: selectedUser.date,
        // date_of_joining: selectedUser.date_of_joining,
        // gender: val,
        // designation: selectedUser.designation,
        // role: selectedUser.role,
        // company_id: selectedUser.company_id,
        // address: selectedUser.address,
        mobile_no: selectedUser.mobile_no,
        user_email: selectedUser.user_email,
        username: selectedUser.username,
        password: selectedUser.password,
        created_by: selectedUser.created_by,
        updated_by: selectedUser.updated_by,
      });
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      let id = location.state.detail;
      // console.log(id)
      setcomid(location.state.detail);
      const token = localStorage.getItem("jwt");
      //   setformType(location.state.type);
      if (location.state.type == "Edit") {
        setshowEdit(true);
      }
      var myHeaders = new Headers();
      myHeaders.append("Authorization", token);
      myHeaders.append("Content-type", "application/json");

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      let res = await fetch(APIUrl + `/users/${id}`, requestOptions);
      let response = await res.json();
      let result = response.data;
      console.log(result)
      setresult(result);

      result.map((item, key) => {
        let DOB = moment(item.date).format("YYYY-MM-DD");
        let DOJ = moment(item.date_of_joining).format("YYYY-MM-DD");
        setSelectedUser({
          first_name: item.first_name,
          last_name: item.last_name,
          // date: DOB,
          // date_of_joining: DOJ,
          // gender: item.gender,
          // designation: item.designation,
          // role: item.role,
          // company_id: item.company_id,
          // address: item.address,
          mobile_no: item.mobile_no,
          user_email: item.user_email,
          username: item.username,
          password: item.password,
          created_by: item.created_by,
          updated_by: item.updated_by,
        });
        const fetchRoleddl = async () => {
          const role = await getAllRoleApi(item.role);
          setroleddlName(role)
        };
        fetchRoleddl();
      });
    };
    fetchData();
  }, [location]);

  const validate = Yup.object({
    first_name: Yup.string().matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed.")
      .required('First Name is required').min(2, "First Name must be minimum 2 characters long.").max(15, "First Name must be 2 to 15 characters long."),
    last_name: Yup.string().matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed.")
      .required('Last Name is required').min(2, "Last Name must be minimum 2 characters long").max(15, "Last Name must be 2 to 15 characters long."),
    //     date: Yup.date().required("Date of Birth is Required").max(new Date(), "Date cannot be in the Future"),    
    //     date_of_joining: Yup.date().required("Date of Joining is Required"),
    // designation: Yup.string().matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    //     .required('Designation is required').min(2, "Designation must be minimum 2 characters long").max(15,"Designation must be 2 to 15 characters long."),
    //     role: Yup.string().required('User Role is Required').matches(/^\d+$/,"Only Numbers are Allowed"),
    //     company_id: Yup.string().required('Company Id is Required').matches(/^\d+$/,"Only Numbers are Allowed"),        
    //     address: '',
    mobile_no: Yup.string()
      .required("Mobile Number is required")
      .matches(/^.[0-9-+]+$/, 'Mobile number is not valid')
      .min(10, "Mobile no must be 10 digits long.")
      .max(10, "Mobile no must be 10 digits long."),
    user_email: Yup.string().email().required('User Email is Required').matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, "Please enter a valid email."),
    username: Yup.string().required('Username Is Required'),
    password: Yup.string().required('Password is Required')
  });
  const OnSubmitForm = (values, props) => {
    console.log(JSON.stringify(values))
    const token = localStorage.getItem("jwt");
    var user_id = localStorage.getItem("user_id");
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", token);


    var raw = JSON.stringify({
      first_name: values.first_name,
      last_name: values.last_name,
      // date: values.date,
      // date_of_joining: values.date_of_joining,
      // gender: values.gender,
      // designation: values.designation,
      // role: values.role,
      // company_id: values.company_id,
      // address: values.address,
      mobile_no: values.mobile_no,
      user_email: values.user_email,
      username: values.username,
      password: values.password,
      created_on: "2021/02/02",
      created_by: user_id,
      updated_by: user_id,
      updated_on: "2021-02-02"
    });
    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(APIUrl + `/users/${comid}`, requestOptions)
      .then((response) => response.json())
      .then((resData) => {
        console.log(resData);
        if (resData.status == 200) {
          setConfirmDialog({
            isOpen: true,
            title: 'Alert',
            subTitle: "SuperAdmin User Updated Successfully",
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
  };

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
                    <h5 className="breadcrumbs-title mt-0 mb-0"><span>{showEdit ? "Edit" : "View"} SuperAdmin User</span></h5>
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
                          {/* {editRecord.map((item, key) => ( */}
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
                                <div>
                                  <div className="row">
                                    <EditTextField
                                      label="First Name"
                                      name="first_name"
                                      type="text"
                                      elementtype="edit"
                                      onInputChange={onInputChange}
                                      value={selectedUser.first_name}
                                    />
                                    <EditTextField
                                      label="Last Name"
                                      name="last_name"
                                      type="text"
                                      elementtype="edit"
                                      onInputChange={onInputChange}
                                      value={selectedUser.last_name}
                                    />
                                  </div>
                                  {/* <div className="row">
                                  <EditTextField
                                    label="DOB"
                                    className=""
                                    name="date"
                                    type="date"
                                    elementtype="edit"
                                    onInputChange={onInputChange}
                                    value={selectedUser.date}
                                  />
                                  <EditTextField
                                    label="Date of Joining"
                                    className=""
                                    name="date_of_joining"
                                    type="date"
                                    elementtype="edit"
                                    onInputChange={onInputChange}
                                    value={selectedUser.date_of_joining}
                                  />
                                </div>
                                <div class="row">
                                  <div class="col m6 s12 redio_section">
                                    <p>Gender</p>
                                    <RadioEdit
                                      label="Male"
                                      value="Male"
                                      name="group1"
                                      HandleStatus={HandleStatus}
                                      isSelectedCheck={
                                        selectedUser.gender == "Male"
                                      }
                                    />
                                    <RadioEdit
                                      label="Female"
                                      value="Female"
                                      name="group"
                                      HandleStatus={HandleStatus}
                                      isSelectedCheck={
                                        selectedUser.gender == "Female"
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="row">
                                  <EditTextField
                                    label="Designation"
                                    name="designation"
                                    type="text"
                                    elementtype="edit"
                                    onInputChange={onInputChange}
                                    value={selectedUser.designation}
                                  />
                                  <EditTextField
                                    label="User Role"
                                    name="role"
                                    type="text"
                                    elementtype="edit"
                                    onInputChange={onInputChange}
                                    value={selectedUser.role}
                                  />
                                </div>
                                <div className="row">
                                  <EditTextField
                                    label="Company Id"
                                    name="company_id"
                                    type="text"
                                    elementtype="edit"
                                    onInputChange={onInputChange}
                                    value={selectedUser.company_id}
                                  />
                                  <EditTextField
                                    label="Address"
                                    name="address"
                                    type="text"
                                    elementtype="edit"
                                    onInputChange={onInputChange}
                                    value={selectedUser.address}
                                  />
                                </div> */}
                                  <div className="row">
                                    <EditTextField
                                      label="Mobile Number"
                                      name="mobile_no"
                                      type="text"
                                      elementtype="edit"
                                      onInputChange={onInputChange}
                                      value={selectedUser.mobile_no}
                                    />
                                    <EditTextField
                                      label="User E-mail"
                                      name="user_email"
                                      type="text"
                                      elementtype="edit"
                                      onInputChange={onInputChange}
                                      value={selectedUser.user_email}
                                    />
                                  </div>
                                  <div className="row">
                                    <EditTextField
                                      label="Username "
                                      name="username"
                                      type="text"
                                      elementtype="edit"
                                      onInputChange={onInputChange}
                                      value={selectedUser.username}
                                    />
                                    <EditTextField
                                      label="Password"
                                      name="password"
                                      type="password"
                                      elementtype="edit"
                                      onInputChange={onInputChange}
                                      value={selectedUser.password}
                                    />
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
                                <div className="row">
                                  <EditTextField
                                    label="First Name"
                                    name="first_name"
                                    type="text"
                                    elementtype="View"
                                    onInputChange={onInputChange}
                                    value={selectedUser.first_name}
                                    disabled
                                  />
                                  <EditTextField
                                    label="Last Name"
                                    name="last_name"
                                    type="text"
                                    elementtype="View"
                                    onInputChange={onInputChange}
                                    value={selectedUser.last_name}
                                    disabled
                                  />
                                </div>
                                {/* <div className="row">
                                  <EditTextField
                                    label="DOB"
                                    className=""
                                    name="date"
                                    type="date"
                                    elementtype="View"
                                    onInputChange={onInputChange}
                                    value={selectedUser.date}
                                    disabled
                                  />
                                  <EditTextField
                                    label="Date of Joining"
                                    className=""
                                    name="date_of_joining"
                                    type="date"
                                    elementtype="View"
                                    onInputChange={onInputChange}
                                    value={selectedUser.date_of_joining}
                                    disabled
                                  />
                                </div>
                                <div class="row">
                                  <div class="col m6 s12 redio_section">
                                    <p>Gender</p>
                                    <RadioEdit
                                      label="Male"
                                      value="Male"
                                      name="group1"
                                      HandleStatus={HandleStatus}
                                      elementtype="View"
                                      isSelectedCheck={
                                        selectedUser.gender == "Male"
                                      }
                                      elementtype="View"
                                      disabled
                                    />
                                    <RadioEdit
                                      label="Female"
                                      value="Female"
                                      name="group1"
                                      HandleStatus={HandleStatus}
                                      elementtype="View"
                                      isSelectedCheck={
                                        selectedUser.gender == "Female"
                                      }
                                      elementtype="View"
                                      disabled
                                    />
                                  </div>
                                </div>
                                <div className="row">
                                  <EditTextField
                                    label="Designation"
                                    name="designation"
                                    type="text"
                                    elementtype="View"
                                    onInputChange={onInputChange}
                                    value={selectedUser.designation}
                                    disabled
                                  />
                                  <EditTextField
                                    label="User Role"
                                    name="role"
                                    type="text"
                                    elementtype="View"
                                    onInputChange={onInputChange}
                                    value={selectedUser.role}
                                    disabled
                                  />
                                </div>
                                <div className="row">
                                  <EditTextField
                                    label="Company Id"
                                    name="company_id"
                                    type="text"
                                    elementtype="View"
                                    onInputChange={onInputChange}
                                    value={selectedUser.company_id}
                                    disabled
                                  />
                                  <EditTextField
                                    label="Address"
                                    name="address"
                                    type="text"
                                    elementtype="View"
                                    onInputChange={onInputChange}
                                    value={selectedUser.address}
                                    disabled
                                  />
                                </div> */}
                                <div className="row">
                                  <EditTextField
                                    label="Mobile Number"
                                    name="mobile_no"
                                    type="text"
                                    elementtype="View"
                                    onInputChange={onInputChange}
                                    value={selectedUser.mobile_no}
                                    disabled
                                  />
                                  <EditTextField
                                    label="User E-mail"
                                    name="user_email"
                                    type="text"
                                    elementtype="View"
                                    onInputChange={onInputChange}
                                    value={selectedUser.user_email}
                                    disabled
                                  />
                                </div>
                                <div className="row">
                                  <EditTextField
                                    label="Username "
                                    name="username"
                                    type="text"
                                    elementtype="View"
                                    onInputChange={onInputChange}
                                    value={selectedUser.username}
                                    disabled
                                  />
                                  <EditTextField
                                    label="Password"
                                    name="password"
                                    type="password"
                                    elementtype="View"
                                    onInputChange={onInputChange}
                                    value={selectedUser.password}
                                    disabled
                                  />
                                </div>
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
      </div>
      <MaxWidthDialog setConfirmDialog={setConfirmDialog} confirmDialog={confirmDialog} link={'/user/view'} />
    </div>
  );
}
export default EditForm;
