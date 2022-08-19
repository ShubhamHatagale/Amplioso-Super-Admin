import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import EditTextField from "../../../components/EditTextField";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { useLocation } from "react-router-dom";
import M from "materialize-css";
import MaxWidthDialog from '../../../components/AlertDialogBox';


function EditRole(props) {
  const location = useLocation();
  const history = useHistory();
  //   const { id } = useParams()
  let [showEdit, setshowEdit] = useState(false);
  const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '', type: '' })
  const [selectedUser, setSelectedUser] = useState({});
  let [radioValue, setradioValue] = useState("");
  let [result, setresult] = useState([]);
  let [comid, setcomid] = useState("");
  const APIUrl = process.env.REACT_APP_Base_URL;
  const onInputChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };


  const BackBtn = () => {
    history.push("/role/view");
  }
  const HandleStatus = (val) => {
    console.log(val);
    setradioValue(val);
    result.map((item, key) => {
      setSelectedUser({
        role: selectedUser.role,
        // status: val,
      });
    });
  };
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


      let res = await fetch(APIUrl + `/role/${id}`, requestOptions)
      let response = await res.json();
      let result = response.data;
      console.log(result)
      setresult(result);
      result.map((item, key) => {
        setSelectedUser({
          role: item.role,
          // status: item.status,
        });
        // setisSelected(selectedUser.status)
      });
      //   console.log(isSelected)
    };
    fetchData();
  }, [location]);

  const validate = Yup.object({
    role: Yup.string().matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ").required('Role is required').min(2, "Role must be minimum 2 characters long").max(100, "Role must be 2 to 100 characters long."),
  })
  const OnSubmitForm = (values, props) => {
    const token = localStorage.getItem("jwt");
    var user_id = localStorage.getItem("user_id");
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", token);

    var raw = JSON.stringify({
      "role": values.role, created_on: "2021/02/02",
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

    fetch(APIUrl + `/role/${comid}`, requestOptions)
      .then(response => response.json())
      .then((resData) => {
        if (resData.status == 200) {
          setConfirmDialog({
            isOpen: true,
            title: 'Alert',
            subTitle: "Record Updated Successfully",
          })
        }
        props.resetForm();
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
                    <h5 className="breadcrumbs-title mt-0 mb-0"><span>{showEdit ? "Edit" : "View"} Role</span></h5>
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
                                    label="Role"
                                    elementtype="edit"
                                    name="role"
                                    type="text"
                                    onInputChange={onInputChange}
                                    value={selectedUser.role}
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
                                    label="Role"
                                    elementtype="View"
                                    name="role"
                                    type="text"
                                    onInputChange={onInputChange}
                                    value={selectedUser.role}
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
      <MaxWidthDialog setConfirmDialog={setConfirmDialog} confirmDialog={confirmDialog} link={'/role/view'} />

    </div >
  );
}
export default EditRole;
