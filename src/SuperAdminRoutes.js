import React, { useEffect, useState } from "react";
import {
    Switch,
    Route,
    useHistory,
} from "react-router-dom";
import List from "./pages/Super_Admin/List";
import Dashboard from "./pages/Super_Admin/Dashboard";
import Form from "./pages/Super_Admin/AddForm";
import AddCompanies from "./pages/Super_Admin/Companies/AddCompany";
import ListCompanies from "./pages/Super_Admin/Companies/ListCompanies";
import EditCompanies from "./pages/Super_Admin/Companies/EditComapy";
import AddForm from "./pages/Super_Admin/Employee_Strength/AddForm";
import ListEmployeeStrength from "./pages/Super_Admin/Employee_Strength/ListEmployeeStrength";
import EditEmployee from "./pages/Super_Admin/Employee_Strength/EditForm";
import AddAverageForm from "./pages/Super_Admin/Average_Employee/AddForm";
import EditAverageForm from "./pages/Super_Admin/Average_Employee/EditForm";
import AddFeedForm from "./pages/Super_Admin/Feedback_Frequencies/AddForm";
import EditFeedForm from "./pages/Super_Admin/Feedback_Frequencies/EditForm";
import AddPackage from "./pages/Super_Admin/Packages/AddForm";
import EditPackage from "./pages/Super_Admin/Packages/EditForm";
import ListPackage from "./pages/Super_Admin/Packages/ListPackage";
import AddCoupon from "./pages/Super_Admin/Coupons/AddForm";
import EditCoupon from "./pages/Super_Admin/Coupons/EditForm";
import ListCoupon from "./pages/Super_Admin/Coupons/ListCoupons";
import AddSector from "./pages/Super_Admin/Sector/AddForm";
import EditSector from "./pages/Super_Admin/Sector/EditForm";
import ListSector from "./pages/Super_Admin/Sector/ListSector";
import AddUser from "./pages/Super_Admin/User/AddForm";
import EditUser from "./pages/Super_Admin/User/EditForm";
import AddRole from "./pages/Super_Admin/Role/AddForm";
import ListRole from "./pages/Super_Admin/Role/ListRole";
import EditRole from "./pages/Super_Admin/Role/EditForm";
import AddCountry from "./pages/Super_Admin/Countries/AddForm";
import AddYearOfExperience from "./pages/Super_Admin/Year_Of_Experience/AddForm";
import EditYearOfExperience from "./pages/Super_Admin/Year_Of_Experience/EditForm";
import EditCountry from "./pages/Super_Admin/Countries/EditForm";
import Login from "./pages/Auth/Login";
import ProtectedRoute from "./components/Protected";
import { ForgotPassword } from "./pages/Auth/forgotPassword";
import { ResetPassword } from "./pages/Auth/resetPassword";
import NewSidebar from "./components/NewSidebar";
import ListUsers from "./pages/Super_Admin/User/ListUsers";
import ListAvarageEmployee from "./pages/Super_Admin/Average_Employee/ListForms";
import ListCountries from "./pages/Super_Admin/Countries/ListCountries";
import LIstFeedbackFrequency from "./pages/Super_Admin/Feedback_Frequencies/ListFeedbackFrequency";
import ListYearOfExperience from "./pages/Super_Admin/Year_Of_Experience/ListYearOfExperience";
import { useLocation } from "react-router-dom";
// import "/home/ "
const SuperAdminRouting = () => {
    const history = useHistory();
    const location = useLocation();
    // const [loggedIn, setloggedIn] = useState(false);
    // useEffect(() => {
    //     const user = JSON.parse(localStorage.getItem("user"));
    //     console.log("user : " + user);
    //     if (user) {
    //         // setloggedIn(true)
    //         history.push("/");
    //     }
    //     if (location.pathname) {
    //         history.push(location.pathname)
    //     }
    //     else {
    //         history.push("/")
    //     }
    // }, []);
    return (
        <Switch>
            <Route exact path="/login" component={Login}>
            {/* <Route exact path="/" component={Login}> */}
            </Route> 
            <Route path="/forgot-password" component={ForgotPassword}>
            </Route>
            <Route path="/user/reset-password/:token" component={ResetPassword}>
            </Route>
            <ProtectedRoute exact path="/">
                <NewSidebar data={<Dashboard />} />
            </ProtectedRoute>
            <ProtectedRoute path="/viewpage">
                <NewSidebar data={<List />} />
            </ProtectedRoute>
            <ProtectedRoute path="/form">
                <NewSidebar data={<Form />} />
            </ProtectedRoute>
            <ProtectedRoute path="/companies/add">
                <NewSidebar data={<AddCompanies />} />
            </ProtectedRoute>
            <ProtectedRoute path="/companies/edit">
                <NewSidebar data={<EditCompanies />} />
            </ProtectedRoute>
            <ProtectedRoute path="/companies/view">
                <NewSidebar data={<ListCompanies />} />
            </ProtectedRoute>
            <ProtectedRoute path="/employee/add">
                <NewSidebar data={<AddForm />} />
            </ProtectedRoute>
            <ProtectedRoute path="/employee/edit">
                <NewSidebar data={<EditEmployee />} />
            </ProtectedRoute>
            <ProtectedRoute path="/employee/view">
                <NewSidebar data={<ListEmployeeStrength />} />
            </ProtectedRoute>
            <ProtectedRoute path="/averageemployee/add">
                <NewSidebar data={<AddAverageForm />} />
            </ProtectedRoute>
            <ProtectedRoute path="/averageemployee/edit">
                <NewSidebar data={<EditAverageForm />} />
            </ProtectedRoute>
            <ProtectedRoute path="/averageemployee/view">
                <NewSidebar data={<ListAvarageEmployee />} />
            </ProtectedRoute>
            <ProtectedRoute path="/feedback/add">
                <NewSidebar data={<AddFeedForm />} />
            </ProtectedRoute>
            <ProtectedRoute path="/feedback/edit">
                <NewSidebar data={<EditFeedForm />} />
            </ProtectedRoute>
            <ProtectedRoute path="/feedback/view">
                <NewSidebar data={<LIstFeedbackFrequency />} />
            </ProtectedRoute>
            <ProtectedRoute path="/package/add">
                <NewSidebar data={<AddPackage />} />
            </ProtectedRoute>
            <ProtectedRoute path="/package/edit">
                <NewSidebar data={<EditPackage />} />
            </ProtectedRoute>
            <ProtectedRoute path="/package/view">
                <NewSidebar data={<ListPackage />} />
            </ProtectedRoute>
            <ProtectedRoute path="/coupon/add">
                <NewSidebar data={<AddCoupon />} />
            </ProtectedRoute>
            <ProtectedRoute path="/coupon/edit">
                <NewSidebar data={<EditCoupon />} />
            </ProtectedRoute>
            <ProtectedRoute path="/coupon/view">
                <NewSidebar data={<ListCoupon />} />
            </ProtectedRoute>
            <ProtectedRoute path="/sector/add">
                <NewSidebar data={<AddSector />} />
            </ProtectedRoute>
            <ProtectedRoute path="/sector/edit">
                <NewSidebar data={<EditSector />} />
            </ProtectedRoute>
            <ProtectedRoute path="/sector/view">
                <NewSidebar data={<ListSector />} />
            </ProtectedRoute>
            <ProtectedRoute path="/user/add">
                <NewSidebar data={<AddUser />} />
            </ProtectedRoute>
            <ProtectedRoute path="/user/edit">
                <NewSidebar data={<EditUser />} />
            </ProtectedRoute>
            <ProtectedRoute path="/user/view">
                <NewSidebar data={<ListUsers />} />
            </ProtectedRoute>
            <ProtectedRoute path="/role/add">
                <NewSidebar data={<AddRole />} />
            </ProtectedRoute>
            <ProtectedRoute path="/role/edit">
                <NewSidebar data={<EditRole />} />
            </ProtectedRoute>
            <ProtectedRoute path="/role/view">
                <NewSidebar data={<ListRole />} />
            </ProtectedRoute>
            <ProtectedRoute path="/countries/add">
                <NewSidebar data={<AddCountry />} />
            </ProtectedRoute>
            <ProtectedRoute path="/countries/edit">
                <NewSidebar data={<EditCountry />} />
            </ProtectedRoute>
            <ProtectedRoute path="/countries/view">
                <NewSidebar data={<ListCountries />} />
            </ProtectedRoute>
            <ProtectedRoute path="/year_of_experience/add">
                <NewSidebar data={<AddYearOfExperience />} />
            </ProtectedRoute>
            <ProtectedRoute path="/year_of_experience/edit">
                <NewSidebar data={<EditYearOfExperience />} />
            </ProtectedRoute>
            <ProtectedRoute path="/year_of_experience/view">
                <NewSidebar data={<ListYearOfExperience />} />
            </ProtectedRoute>
        </Switch>
    );
};
export default SuperAdminRouting