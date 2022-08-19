import React, { useState, useEffect } from "react";
import TextField from "../../../components/TextField";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { useHistory } from "react-router-dom";
import RadioField from "../../../components/RadioField";
import RadioEdit from "../../../components/RadioEdit";
import Notification from "../../../components/Notification";
import M from "materialize-css";
import MaxWidthDialog from '../../../components/AlertDialogBox';

function AddForm(props) {
  const history = useHistory();
  const APIUrl = process.env.REACT_APP_Base_URL;
  const [notify, setNotify] = useState({ isOpen: false, message: '', type: '', header: '' })
  let [radioValue, setradioValue] = useState('Active');
  const [selectedUser, setSelectedUser] = useState({});
  const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '', type: '' })


  const initialValues = {
    average_employees: "",
    status: "",
  };
  const HandleStatus = (val) => {
    setradioValue(val)
  };
  const reload = () => {
    const current = props.location.pathname;
    props.history.replace(`/averageemployee/view`);
    setTimeout(() => {
      props.history.replace(current);
    });
  }


  const validate = Yup.object({
    average_employees: Yup.string().matches(/^[ A-Za-z0-9\$,-]*$/, {
      message: 'Allow only alphanumeric,doller,comma and dash',
      excludeEmptyString: true,
    }).required("Average Employee is required").min(2, "Average employee must be minimum 2 characters long").max(100, "Average Emplo must be 2 to 15 characters long."),
  });
  const BackBtn = () => {
    history.push("/averageemployee/view");
  }
  const OnSubmitForm = (values, props) => {
    const token = localStorage.getItem("jwt");
    var user_id = localStorage.getItem("user_id");
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      average_employees: values.average_employees,
      status: radioValue,
      created_on: "2021/02/02",
      created_by: user_id,
      updated_by: user_id,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(APIUrl + `/averageEmp`, requestOptions)
      .then((response) => response.json())
      .then((resData) => {
        if (resData.status === 200) {
          // console.log(resData)
          // M.toast({
          //   html: '<div class="<div class="card-alert card green" style="width: 450px;"><div class="card-content white-text"> <span class="card-title white-text darken-1"> <i class="material-icons">check</i><strong>Success</strong></span><p>Record Inserted Successfully.</p> </div></div>',
          //   classes: "#e#00e676 green accent-3",
          // });
          // const user = JSON.parse(localStorage.getItem("user"));
          // if (user) {
          //   history.push("/averageemployee/view");
          // } else {
          //   history.push("/");
          // }
          setConfirmDialog({
            isOpen: true,
            title: 'Alert',
            subTitle: "Average Employee Annual Compensation Added Successfully",
          })
        }
        props.resetForm();
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
                  <div className="col s12 m12 l12">
                    <h5 className="breadcrumbs-title mt-0 mb-0"><span>Add Average Empolyee Annual Compensation Range</span></h5>
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
                      <div className="card-content">
                        <Formik
                          initialValues={initialValues}
                          validationSchema={validate}
                          onSubmit={(values, props) => {
                            OnSubmitForm(values, props);
                          }}
                        >
                          {(formik) => (
                            <Form>
                              <div className="row">
                                <TextField
                                  label="Average Employee Annual Compensation range"
                                  elementType="add"
                                  name="average_employees"
                                  type="text"
                                />
                              </div>
                              <div className="row">
                                <div class="col m6 s12 redio_section">
                                  <p>Status</p>
                                  <RadioField
                                    label="Active"
                                    value="Active"
                                    name="status"
                                    HandleStatus={HandleStatus}
                                    isSelectedCheck={
                                      radioValue == "Active"
                                    }
                                  />
                                  <RadioField
                                    label="Inactive"
                                    value="Inactive"
                                    name="status"
                                    HandleStatus={HandleStatus}
                                    isSelectedCheck={
                                      radioValue == "Inactive"
                                    }
                                  />
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
                                      Save
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </Form>
                          )}
                        </Formik>
                      </div>
                    </div>
                  </div>
                  <Notification
                    notify={notify}
                    setNotify={setNotify}
                  />
                </div>
              </div>
            </div>
            <div className="content-overlay"></div>
          </div>
        </div>
      </div>
      <MaxWidthDialog setConfirmDialog={setConfirmDialog} confirmDialog={confirmDialog} link={'/averageemployee/view'} />\
    </div>
  );
}

export default AddForm;
