import React from 'react';

function List_Page_New(props) {
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
                <h5 className="breadcrumbs-title mt-0 mb-0"><span>Section Title</span></h5>
                <ol className="breadcrumbs mb-0">
                  <li className="breadcrumb-item"><a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item"><a href="#">Form</a>
                  </li>
                  <li className="breadcrumb-item active">Section Title</li>
                </ol>
              </div>
              
            </div>
          </div>
        </div></div>
		
		<div className="col s3"><div className="invoice-create-btn mt-10">
    <a href="app-invoice-add.html" className="btn waves-effect waves-light invoice-create border-round z-depth-1 mt-10">
      <i className="material-icons">add</i>
      <span className="hide-on-small-only">Add New</span>
    </a>
  </div></div>
        <div className="col s12">
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
            <span>Invoice#</span>          </th>
          <th>Amount</th>
          <th>Date</th>
          <th>Customer</th>
          <th>Tags</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            <a href="app-invoice-view.html">INV-00956</a>          </td>
          <td><span className="invoice-amount">$459.30</span></td>
          <td><small>12-08-19</small></td>
          <td><span className="invoice-customer">Pixinvent PVT. LTD</span></td>
          <td>
            <span className="bullet green"></span>
            <small>Technology</small>          </td>
          <td>
            <span className="chip lighten-5 red red-text">UNPAID</span>          </td>
          <td>
            <div className="invoice-action">
              <a href="app-invoice-view.html" className="invoice-action-view mr-4">
                <i className="material-icons">remove_red_eye</i></a>
				
              <a href="app-invoice-edit.html" className="invoice-action-edit">
                <i className="material-icons">edit</i></a>            
				
				<a href="app-invoice-edit.html" className="invoice-action-edit">
                <i className="material-icons">delete</i></a>				</div>          </td>
        </tr>
        <tr>
          <td>
            <a href="app-invoice-view.html">INV-00349</a>          </td>
          <td><span className="invoice-amount">$125.00</span></td>
          <td><small>08-08-19</small></td>
          <td><span className="invoice-customer">Volkswagen</span></td>
          <td>
            <span className="bullet blue"></span>
            <small>Car</small>          </td>
          <td><span className="chip lighten-5 green green-text">PAID</span></td>
          <td><div className="invoice-action"> <a href="app-invoice-view.html" className="invoice-action-view mr-4"> <i className="material-icons">remove_red_eye</i></a> <a href="app-invoice-edit.html" className="invoice-action-edit"> <i className="material-icons">edit</i></a> <a href="app-invoice-edit.html" className="invoice-action-edit"> <i className="material-icons">delete</i></a> </div></td>
        </tr>
        <tr>
          <td>
            <a href="app-invoice-view.html">INV-00853</a>          </td>
          <td><span className="invoice-amount">$10,503</span></td>
          <td><small>02-08-19</small></td>
          <td><span className="invoice-customer">Chevron Corporation</span></td>
          <td>
            <span className="bullet grey"></span>
            <small>Corporation</small>          </td>
          <td><span className="chip lighten-5 red red-text">UNPAID</span></td>
          <td><div className="invoice-action"> <a href="app-invoice-view.html" className="invoice-action-view mr-4"> <i className="material-icons">remove_red_eye</i></a> <a href="app-invoice-edit.html" className="invoice-action-edit"> <i className="material-icons">edit</i></a> <a href="app-invoice-edit.html" className="invoice-action-edit"> <i className="material-icons">delete</i></a> </div></td>
        </tr>
        <tr>
          <td>
            <a href="app-invoice-view.html">INV-00452</a>          </td>
          <td><span className="invoice-amount">$90</span></td>
          <td><small>28-07-19</small></td>
          <td><span className="invoice-customer">Alphabet</span></td>
          <td>
            <span className="bullet cyan"></span>
            <small>Electronic</small>          </td>
          <td><span className="chip lighten-5 orange orange-text">Partially Paid</span></td>
          <td><div className="invoice-action"> <a href="app-invoice-view.html" className="invoice-action-view mr-4"> <i className="material-icons">remove_red_eye</i></a> <a href="app-invoice-edit.html" className="invoice-action-edit"> <i className="material-icons">edit</i></a> <a href="app-invoice-edit.html" className="invoice-action-edit"> <i className="material-icons">delete</i></a> </div></td>
        </tr>
        <tr>
          <td>
            <a href="app-invoice-view.html">INV-00123</a>          </td>
          <td><span className="invoice-amount">$15,900</span></td>
          <td><small>23-07-19</small></td>
          <td><span className="invoice-customer">Toyota Motor</span></td>
          <td>
            <span className="bullet blue"></span>
            <small>Car</small>          </td>
          <td><span className="chip lighten-5 green green-text">PAID</span></td>
          <td><div className="invoice-action"> <a href="app-invoice-view.html" className="invoice-action-view mr-4"> <i className="material-icons">remove_red_eye</i></a> <a href="app-invoice-edit.html" className="invoice-action-edit"> <i className="material-icons">edit</i></a> <a href="app-invoice-edit.html" className="invoice-action-edit"> <i className="material-icons">delete</i></a> </div></td>
        </tr>
        <tr>
          <td>
            <a href="app-invoice-view.html">INV-00853</a>          </td>
          <td><span className="invoice-amount">$115.06</span></td>
          <td><small>24-06-19</small></td>
          <td><span className="invoice-customer">Samsung Electronics</span></td>
          <td>
            <span className="bullet cyan"></span>
            <small>Electronic</small>          </td>
          <td><span className="chip lighten-5 green green-text">PAID</span></td>
          <td><div className="invoice-action"> <a href="app-invoice-view.html" className="invoice-action-view mr-4"> <i className="material-icons">remove_red_eye</i></a> <a href="app-invoice-edit.html" className="invoice-action-edit"> <i className="material-icons">edit</i></a> <a href="app-invoice-edit.html" className="invoice-action-edit"> <i className="material-icons">delete</i></a> </div></td>
        </tr>
        <tr>
          <td>
            <a href="app-invoice-view.html">INV-00153</a>          </td>
          <td><span className="invoice-amount">$1,090</span></td>
          <td><small>23-05-19</small></td>
          <td><span className="invoice-customer">Pixinvent PVT. LTD</span></td>
          <td>
            <span className="bullet grey"></span>
            <small>Corporation</small>          </td>
          <td><span className="chip lighten-5 red red-text">UNPAID</span></td>
          <td><div className="invoice-action"> <a href="app-invoice-view.html" className="invoice-action-view mr-4"> <i className="material-icons">remove_red_eye</i></a> <a href="app-invoice-edit.html" className="invoice-action-edit"> <i className="material-icons">edit</i></a> <a href="app-invoice-edit.html" className="invoice-action-edit"> <i className="material-icons">delete</i></a> </div></td>
        </tr>
        <tr>
          <td>
            <a href="app-invoice-view.html">INV-00788</a>          </td>
          <td><span className="invoice-amount">$555.50</span></td>
          <td><small>10-06-19</small></td>
          <td><span className="invoice-customer">ExxonMobil</span></td>
          <td>
            <span className="bullet orange"></span>
            <small>Mobile</small>          </td>
          <td><span className="chip lighten-5 red red-text">UNPAID</span></td>
          <td><div className="invoice-action"> <a href="app-invoice-view.html" className="invoice-action-view mr-4"> <i className="material-icons">remove_red_eye</i></a> <a href="app-invoice-edit.html" className="invoice-action-edit"> <i className="material-icons">edit</i></a> <a href="app-invoice-edit.html" className="invoice-action-edit"> <i className="material-icons">delete</i></a> </div></td>
        </tr>
        <tr>
          <td>
            <a href="app-invoice-view.html">INV-00326</a>          </td>
          <td><span className="invoice-amount">$8,563</span></td>
          <td><small>06-01-19</small></td>
          <td><span className="invoice-customer">Wells Fargo</span></td>
          <td>
            <span className="bullet red"></span>
            <small>Food</small>          </td>
          <td><span className="chip lighten-5 green green-text">PAID</span></td>
          <td><div className="invoice-action"> <a href="app-invoice-view.html" className="invoice-action-view mr-4"> <i className="material-icons">remove_red_eye</i></a> <a href="app-invoice-edit.html" className="invoice-action-edit"> <i className="material-icons">edit</i></a> <a href="app-invoice-edit.html" className="invoice-action-edit"> <i className="material-icons">delete</i></a> </div></td>
        </tr>
        <tr>
          <td>
            <a href="app-invoice-view.html">INV-00759</a>          </td>
          <td><span className="invoice-amount">$10,960.20</span></td>
          <td><small>22-05-19</small></td>
          <td><span className="invoice-customer">Ping An Insurance</span></td>
          <td>
            <span className="bullet grey"></span>
            <small>Corporation</small>          </td>
          <td><span className="chip lighten-5 orange orange-text">Partially Paid</span></td>
          <td><div className="invoice-action"> <a href="app-invoice-view.html" className="invoice-action-view mr-4"> <i className="material-icons">remove_red_eye</i></a> <a href="app-invoice-edit.html" className="invoice-action-edit"> <i className="material-icons">edit</i></a> <a href="app-invoice-edit.html" className="invoice-action-edit"> <i className="material-icons">delete</i></a> </div></td>
        </tr>
        <tr>
          <td>
            <a href="app-invoice-view.html">INV-00999</a>          </td>
          <td><span className="invoice-amount">$886.90</span></td>
          <td><small>12-05-19</small></td>
          <td><span className="invoice-customer">Apple</span></td>
          <td>
            <span className="bullet green"></span>
            <small>Electronic</small>          </td>
          <td><span className="chip lighten-5 red red-text">UNPAID</span></td>
          <td><div className="invoice-action"> <a href="app-invoice-view.html" className="invoice-action-view mr-4"> <i className="material-icons">remove_red_eye</i></a> <a href="app-invoice-edit.html" className="invoice-action-edit"> <i className="material-icons">edit</i></a> <a href="app-invoice-edit.html" className="invoice-action-edit"> <i className="material-icons">delete</i></a> </div></td>
        </tr>
        <tr>
          <td>
            <a href="app-invoice-view.html">INV-00223</a>          </td>
          <td><span className="invoice-amount">$459.30</span></td>
          <td><small>28-04-19</small></td>
          <td><span className="invoice-customer">Communications</span></td>
          <td>
            <span className="bullet green"></span>
            <small>Technology</small>          </td>
          <td><span className="chip lighten-5 green green-text">PAID</span></td>
          <td><div className="invoice-action"> <a href="app-invoice-view.html" className="invoice-action-view mr-4"> <i className="material-icons">remove_red_eye</i></a> <a href="app-invoice-edit.html" className="invoice-action-edit"> <i className="material-icons">edit</i></a> <a href="app-invoice-edit.html" className="invoice-action-edit"> <i className="material-icons">delete</i></a> </div></td>
        </tr>
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
        </div>
      </div>
    </div>
    {/* <!-- END: Page Main--> */}

        </div>
    );
}

export default List_Page_New;