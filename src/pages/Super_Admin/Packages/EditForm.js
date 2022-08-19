import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import EditTextField from "../../../components/EditTextField";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { useLocation } from "react-router-dom";
import * as moment from "moment";
import M from "materialize-css";
import MaxWidthDialog from '../../../components/AlertDialogBox';



function EditForm(props) {
  const location = useLocation();
  const history = useHistory();
  const APIUrl = process.env.REACT_APP_Base_URL;
  const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '', type: '' })

  let [showEdit, setshowEdit] = useState(false);
  let [result, setresult] = useState([]);

  const [selectedUser, setSelectedUser] = useState({});
  let [comid, setcomid] = useState('')
  const onInputChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };


  const BackBtn = () => {
    history.push("/package/view");
  }
  useEffect(() => {
    const fetchData = async () => {
      let id = location.state.detail;
      setcomid(location.state.detail);
      //   setformType(location.state.type);
      if (location.state.type == "Edit") {
        setshowEdit(true);
      }

      const token = localStorage.getItem("jwt");

      var myHeaders = new Headers();
      myHeaders.append("Authorization", token);

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      let res = await fetch(APIUrl + `/package/${id}`, requestOptions);
      let response = await res.json();
      let result = response.data;
      console.log(result)
      setresult(result);

      result.map((item, key) => {
        let StartDate = moment(item.start_date).format("YYYY-MM-DD");
        let EndDate = moment(item.end_date).format("YYYY-MM-DD");
        setSelectedUser({
          package_name: item.package_name,
          no_of_employees: item.no_of_employees,
          actual_price: item.actual_price,
          price: item.price,
          // start_date: StartDate,
          // end_date: EndDate,
        });
      });
    };
    fetchData();
  }, [location]);

  const validate = Yup.object({
    package_name: Yup.string()
      .required('Package Name is required').matches(/^[A-Za-z0-9-+/ ]+$/, "Please enter valid data"),
    no_of_employees:
      Yup.string().matches(/^[0-9+.-]+$/, {
        message: 'allow only number and dash',
      }).required("Number of Employee is required"),
    actual_price: Yup.string()
      .required('Actual Price is required').matches(/^[ A-Za-z0-9\$,-]*$/, "Allow only alphanumeric,doller,comma and dash"),
    price: Yup.string()
      .required('Price is required').matches(/^[ A-Za-z0-9\$,-]*$/, "Allow only alphanumeric,doller,comma and dash"),
    // start_date: Yup.date()
    //   .required('Start Date is required'),
    // end_date: Yup.date().min(
    //   Yup.ref('start_date'),
    //   "End date can't be before Start date"
    // )
  });
  const OnSubmitForm = async (values, props) => {
    const token = localStorage.getItem("jwt");
    var user_id = localStorage.getItem("user_id");
    // console.log(JSON.stringify(values))
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", token);

    var raw = JSON.stringify({
      "package_name": values.package_name,
      "no_of_employees": values.no_of_employees,
      actual_price: values.actual_price,
      price: values.price,
      // "start_date": values.start_date, 
      // "end_date": values.end_date, 
      created_on: "2021/02/02",
      created_by: user_id,
      updated_by: user_id,
      updated_on: "2021-02-02"
    });

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(APIUrl + `/package/${comid}`, requestOptions)
      .then(response => response.json())
      .then((resData) => {
        console.log(resData)
        if (resData.status == 200) {
          setConfirmDialog({
            isOpen: true,
            title: 'Alert',
            subTitle: "Package Updated Successfully",
          })
          // console.log(resData)
          // M.toast({
          //   html: '<div class="<div class="card-alert card green" style="width: 450px;"><div class="card-content white-text"> <span class="card-title white-text darken-1"> <i class="material-icons">check</i><strong>Success</strong></span><p>Record Updated Successfully.</p> </div></div>',
          //   classes: "#e#00e676 green accent-3",
          // });
          // const user = JSON.parse(localStorage.getItem("user"));
          // if (user) {
          //   history.push("/package/view");
          // }
        }
      })
      .catch(error => console.log('error', error));
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
                    <h5 className="breadcrumbs-title mt-0 mb-0"><span>{showEdit ? "Edit" : "View"} Package</span></h5>
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
                                <div className="row">
                                  <EditTextField
                                    label="Package Name"
                                    elementtype="edit"
                                    name="package_name"
                                    type="text"
                                    onInputChange={onInputChange}
                                    value={selectedUser.package_name}
                                  />
                                  <EditTextField
                                    label="Number of Employees"
                                    elementtype="edit"
                                    name="no_of_employees"
                                    type="text"
                                    value={selectedUser.no_of_employees}
                                    onInputChange={onInputChange}
                                  />
                                </div>
                                <div className="row">
                                  <EditTextField
                                    label="Actual Price"
                                    elementType="edit"
                                    name="actual_price"
                                    type="Text"
                                    value={selectedUser.actual_price}
                                    onInputChange={onInputChange}
                                  />
                                  <EditTextField
                                    label="Price"
                                    elementType="edit"
                                    name="price"
                                    type="Text"
                                    value={selectedUser.price}
                                    onInputChange={onInputChange}
                                  />
                                  {/* <EditTextField
                                    label="Start Date"
                                    elementType="edit"
                                    name="start_date"
                                    type="date"
                                    value={selectedUser.start_date}
                                    onInputChange={onInputChange}
                                  />
                                  <EditTextField
                                    label="End Date"
                                    elementType="edit"
                                    name="end_date"
                                    type="date"
                                    value={selectedUser.end_date}
                                    onInputChange={onInputChange}
                                  /> */}
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
                                    label="Package Name"
                                    elementtype="edit"
                                    name="package_name"
                                    type="text"
                                    onInputChange={onInputChange}
                                    value={selectedUser.package_name}
                                    disabled
                                  />
                                  <EditTextField
                                    label="Number of Employees"
                                    elementtype="edit"
                                    name="no_of_employees"
                                    type="text"
                                    value={selectedUser.no_of_employees}
                                    onInputChange={onInputChange}
                                    disabled
                                  />
                                </div>
                                <div className="row">
                                  {/* <EditTextField
                                    label="Start Date"
                                    elementType="edit"
                                    name="start_date"
                                    type="date"
                                    value={selectedUser.start_date}
                                    onInputChange={onInputChange}
                                    disabled
                                  />
                                  <EditTextField
                                    label="End Date"
                                    elementType="edit"
                                    name="end_date"
                                    type="date"
                                    value={selectedUser.end_date}
                                    onInputChange={onInputChange}
                                    disabled
                                  /> */}
                                  <EditTextField
                                    label="Actual Price"
                                    elementType="edit"
                                    name="actual_price"
                                    type="Text"
                                    value={selectedUser.actual_price}
                                    onInputChange={onInputChange}
                                    disabled
                                  />
                                  <EditTextField
                                    label="Price"
                                    elementType="edit"
                                    name="price"
                                    type="Text"
                                    value={selectedUser.price}
                                    onInputChange={onInputChange}
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
      <MaxWidthDialog setConfirmDialog={setConfirmDialog} confirmDialog={confirmDialog} link={'/package/view'} />
    </div>
  );
}
export default EditForm;
