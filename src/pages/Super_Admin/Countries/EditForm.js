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


function EditForm(props) {
  const location = useLocation();
  const history = useHistory();
  const APIUrl = process.env.REACT_APP_Base_URL;
  let [showEdit, setshowEdit] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  let [radioValue, setradioValue] = useState("");
  const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '', type: '' })

  let [Result, setResult] = useState([]);

  let [comid, setcomid] = useState("");
  const onInputChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };
  const HandleStatus = (val) => {
    console.log(val);
    setradioValue(val);
    Result.map((item, key) => {
      setSelectedUser({
        country_name: selectedUser.country_name,
        status: val,
      });
    });
  };

  const BackBtn = () => {
    history.push("/countries/view");
  }
  useEffect(() => {

    const fetchData = async () => {
      let id = location.state.detail;
      setcomid(location.state.detail);
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

      // fetch(APIUrl + `/country/${id}`, requestOptions)
      //   .then(response => response.text())
      //   .then(result => {
      //     setresult(result)
      //     // console.log(result)
      //   })
      //   .catch(error => console.log('error', error));
      // console.log(result);
      let res = await fetch(
        APIUrl + `/country/${id}`, requestOptions
        // {
        //   // method: "get",
        //   // headers: myHeaders
        //   // headers: 
        // } //example and simple data
      );
      let response = await res.json();
      let result = response.data;
      setResult(result);
      result.map((item, key) => {
        setSelectedUser({
          country_name: item.country_name,
          status: item.status,
        });
        // setisSelected(selectedUser.status)
      });
      // console.log(selectedUser)
    };
    fetchData();
  }, [location]);

  const validate = Yup.object({
    country_name: Yup.string()
      .required('Country Name is required').matches(/^[A-Za-z/ ]+$/, "Please enter valid data").min(2, "Country Name must be minimum 2 characters long").max(100, "Country Name must be 2 to 100 characters long."),
  });
  const OnSubmitForm = (values, props) => {
    const token = localStorage.getItem("jwt");
    var user_id = localStorage.getItem("user_id");
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", token);
    var raw = JSON.stringify({
      "country_name": values.country_name, "status": values.status, created_on: "2021/02/02",
      created_by: user_id,
      updated_by: user_id
    });
    console.log(raw)
    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(APIUrl + `/country/${comid}`, requestOptions)
      .then(response => response.json())
      .then((resData) => {
        if (resData.status == 200) {
          setConfirmDialog({
            isOpen: true,
            title: 'Alert',
            subTitle: "Country Updated Successfully",
          })

          // console.log(resData)
          // M.toast({
          //   html: '<div class="<div class="card-alert card green" style="width: 450px;"><div class="card-content white-text"> <span class="card-title white-text darken-1"> <i class="material-icons">check</i><strong>Success</strong></span><p>Record Updated Successfully.</p> </div></div>',
          //   classes: "#e#00e676 green accent-3",
          // });
          // const user = JSON.parse(localStorage.getItem("user"));
          // if (user) {
          //   history.push("/countries/view");
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
                    <h5 className="breadcrumbs-title mt-0 mb-0"><span>{showEdit ? "Edit" : "View"} Country</span></h5>
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
                                    label="Country Name"
                                    elementtype="edit"
                                    name="country_name"
                                    type="text"
                                    onInputChange={onInputChange}
                                    value={selectedUser.country_name}
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
                                    label="Country Name"
                                    elementtype="View"
                                    name="country_name"
                                    type="text"
                                    onInputChange={onInputChange}
                                    value={selectedUser.country_name}
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
      <MaxWidthDialog setConfirmDialog={setConfirmDialog} confirmDialog={confirmDialog} link={'/countries/view'} />

    </div>
  );
}
export default EditForm;
