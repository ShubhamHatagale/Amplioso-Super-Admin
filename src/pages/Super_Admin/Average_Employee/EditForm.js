import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import EditTextField from "../../../components/EditTextField";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { useLocation } from "react-router-dom";
import Notification from "../../../components/Notification";
import * as moment from "moment";
import RadioEdit from "../../../components/RadioEdit";
import M from "materialize-css";
import MaxWidthDialog from '../../../components/AlertDialogBox';



function EditForm(props) {
  const location = useLocation();
  const history = useHistory();
  const APIUrl = process.env.REACT_APP_Base_URL;
  let [showEdit, setshowEdit] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  let [radioValue, setradioValue] = useState("");
  const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '', type: '' })

  let [result, setresult] = useState([]);
  const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })
  let [comid, setcomid] = useState("");
  const onInputChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };
  const HandleStatus = (val) => {
    console.log(val);
    setradioValue(val);
    result.map((item, key) => {
      setSelectedUser({
        average_employees: selectedUser.average_employees,
        status: val,
      });
    });
  };

  const BackBtn = () => {
    history.push("/averageemployee/view");
  }
  useEffect(() => {
    const fetchData = async () => {
      let id = location.state.detail;
      setcomid(location.state.detail);
      const token = localStorage.getItem("jwt");

      if (location.state.type == "Edit") {
        setshowEdit(true);
      } var myHeaders = new Headers();
      myHeaders.append("Authorization", token);
      myHeaders.append("Content-type", "application/json");

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      let res = await fetch(APIUrl + `/averageEmp/${id}`, requestOptions);
      let response = await res.json();
      let result = response.data;
      setresult(result);
      console.log(result);
      result.map((item, key) => {
        setSelectedUser({
          average_employees: item.average_employees,
          status: item.status,
        });
      });
    };
    fetchData();
  }, [location]);

  const validate = Yup.object({
    average_employees: Yup.string().matches(/^[ A-Za-z0-9\$,-]*$/, {
      message: 'Allow only alphanumeric,doller,comma and dash',
      excludeEmptyString: true,
    }).required("Average Employee is required").min(2, "Average employee must be minimum 2 characters long").max(100, "Average Emplo must be 2 to 15 characters long."),

  });
  const OnSubmitForm = (values, props) => {
    const token = localStorage.getItem("jwt");
    var user_id = localStorage.getItem("user_id");
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", token);

    var raw = JSON.stringify({
      "average_employees": values.average_employees, "status": values.status, created_on: "2021/02/02",
      created_by: user_id,
      updated_by: user_id
    });
    // console.log(raw)
    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(APIUrl + `/averageEmp/${comid}`, requestOptions)
      .then(response => response.json())
      .then((resData) => {
        console.log(resData)
        if (resData.status === 200) {
          // console.log(resData)
          // M.toast({
          //   html: '<div class="<div class="card-alert card green" style="width: 450px;"><div class="card-content white-text"> <span class="card-title white-text darken-1"> <i class="material-icons">check</i><strong>Success</strong></span><p>Record Updated Successfully.</p> </div></div>',
          //   classes: "#e#00e676 green accent-3",
          // });
          // const user = JSON.parse(localStorage.getItem("user"));
          // if (user) {
          //   history.push("/averageemployee/view");
          // } else {
          //   history.push("/")
          // }
          setConfirmDialog({
            isOpen: true,
            title: 'Alert',
            subTitle: "Average Employee Annual Compensation Updated Successfully",
          })
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
                  <div className="col s12 m12 l12">
                    <h5 className="breadcrumbs-title mt-0 mb-0"><span>{showEdit ? "Edit" : "View"} Average Empolyee Annual Compensation Range</span></h5>
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
                                    label="Average Empolyee Annual Compensation range"
                                    elementtype="edit"
                                    name="average_employees"
                                    type="text"
                                    onInputChange={onInputChange}
                                    value={selectedUser.average_employees}
                                  />
                                </div>
                                <div className="row">
                                  <div class="col m6 s12 redio_section">
                                    <p>Status</p>
                                    <RadioEdit
                                      label="Active"
                                      value="Active"
                                      name="status"
                                      HandleStatus={HandleStatus}
                                      isSelectedCheck={
                                        selectedUser.status == "Active"
                                      }
                                    />

                                    <RadioEdit
                                      label="Inactive"
                                      value="Inactive"
                                      name="status1"
                                      HandleStatus={HandleStatus}
                                      isSelectedCheck={
                                        selectedUser.status == "Inactive"
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
                                    label="Average Empolyee Annual Compensation range"
                                    elementtype="View"
                                    name="average_employees"
                                    type="text"
                                    onInputChange={onInputChange}
                                    value={selectedUser.average_employees}
                                    disabled
                                  />
                                </div>
                                <div className="row">
                                  <div class="col m6 s12 redio_section">
                                    <p>Status</p>
                                    <RadioEdit
                                      label="Active"
                                      value="Active"
                                      name="status"
                                      HandleStatus={HandleStatus}
                                      isSelectedCheck={
                                        selectedUser.status == "Active"
                                      }
                                      elementtype="View"

                                    />

                                    <RadioEdit
                                      label="Inactive"
                                      value="Inactive"
                                      name="status1"
                                      HandleStatus={HandleStatus}
                                      isSelectedCheck={
                                        selectedUser.status == "Inactive"
                                      }
                                      elementtype="View"
                                    />
                                  </div>
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
      <Notification
        notify={notify}
        setNotify={setNotify}
      />
      <MaxWidthDialog setConfirmDialog={setConfirmDialog} confirmDialog={confirmDialog} link={'/averageemployee/view'} />
    </div>
  );
}
export default EditForm;
