import React, { useEffect, useState } from "react";
import MaterialTable from 'material-table'
import { useHistory } from "react-router-dom";
import M from "materialize-css"
import ConfirmDialog from "../../../components/DialogBox";
import MaxWidthDialog from '../../../components/AlertDialogBox';
import Notification from "../../../components/Notification";

export default function ListUsers() {
    const [listRecord, setlistRecord] = useState([]);
    const history = useHistory();
    const APIUrl = process.env.REACT_APP_Base_URL;
    const token = localStorage.getItem("jwt");
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '' })
    const [confirmDialogBox, setConfirmDialogBox] = useState({ isOpen: false, title: '', subTitle: '', type: '' })
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '', header: '' })

    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        fetch(APIUrl + `/users`, requestOptions)
            .then(response => response.json())
            .then(result => {
                // console.log(result.data)
                setlistRecord(result.data)

            })
            .catch(error => console.log('error', error));
    }, [])

    const GetallRecored = () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        fetch(APIUrl + `/users`, requestOptions)
            .then(response => response.json())
            .then(result => {
                // console.log(result.data)
                setlistRecord(result.data)

            })
            .catch(error => console.log('error', error));
    }

    const EditEmployee = (id) => {
        history.push({
            pathname: '/user/edit',
            state: { detail: id, type: 'Edit' }
        });
    }
    const ViewEmployee = (id) => {
        history.push({
            pathname: '/user/edit',
            state: { detail: id, type: 'View' }
        });
    }
    const AddUser = () => {
        history.push("/user/add");
    }

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
        let res = await fetch(APIUrl + `/users/${id}`, requestOptions);
        let response = await res.json();
        console.log(response)
        if (response.status == 200) {
            // M.toast({
            //     html: '<div class="<div class="card-alert card green" style="width: 450px;"><div class="card-content white-text"> <span class="card-title white-text darken-1"> <i class="material-icons">close</i><strong>Delete</strong></span><p>Record Deleted Successfully.</p> </div></div>',
            //     classes: "#f8bbd0 pink lighten-4",
            // });
            setConfirmDialogBox({
                isOpen: true,
                title: 'Alert',
                subTitle: "SuperAdmin User Deleted Successfully",
            })
            GetallRecored()
            console.log("record dleted")
            const user = JSON.parse(localStorage.getItem("user"));
            if (user) {
                history.push("/user/view");
            }
        }
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
                                        <div className="col s10 m6 l6">
                                            <h5 className="breadcrumbs-title mt-0 mb-0"><span>SuperAdmin Users List</span></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col s3"><div className="invoice-create-btn mt-10 right pr-5">
                            <a onClick={AddUser} className="btn  waves-light invoice-create  z-depth-1 ">
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
                                                            {
                                                                title: 'Mobile No', field: 'mobile_no'
                                                            },
                                                            { title: 'User E-mail', field: 'user_email' },
                                                            { title: 'Username', field: 'username' },
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
                                                                fontSize: 16,
                                                            }),
                                                            headerStyle: {
                                                                fontSize: 17,
                                                                fontWeight: 'bold',
                                                                backgroundColor: '#fff',
                                                                borderBottom: "1px solid #000000",
                                                            }
                                                        }}
                                                    />
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
                <MaxWidthDialog setConfirmDialog={setConfirmDialogBox} confirmDialog={confirmDialogBox} link={'/user/view'} />
            </div>
        )
    } else {
        return (null)
    }

}
