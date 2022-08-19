import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import EditTextField from "../../../components/EditTextField";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { useLocation } from "react-router-dom";
import * as moment from "moment";
import M from "materialize-css";
import RadioEdit from "../../../components/RadioEdit";
import MaxWidthDialog from '../../../components/AlertDialogBox';


function EditForm(props) {
  const location = useLocation();
  const history = useHistory();
  let [showEdit, setshowEdit] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  let [comid, setcomid] = useState('')
  let [radioValue, setradioValue] = useState("");
  const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '', type: '' })

  let [result, setResult] = useState([]);
  const APIUrl = process.env.REACT_APP_Base_URL;

  const onInputChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };

  const BackBtn = () => {
    history.push("/coupon/view");
  }
  const HandleStatus = (val) => {
    console.log(val);
    setradioValue(val);
    result.map((item, key) => {
      let StartDate = moment(item.start_date).format("YYYY-MM-DD");
      let EndDate = moment(item.end_date).format("YYYY-MM-DD");
      setSelectedUser({
        coupon_name: selectedUser.coupon_name,
        coupon_percentage: selectedUser.coupon_percentage,
        package: val,
        start_date: StartDate,
        end_date: EndDate,
      });
    });
  };

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


      let res = await fetch(APIUrl + `/coupon/${id}`, requestOptions)
      let response = await res.json();
      let result = response.data;
      setResult(result);
      result.map((item, key) => {
        let StartDate = moment(item.start_date).format("YYYY-MM-DD");
        let EndDate = moment(item.end_date).format("YYYY-MM-DD");
        setSelectedUser({
          coupon_name: item.coupon_name,
          coupon_percentage: item.coupon_percentage,
          package: item.package,
          start_date: StartDate,
          end_date: EndDate,
        });
      });
    };
    fetchData();
  }, [location]);

  const validate = Yup.object({
    coupon_name: Yup.string()
      .required('Coupon Name is required').matches(/^[A-Za-z0-9-]+$/, "Please enter valid data").min(2, "Coupon Name must be minimum 2 characters long").max(100, "coupon Name must be 2 to 100 characters long."),
    coupon_percentage: Yup.string()
      .matches(
        /^[1-9][0-9]?$|^100$/,
        {
          message: 'allow Only 1 to 100 numbers ',
          excludeEmptyString: true,
        },
      )
      .required('Coupon Percetage  is required'),
    start_date: Yup.date()
      .required('Start Date is required'),
    end_date: Yup.date().min(
      Yup.ref('start_date'),
      "End date can't be before Start date"
    )

  });
  const OnSubmitForm = async (values, props) => {
    const token = localStorage.getItem("jwt");
    var user_id = localStorage.getItem("user_id");
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", token);
    // alert(values.package)
    var raw = JSON.stringify({
      "coupon_name": values.coupon_name, "coupon_percentage": values.coupon_percentage, "package": values.package, "start_date": values.start_date, "end_date": values.end_date, created_on: "2021/02/02",
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

    fetch(APIUrl + `/coupon/${comid}`, requestOptions)
      .then(response => response.json())
      .then((resData) => {
        console.log(resData)
        if (resData.status == 200) {
          setConfirmDialog({
            isOpen: true,
            title: 'Alert',
            subTitle: "Coupon Updated Successfully",
          })

          // console.log(resData)
          // M.toast({
          //   html: '<div class="<div class="card-alert card green" style="width: 450px;"><div class="card-content white-text"> <span class="card-title white-text darken-1"> <i class="material-icons">check</i><strong>Success</strong></span><p>Record Updated Successfully.</p> </div></div>',
          //   classes: "#e#00e676 green accent-3",
          // });
          // const user = JSON.parse(localStorage.getItem("user"));
          // if (user) {
          //   history.push("/coupon/view");
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
                    <h5 className="breadcrumbs-title mt-0 mb-0"><span>{showEdit ? "Edit" : "View"} Coupon</span></h5>
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
                                    label="Coupon Name"
                                    elementtype="edit"
                                    name="coupon_name"
                                    type="text"
                                    onInputChange={onInputChange}
                                    value={selectedUser.coupon_name}
                                  />
                                  <EditTextField
                                    label="Coupon Percentage"
                                    elementtype="edit"
                                    name="coupon_percentage"
                                    type="text"
                                    value={selectedUser.coupon_percentage}
                                    onInputChange={onInputChange}
                                  />
                                </div>

                                <div className="row">
                                  <EditTextField
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
                                  />
                                </div>
                                {/* <div className="row">
                                  <div class="col m6 s12 redio_section">
                                    <p>Package</p>
                                    <RadioEdit
                                      label="Single"
                                      value="Single"
                                      name="package"
                                      HandleStatus={HandleStatus}
                                      isSelectedCheck={
                                        selectedUser.package == "Single"
                                      }
                                    />

                                    <RadioEdit
                                      label="Multiple"
                                      value="Multiple"
                                      name="package1"
                                      HandleStatus={HandleStatus}
                                      isSelectedCheck={
                                        selectedUser.package == "Multiple"
                                      }
                                    />
                                  </div>
                                </div> */}

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
                                    label="Coupon Name"
                                    elementtype="edit"
                                    name="coupon_name"
                                    type="text"
                                    onInputChange={onInputChange}
                                    value={selectedUser.coupon_name}
                                    disabled
                                  />
                                  <EditTextField
                                    label="Coupon Percentage"
                                    elementtype="edit"
                                    name="coupon_percentage"
                                    type="text"
                                    value={selectedUser.coupon_percentage}
                                    onInputChange={onInputChange}
                                    disabled
                                  />
                                </div>

                                <div className="row">
                                  <EditTextField
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
                                  />
                                </div>
                                {/* <div className="row">
                                  <div class="col m6 s12 redio_section">
                                    <p>Package</p>
                                    <RadioEdit
                                      label="Single"
                                      value="Single"
                                      name="package"
                                      HandleStatus={HandleStatus}
                                      isSelectedCheck={
                                        selectedUser.package == "Single"
                                      }
                                      elementtype="View"
                                    />
                                    <RadioEdit
                                      label="Multiple"
                                      value="Multiple"
                                      name="package1"
                                      HandleStatus={HandleStatus}
                                      isSelectedCheck={
                                        selectedUser.package == "Multiple"
                                      }
                                      elementtype="View"
                                    />
                                  </div>
                                </div> */}

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
      <MaxWidthDialog setConfirmDialog={setConfirmDialog} confirmDialog={confirmDialog} link={'/coupon/view'} />

    </div>
  );
}
export default EditForm;
