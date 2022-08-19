import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import M from "materialize-css";
import * as moment from 'moment'
import MaterialTable from 'material-table'
import ConfirmDialog from "../../../components/DialogBox";
import Notification from "../../../components/Notification";
import MaxWidthDialog from '../../../components/AlertDialogBox';

function ListCompanies(props) {
    const token = localStorage.getItem("jwt");

    const [listRecord, setlistRecord] = useState([]);
    let [employeeddl, setemployeeddl] = useState('')
    let [avgmployeeddl, setavgemployeeddl] = useState('')
    let [sectorddl, setsectorddl] = useState('')
    let [feedbackddl, setfeedbackddl] = useState('')
    const history = useHistory();
    let [dateFormated, setdateFormated] = useState('');
    const APIUrl = process.env.REACT_APP_Base_URL;

    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '' })
    const [confirmDialogBox, setConfirmDialogBox] = useState({ isOpen: false, title: '', subTitle: '', type: '' })
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '', header: '' })

    const GetallRecored = () => {
        var myHeaders = new Headers();
        console.log(token)
        myHeaders.append("Authorization", token);
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        fetch(APIUrl + `/company`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setlistRecord(result.data)
                console.log(result.data)
            })
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        GetallRecored();
    }, [])



    const getDataById = async (defValue) => {
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json')
        myHeaders.append("Authorization", token);
        let res = await fetch(
            APIUrl + `/package/${defValue}`,
            {
                method: "get",
                headers: myHeaders
            }
        );
        let response = await res.json();
        const empResult = response.data.package_name;

        // return empResult;
    }
    const EditCompany = async (id) => {
        const token = localStorage.getItem("jwt");
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'multipart/form-data')
        myHeaders.append("Authorization", token);
        // console.log(myHeaders)
        let res = await fetch(
            APIUrl + `/company/${id}`,
            {
                method: "get",
                headers: myHeaders
            }
        );
        let response = await res.json();
        let result = response.data;
        result.map((item, key) => {
            setemployeeddl(item.number_of_employee)
            setavgemployeeddl(item.average_employee_compansation)
            setfeedbackddl(item.feedback_frequency)
            setsectorddl(item.business_sector)
        })
        history.push({
            pathname: '/companies/edit',
            state: { detail: id, type: 'Edit', Employeeddl: employeeddl, Avgddl: avgmployeeddl, Feedddl: feedbackddl, Sectorddl: sectorddl }
        });
    }
    const ViewCompany = (id) => {
        history.push({
            pathname: '/companies/edit',
            state: { detail: id, type: 'View' }
        });
    }
    const AddCompanies = () => {
        history.push("/companies/add");
    }
    const DeleteCompany = async (id) => {
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

        let res = await fetch(APIUrl + `/company/${id}`, requestOptions);
        let response = await res.json();
        console.log(response)
        if (response.status == 200) {
            setConfirmDialogBox({
                isOpen: true,
                title: 'Alert',
                subTitle: "Company Deleted Successfully",
            })
            // M.toast({
            //     html: '<div class="<div class="card-alert card green" style="width: 450px;"><div class="card-content white-text"> <span class="card-title white-text darken-1"> <i class="material-icons">close</i><strong>Delete</strong></span><p>Record Deleted Successfully.</p> </div></div>',
            //     classes: "#f8bbd0 pink lighten-4",
            // });
            GetallRecored()
            const user = JSON.parse(localStorage.getItem("user"));
            if (user) {
                history.push("/companies/view");
            }
            // }
            // console.log(response.message);
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
                                            <h5 className="breadcrumbs-title mt-0 mb-0"><span>Companies List</span></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col s3"><div className="invoice-create-btn mt-10 right pr-5">
                            <a onClick={AddCompanies} className="btn  waves-light invoice-create  z-depth-1 ">
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
                                                            { title: 'Company Name', field: 'company_name' },
                                                            { title: 'Master E-mail', field: 'username' },
                                                            {
                                                                title: 'Current Package', field: 'CompanyPackage.package_name',
                                                            }
                                                            // {title: 'No of Employee', field: 'number_of_employee' },
                                                            // {title: 'Business Sector', field: 'business_sector' },
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
                                                                onClick: (event, listRecord) => { EditCompany(listRecord.id) }
                                                            },
                                                            {
                                                                icon: 'delete',
                                                                tooltip: 'delete',
                                                                onClick: (event, listRecord) => {
                                                                    setConfirmDialog({
                                                                        isOpen: true,
                                                                        title: 'Are you sure to delete this record?',
                                                                        subTitle: "You can't undo this operation",
                                                                        onConfirm: () => { DeleteCompany(listRecord.id) }
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
                <ConfirmDialog
                    confirmDialog={confirmDialog}
                    setConfirmDialog={setConfirmDialog}
                />
                <MaxWidthDialog setConfirmDialog={setConfirmDialogBox} confirmDialog={confirmDialogBox} link={'/companies/view'} />
            </div>
        )
    } else {
        return (null)
    }
}

export default ListCompanies