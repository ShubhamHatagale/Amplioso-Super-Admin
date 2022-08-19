import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import M from "materialize-css";
import * as moment from 'moment'

function ListRole(props) {
  const [listRecord, setlistRecord] = useState([]);
  const history = useHistory();
  let [dateFormated, setdateFormated] = useState('');
  const token = localStorage.getItem("jwt");
  const APIUrl = process.env.REACT_APP_Base_URL;

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(APIUrl + `/role`, requestOptions)
      .then(response => response.json())
      .then(result => {
        setlistRecord(result.data)
        // console.log(result)
      })
      .catch(error => console.log('error', error));

    // const fetchData = async () => {
    //   let res = await fetch(
    //     "http://localhost:8000/masters/role", {
    //     method: 'get',
    //     header: {
    //       'Content-type': 'application/json',
    //     }
    //   }
    //   );
    //   let response = await res.json();
    //   setlistRecord(response.data);
    //   console.log(response);
    // };
    // fetchData();
  }, [])
  const EditEmployee = (id) => {
    console.log(id)
    history.push({
      pathname: '/role/edit',
      state: { detail: id, type: 'Edit' }
    });
  }
  const ViewEmployee = (id) => {
    history.push({
      pathname: '/role/edit',
      state: { detail: id, type: 'View' }
    });
  }
  const AddRole = () => {
    history.push('/role/add')
  }
  const DeleteEmployee = async (id) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-type", "application/json");

    var requestOptions = {
      method: 'delete',
      headers: myHeaders,
      redirect: 'follow'
    };

    let res = await fetch(APIUrl + `/role/${id}`, requestOptions);
    let response = await res.json();
    if (response.status == 200) {
      M.toast({
        html: "Record Deleted Successfully",
        classes: "#e#00e676 red accent-3",
      });
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        history.push("/role/view")
      }
    }
    console.log(response.message);
  };
  return (
    <div>
      <div id="main">
        <div className="row">
          <div className="content-wrapper-before gradient-45deg-indigo-purple"></div>
          <div className="col s9"> <div className="breadcrumbs-dark pb-0 pt-4" id="breadcrumbs-wrapper">
            {/* <!-- Search for small screen--> */}
            <div className="container">
              <div className="row">
                <div className="col s10 m6 l6">
                  <h5 className="breadcrumbs-title mt-0 mb-0"><span>Role List</span></h5>
                </div>
              </div>
            </div>
          </div></div>
          <div className="col s3"><div className="invoice-create-btn mt-10 right pr-5">
            <a onClick={AddRole} className="btn waves-effect waves-light invoice-create  z-depth-1 ">
              <i className="material-icons">add</i>
              <span className="hide-on-small-only">Add New</span>
            </a>
          </div></div>
          {listRecord.length > 0 ? (<div className="col s12">
            <div className="container">
              <div className="seaction">
                <div className="row">
                  <div className="col s12 m12 l12">
                    <div id="highlight-table" className="card card card-default scrollspy">
                      <div className="card-content">
                        <div className="row">
                          <div className="col s12">
                          </div>
                          <div className="col s12">
                            <div className="responsive-table">
                              <table className="table invoice-data-table white border-radius-4 pt-1">
                                <thead>
                                  <tr>
                                    {/* <!-- data table responsive icons -->
          <!-- data table checkbox --> */}
                                    <th>
                                      <span>Role</span></th>
                                    {/* <th>Status</th> */}
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {listRecord.map((item, key) => (
                                    <tr>
                                      <td><span className="invoice-amount">{item.role}</span></td>
                                      {/* <td><span className={item.status === "Active" ? "chip lighten-5 green green-text" : "chip lighten-5 red red-text"}>{item.status}</span></td> */}

                                      <td>
                                        <div className="invoice-action">
                                          <a
                                            onClick={() => { ViewEmployee(item.id) }}
                                            className="invoice-action-view mr-4">
                                            <i className="material-icons">remove_red_eye</i></a>
                                          <a
                                            // href={`/editCompany/${item.id}`}
                                            className="invoice-action-edit"
                                            onClick={() => { EditEmployee(item.id) }}
                                          >
                                            <i className="material-icons">edit</i></a>
                                          <a
                                            onClick={() => { DeleteEmployee(item.id) }}
                                            className="invoice-action-edit">
                                            <i className="material-icons">delete</i></a>				</div>          </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- START RIGHT SIDEBAR NAV --> */}
            </div>
            <div className="content-overlay"></div>
          </div>) : (<div className="container">
            <div className="seaction">

              <div className="row">
                <div className="col s12 m12 l12">
                  <div id="highlight-table" className="card card card-default scrollspy">
                    <div className="card-content">
                      <div className="row">
                        <div className="col s12">
                        </div>
                        <div className="col s12">
                          <h4>No Data Found</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>)}

        </div>
      </div>
      {/* <!-- END: Page Main--> */}
    </div>
  );
}
export default ListRole;