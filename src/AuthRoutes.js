import React from "react";
import { Switch, Route, useHistory, } from "react-router-dom";
import { ForgotPassword } from "./pages/Auth/forgotPassword";
import Login from "./pages/Auth/Login";
import { ResetPassword } from "./pages/Auth/resetPassword";
const AuthRoutes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Login />
            </Route>
            <Route exact path="/forgotpassword">
                <ForgotPassword />
            </Route>
            <Route path="/reset-password/:token">
                <ResetPassword />
            </Route>
        </Switch>
    );
};
export default AuthRoutes