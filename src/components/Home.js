import React, { useEffect, useState } from 'react'
import GetResData from './GetResData';
import { getAllAvgEmployeeApi } from '../pages/Services/AllAvgEmployee';
import { GetAllRes } from '../pages/Services/GetAllRes';

export const Home = (props) => {
    const [Display, setDisplay] = useState(false);
    const [Users, setUsers] = useState("");
    const [feedUsers, setfeedUsers] = useState("");
    const [employees, setemployees] = useState("");

    async function GetResData(k) {
        const GetUsersData = await GetAllRes("users")
        const GetFeedbackData = await GetAllRes("collect_feedback")
        const GetemployeeData = await GetAllRes("employeedetails")

        console.log(GetUsersData)
        console.log(GetFeedbackData)

        setUsers(GetUsersData)
        setfeedUsers(GetFeedbackData)
        setemployees(GetemployeeData)
    }

    useEffect(() => {
        GetResData()
        console.log(process.env)
    }, [])
    return (
        <>
            <div>
                <div id="main" className={props.data} >
                    <div className="row">
                        <div className="col s12">
                            <div className="container">
                                <div className="section">
                                    <div id="card-stats" className="pt-0">
                                        <div className="row">
                                            {Users ? (
                                                <div className="col s12 m6 l6 xl4">
                                                    <div
                                                        className="card gradient-45deg-light-blue-cyan gradient-shadow min-height-100 white-text animate fadeLeft">
                                                        <div className="padding-4">
                                                            <div className="row">
                                                                <div className="col s9 m9">
                                                                    <i className="material-icons background-round mt-5">dynamic_form</i>
                                                                    <p>User Registration</p>
                                                                </div>
                                                                <div className="col s3 m3 right-align">
                                                                    <h5 className="mb-0 white-text">{Users.length}</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : null}
                                            {feedUsers ? (
                                                <div className="col s12 m6 l6 xl4">
                                                    <div
                                                        className="card gradient-45deg-green-teal gradient-shadow min-height-100 white-text animate fadeRight">
                                                        <div className="padding-4">
                                                            <div className="row">
                                                                <div className="col s9 m9">
                                                                    <i className="material-icons background-round mt-5">attach_money</i>
                                                                    <p>Total Survey</p>
                                                                </div>
                                                                <div className="col s3 m3 right-align">
                                                                    <h5 className="mb-0 white-text">{feedUsers.length}</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : null}
                                            {employees ? (
                                                <div className="col s12 m6 l6 xl4">
                                                    <div
                                                        className="card gradient-45deg-amber-amber gradient-shadow min-height-100 white-text animate fadeRight">
                                                        <div className="padding-4">
                                                            <div className="row">
                                                                <div className="col s9 m9">
                                                                    <i className="material-icons background-round mt-5">timeline</i>
                                                                    <p>Total Members</p>
                                                                </div>
                                                                <div className="col s3 m3 right-align">
                                                                    <h5 className="mb-0 white-text">{employees.length}</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="content-overlay"></div>
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="col s12">
                            <div className="container">
                                <div className="section">
                                    <div className="row">
                                        <div className="col s12 m6 l6">
                                            <div className="card">
                                                <div className="card-content">
                                                    <h4 className="card-title mb-0">Completion of Survey <i
                                                        className="material-icons float-right">more_vert</i></h4>
                                                    <p className="medium-small">In this month</p>
                                                    <div className="total-transaction-container">
                                                        <div id="total-transaction-line-chart" className="total-transaction-shadow"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col s12 m6 l6">
                                            <div id="chartjs" className="card pt-0 pb-0 animate fadeLeft"
                                                style={{ padding: "20px 0 0 0 !important" }}>
                                                <div className="dashboard-revenue-wrapper padding-2 ml-2">
                                                    <h4 className="card-title mb-0">Payment History</h4>
                                                    <p className="no-margin grey-text lighten-3">Total</p>
                                                    <h5>$ 22,300</h5>
                                                </div>
                                                <div className="sample-chart-wrapper card-gradient-chart">
                                                    <canvas id="custom-line-chart-sample-three" className="center"></canvas>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <div className="container">
                                <div className="section">
                                    <div className="row">
                                        <div className="col s12 m6 l6">
                                            <div className="card subscriber-list-card animate fadeRight">
                                                <div className="card-content pb-1">
                                                    <h4 className="card-title mb-0">Approval Status <i
                                                        className="material-icons float-right">more_vert</i></h4>
                                                </div>
                                                <table className="subscription-table responsive-table highlight">
                                                    <thead>
                                                        <tr>
                                                            <th>Task Name </th>
                                                            <th className="center-align">Status </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Homepage mockup design</td>
                                                            <td className="center-align"><a
                                                                className="waves-effect waves-light btn-small mb-1 mr-1">Pendding</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Homepage mockup design</td>
                                                            <td className="center-align"><a
                                                                className="waves-effect waves-light btn-small mb-1 mr-1">Pendding</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Homepage mockup design</td>
                                                            <td className="center-align"><a
                                                                className="waves-effect waves-light btn-small mb-1 mr-1">Pendding</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Homepage mockup design</td>
                                                            <td className="center-align"><a
                                                                className="waves-effect waves-light btn-small mb-1 mr-1">Pendding</a></td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                            </div>
                                        </div>
                                        <div className="col s12 m6 l6">
                                            <div className="card subscriber-list-card animate fadeRight">
                                                <div className="card-content pb-1">
                                                    <h4 className="card-title mb-0">Recently Added Questions <i
                                                        className="material-icons float-right">more_vert</i></h4>
                                                </div>
                                                <table className="subscription-table responsive-table highlight questions">

                                                    <tbody>
                                                        <tr>
                                                            <td>Lorem ipsum, or lipsum as it is sometimes known?<time
                                                                className="media-meta grey-text darken-2 questions-date"
                                                            >2 hours ago</time></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Lorem ipsum, or lipsum as it is sometimes known?<time
                                                                className="media-meta grey-text darken-2 questions-date"
                                                            >1 day ago</time></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Lorem ipsum, or lipsum as it is sometimes known?<time
                                                                className="media-meta grey-text darken-2 questions-date"
                                                            >17 January 2021</time></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Lorem ipsum, or lipsum as it is sometimes known?
                                                                <time
                                                                    className="media-meta grey-text darken-2 questions-date"
                                                                >15 January 2021</time></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div >
            </div >

        </>
    )
}
export default Home;
