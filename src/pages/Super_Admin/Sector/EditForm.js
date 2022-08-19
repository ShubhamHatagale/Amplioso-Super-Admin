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
  //   const { id } = useParams()
  let [showEdit, setshowEdit] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '', type: '' })

  let [radioValue, setradioValue] = useState("");
  let [isSelected, setisSelected] = useState("");
  let [result, setresult] = useState([]);
  const APIUrl = process.env.REACT_APP_Base_URL;

  let [comid, setcomid] = useState("");
  const onInputChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };
  const HandleStatus = (val) => {
    console.log(val);
    setradioValue(val);
    result.map((item, key) => {
      setSelectedUser({
        sector_name: selectedUser.sector_name,
        status: val,
      });
    });
  };

  const BackBtn = () => {
    history.push("/sector/view");
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

      let res = await fetch(APIUrl + `/sector/${id}`, requestOptions);
      let response = await res.json();
      let result = response.data;
      setresult(result);

      result.map((item, key) => {
        setSelectedUser({
          sector_name: item.sector_name,
          status: item.status,
        });
        // setisSelected(selectedUser.status)
      });
      //   console.log(isSelected)
    };
    fetchData();
  }, [location]);

  const validate = Yup.object({
    sector_name: Yup.string().matches(/^[ A-Za-z0-9\()\-+/<>]*$/, "Allow only alphanumeric ,(,),-,/,<,>")
      .required('Sector name  is required').min(2, "Sector Name must be minimum 2 characters long").max(100, "Sector Name must be 2 to 100 characters long."),
  });
  const OnSubmitForm = (values, props) => {
    const token = localStorage.getItem("jwt");
    var user_id = localStorage.getItem("user_id");
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", token);
    var raw = JSON.stringify({ "sector_name": values.sector_name, "status": values.status, });
    var raw = JSON.stringify({
      "sector_name": values.sector_name, "status": values.status, created_on: "2021/02/02",
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

    fetch(APIUrl + `/sector/${comid}`, requestOptions)
      .then(response => response.json())
      .then((resData) => {
        console.log(resData)
        if (resData.status == 200) {
          setConfirmDialog({
            isOpen: true,
            title: 'Alert',
            subTitle: "Sector Updated Successfully",
          })

          // M.toast({

          //   html: '<div class="<div class="card-alert card green" style="width: 450px;"><div class="card-content white-text"> <span class="card-title white-text darken-1"> <i class="material-icons">check</i><strong>Success</strong></span><p>Record Updated Successfully.</p> </div></div>',
          //   classes: "#e#00e676 green accent-3",
          // });
          // const user = JSON.parse(localStorage.getItem("user"));
          // if (user) {
          //   history.push("/sector/view");
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
                    <h5 className="breadcrumbs-title mt-0 mb-0"><span>{showEdit ? "Edit" : "View"} Sector</span></h5>
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
                                    label="Sector Name"
                                    elementtype="edit"
                                    name="sector_name"
                                    type="text"
                                    onInputChange={onInputChange}
                                    value={selectedUser.sector_name}
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
                                    label="Sector Name"
                                    elementtype="View"
                                    name="sector_name"
                                    type="text"
                                    onInputChange={onInputChange}
                                    value={selectedUser.sector_name}
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
      <MaxWidthDialog setConfirmDialog={setConfirmDialog} confirmDialog={confirmDialog} link={'/sector/view'} />

    </div>
  );
}
export default EditForm;
