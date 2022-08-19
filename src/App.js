import React, { createContext, useEffect, useReducer } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { reducer, initialState } from "./Reducer/userReducer";
import SuperAdminRouting from "./SuperAdminRoutes";
export const UserContext = createContext();
function App() {
  // const [state, dispatch] = useReducer(reducer, initialState);
  return (
    // <div className="">
    // <UserContext.Provider value={{ state, dispatch }}>
    //   <BrowserRouter>
    //     <SuperAdminRouting /> 
    //   </BrowserRouter>
    // </UserContext.Provider>
    // </div>
    <BrowserRouter basename={'/super-admin'}>
      <SuperAdminRouting /> 
    </BrowserRouter>
  );
}
export default App;
