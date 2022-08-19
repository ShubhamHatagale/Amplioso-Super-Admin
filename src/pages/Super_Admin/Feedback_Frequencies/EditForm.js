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
  let [radioValue, setradioValue] = useState("");
  let [isSelected, setisSelected] = useState("");
  const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '', type: '' })

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
        feedback_frequencies: selectedUser.feedback_frequencies,
        feedback_rounds: selectedUser.feedback_rounds,
        status: val,
      });
    });
  };


  const BackBtn = () => {
    history.push("/feedback/view");
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

      let res = await fetch(APIUrl + `/feedback/${id}`, requestOptions);
      let response = await res.json();
      let result = response.data;
      console.log(result)
      setresult(result);

      console.log(result);
      result.map((item, key) => {
        setSelectedUser({
          feedback_frequencies: item.feedback_frequencies,
          feedback_rounds: item.feedback_rounds,
          status: item.status,
        });
        // setisSelected(selectedUser.status)
      });
      //   console.log(isSelected)
    };
    fetchData();
  }, [location]);

  const validate = Yup.object({
    feedback_frequencies: Yup.string()
      .required(' feedback frequencies is required').matches(/^[A-Za-z-/]+$/, "Please enter char and dash Only").min(2, "feedback must be minimum 2 characters long").max(15, "feedback must be 2 to 15 characters long."),
    feedback_rounds: Yup.string().required('no of rounds required').matches(/^[0-9/]+$/, "Enter valid data only numbers alloweds")
  });
  const OnSubmitForm = (values, props) => {
    const token = localStorage.getItem("jwt");
    var user_id = localStorage.getItem("user_id");
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", token);

    var raw = JSON.stringify({
      "feedback_frequencies": values.feedback_frequencies, "feedback_rounds": values.feedback_rounds, "status": values.status, created_on: "2021/02/02",
      created_by: user_id,
      updated_by: user_id,
      updated_on: "2021-02-02"
    });
    console.log(raw)
    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(APIUrl + `/feedback/${comid}`, requestOptions)
      .then(response => response.json())
      .then((resData) => {
        console.log(resData)
        if (resData.status == 200) {
          setConfirmDialog({
            isOpen: true,
            title: 'Alert',
            subTitle: "FeedBack Frequency Updated Successfully",
          })
          // console.log(resData)
          // M.toast({
          //   html: '<div class="<div class="card-alert card green" style="width: 450px;"><div class="card-content white-text"> <span class="card-title white-text darken-1"> <i class="material-icons">check</i><strong>Success</strong></span><p>Record Updated Successfully.</p> </div></div>',
          //   classes: "#e#00e676 green accent-3",
          // });
          // const user = JSON.parse(localStorage.getItem("user"));
          // if (user) {
          //   history.push("/feedback/view");
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
                    <h5 className="breadcrumbs-title mt-0 mb-0"><span>{showEdit ? "Edit" : "View"} Feedback Frequency</span></h5>
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
                                    label="Feedback Frequency"
                                    elementtype="edit"
                                    name="feedback_frequencies"
                                    type="text"
                                    onInputChange={onInputChange}
                                    value={selectedUser.feedback_frequencies}
                                  />
                                  <EditTextField
                                    label="No of Rounds"
                                    elementtype="edit"
                                    name="feedback_rounds"
                                    type="text"
                                    onInputChange={onInputChange}
                                    value={selectedUser.feedback_rounds}
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
                                        className="btn cyan waves-light gen_btn"
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
                                    label="Feeback Frequency"
                                    elementtype="View"
                                    name="feedback_frequencies"
                                    type="text"
                                    onInputChange={onInputChange}
                                    value={selectedUser.feedback_frequencies}
                                    disabled
                                  />
                                  <EditTextField
                                    label="No of Rounds"
                                    elementtype="View"
                                    name="feedback_rounds"
                                    type="text"
                                    onInputChange={onInputChange}
                                    value={selectedUser.feedback_rounds}
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
      <MaxWidthDialog setConfirmDialog={setConfirmDialog} confirmDialog={confirmDialog} link={'/feedback/view'} />
    </div>
  );
}
export default EditForm;
