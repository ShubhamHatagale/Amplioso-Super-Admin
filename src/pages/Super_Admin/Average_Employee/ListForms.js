import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import MaxWidthDialog from '../../../components/AlertDialogBox';
import MaterialTable from 'material-table'
import M from "materialize-css";
import ConfirmDialog from "../../../components/DialogBox";
import Notification from "../../../components/Notification";

require("dotenv").config();
function ListAvarageEmployee(props) {
    const [listRecord, setlistRecord] = useState([]);
    const history = useHistory();
    const location = useLocation()
    const [confirmDialogBox, setConfirmDialogBox] = useState({ isOpen: false, title: '', subTitle: '', type: '' })
    const APIUrl = process.env.REACT_APP_Base_URL;
    let [showEmptyList, setshowEmptyList] = useState(false)
    const token = localStorage.getItem("jwt");
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '' })
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '', header: '' })

    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        var requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
        };

        fetch(APIUrl + `/averageEmp`, requestOptions)
            .then((response) => response.json())
            .then((result) => setlistRecord(result.data))
            .catch((error) => console.log("error", error));
        if (!listRecord.length) {
            setshowEmptyList(true);
        }
    }, [location]);
    const GetallRecored = () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        var requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
        };
        fetch(APIUrl + `/averageEmp`, requestOptions)
            .then((response) => response.json())
            .then((result) => setlistRecord(result.data))
            .catch((error) => console.log("error", error));
        if (!listRecord.length) {
            setshowEmptyList(true);
        }
    };

    const EditEmployee = (id) => {
        console.log(id);
        history.push({
            pathname: "/averageemployee/edit",
            state: { detail: id, type: "Edit" },
        });
    };
    const ViewEmployee = (id) => {
        history.push({
            pathname: "/averageemployee/edit",
            state: { detail: id, type: "View" },
        });
    };
    const AddAverageEmp = () => {
        history.push("/averageemployee/add");
    };
    const DeleteEmployee = async (id) => {
        // if (window.confirm('Do You want to delete ..?')) {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
        var myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        myHeaders.append("Content-type", "application/json");
        var requestOptions = {
            method: 'delete',
            headers: myHeaders,
            redirect: 'follow'
        };
        let res = await fetch(APIUrl + `/averageEmp/${id}`, requestOptions);
        let response = await res.json();
        if (response.status == 200) {
            setConfirmDialogBox({
                isOpen: true,
                title: 'Alert',
                subTitle: "Average Employee Annual Compensation Deleted Successfully",
            })
            // M.toast({
            //     html: '<div class="<div class="card-alert card green" style="width: 450px;"><div class="card-content white-text"> <span class="card-title white-text darken-1"> <i class="material-icons">close</i><strong>Delete</strong></span><p>Record Deleted Successfully.</p> </div></div>',
            //     classes: "#f8bbd0 pink lighten-4",
            // });
            GetallRecored()
            const user = JSON.parse(localStorage.getItem("user"));
            if (user) {
                history.push("/averageemployee/view");
            } else {
                history.push("/");
            }
        }
        console.log(response.message);
        // }
    };
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
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
                                        <div className="col s10 m10 l10">
                                            <h5 className="breadcrumbs-title mt-0 mb-0"><span>Average Employee Annual Compensation List</span></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col s3"><div className="invoice-create-btn mt-10 right pr-5">
                            <a onClick={AddAverageEmp} className="btn  waves-light invoice-create  z-depth-1 ">
                                <i className="material-icons">add</i>
                                <span className="hide-on-small-only">Add</span>
                            </a>
                        </div></div>
                        {/* {listRecord.length > 0 ? ( */}
                        <div className="col s12">
                            <div className="container">
                                <div className="seaction">
                                    <div className="row">
                                        <div className="col s12 m12 l12">
                                            <div id="highlight-table" className="card card card-default scrollspy">
                                                {
                                                    // listRecord.length > 0 ? (
                                                    <MaterialTable
                                                        title=""
                                                        style={{ padding: "20px" }}
                                                        columns={[
                                                            { title: 'Average Employee Annual Compensation', field: 'average_employees' },
                                                            { title: 'Status', field: 'status' },
                                                        ]}
                                                        data={
                                                            listRecord
                                                        }
                                                        actions={[
                                                            {
                                                                icon: 'visibility',
                                                                tooltip: 'view',
                                                                onClick: (event, listRecord) => { ViewEmployee(listRecord.id) }
                                                            },
                                                            {
                                                                icon: 'create',
                                                                tooltip: 'edit',
                                                                onClick: (event, listRecord) => { EditEmployee(listRecord.id) }
                                                            },
                                                            {
                                                                icon: 'delete',
                                                                tooltip: 'delete',
                                                                onClick: (event, listRecord) => {
                                                                    setConfirmDialog({
                                                                        isOpen: true,
                                                                        title: 'Are you sure to delete this record?',
                                                                        subTitle: "You can't undo this operation",
                                                                        onConfirm: () => { DeleteEmployee(listRecord.id) }
                                                                    })
                                                                }
                                                            },
                                                        ]}
                                                        options={{
                                                            actionsColumnIndex: -1,
                                                            search: true
                                                            ,
                                                            rowStyle: (event, rowData) => ({
                                                                backgroundColor: ((rowData % 2)) ? '#fff' : '#f1f1f1',
                                                                fontSize: 16
                                                            }),
                                                            headerStyle: {
                                                                fontSize: 17,
                                                                fontWeight: 'bold',
                                                                backgroundColor: '#fff',
                                                                borderBottom: "1px solid #000000",
                                                            }
                                                        }}
                                                    />
                                                    // ) : (
                                                    // <h1>No Data</h1>
                                                    // )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- START RIGHT SIDEBAR NAV --> */}
                            </div>
                            <div className="content-overlay"></div>
                        </div>
                    </div>
                </div>
                <Notification
                    notify={notify}
                    setNotify={setNotify}
                />
                <ConfirmDialog
                    confirmDialog={confirmDialog}
                    setConfirmDialog={setConfirmDialog}
                />
                <MaxWidthDialog setConfirmDialog={setConfirmDialogBox} confirmDialog={confirmDialogBox} link={'/averageemployee/view'} />
            </div>
        )
    } else {
        return (null)
    }

}


export default ListAvarageEmployee;
