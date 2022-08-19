import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import MaterialTable from 'material-table'
import M from "materialize-css";
import ConfirmDialog from "../../../components/DialogBox";
import MaxWidthDialog from '../../../components/AlertDialogBox';
import Notification from "../../../components/Notification";
import * as moment from 'moment'

function ListCountries(props) {
    const [listRecord, setlistRecord] = useState([]);
    const history = useHistory();
    let [dateFormated, setdateFormated] = useState('');
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '' });
    const [confirmDialogBox, setConfirmDialogBox] = useState({ isOpen: false, title: '', subTitle: '', type: '' })
    const APIUrl = process.env.REACT_APP_Base_URL;
    const token = localStorage.getItem("jwt");
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '', header: '' })

    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", token);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(APIUrl + `/country`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setlistRecord(result.data);
                console.log(result.data)
            })

            .catch(error => console.log('error', error));
    }, [])

    const GetallRecored = () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", token);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(APIUrl + `/country`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setlistRecord(result.data);
                console.log(result.data)
            })

            .catch(error => console.log('error', error));
    }
    const EditCountry = (id) => {
        // console.log(id)
        history.push({
            pathname: '/countries/edit',
            state: { detail: id, type: 'Edit' }
        });
    }
    const ViewCompany = (id) => {
        history.push({
            pathname: '/countries/edit',
            state: { detail: id, type: 'View' }
        });
    }
    const AddCountries = () => {
        history.push("/countries/add")
    }
    const DeleteCountry = async (id) => {
        // if (window.confirm('Do You want to delete ..?')) {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
        // setNotify({
        //     isOpen: true,
        //     message: 'Record Deleted Successfully',
        //     header: 'Delete',
        //     type: 'error'
        // })


        var myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        myHeaders.append("Content-type", "application/json");

        var requestOptions = {
            method: 'delete',
            headers: myHeaders,
            redirect: 'follow'
        };

        let res = await fetch(APIUrl + `/country/${id}`, requestOptions);
        let response = await res.json();

        if (response.status == 200) {
            setConfirmDialogBox({
                isOpen: true,
                title: 'Alert',
                subTitle: "Country Deleted Successfully",
            })
            // M.toast({
            //     html: '<div class="<div class="card-alert card green" style="width: 450px;"><div class="card-content white-text"> <span class="card-title white-text darken-1"> <i class="material-icons">close</i><strong>Delete</strong></span><p>Record Deleted Successfully.</p> </div></div>',
            //     classes: "#f8bbd0 pink lighten-4",
            // });
            GetallRecored()
            const user = JSON.parse(localStorage.getItem("user"));
            if (user) {
                history.push("/countries/view");
                // history.go(0)
            } else {
                history.push('')
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
                                        <div className="col s10 m6 l6">
                                            <h5 className="breadcrumbs-title mt-0 mb-0"><span>Countries List</span></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col s3"><div className="invoice-create-btn mt-10 right pr-5">
                            <a onClick={AddCountries} className="btn  waves-light invoice-create  z-depth-1 ">
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
                                                            { title: 'Country Name', field: 'country_name' },
                                                            { title: 'Status', field: 'status' },
                                                        ]}
                                                        data={
                                                            listRecord
                                                        }
                                                        actions={[
                                                            {
                                                                icon: 'visibility',
                                                                tooltip: 'view',
                                                                onClick: (event, listRecord) => { ViewCompany(listRecord.id) }
                                                            },
                                                            {
                                                                icon: 'create',
                                                                tooltip: 'edit',
                                                                onClick: (event, listRecord) => { EditCountry(listRecord.id) }
                                                            },
                                                            {
                                                                icon: 'delete',
                                                                tooltip: 'delete',
                                                                onClick: (event, listRecord) => {
                                                                    setConfirmDialog({
                                                                        isOpen: true,
                                                                        title: 'Are you sure to delete this record?',
                                                                        subTitle: "You can't undo this operation",
                                                                        onConfirm: () => { DeleteCountry(listRecord.id) }
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
                <MaxWidthDialog setConfirmDialog={setConfirmDialogBox} confirmDialog={confirmDialogBox} link={'/countries/view'} />
            </div>
        )
    } else {
        return (null)
    }

}

export default ListCountries;