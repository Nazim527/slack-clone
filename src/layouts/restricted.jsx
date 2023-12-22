import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateValue } from "../store/stateProvider";

const Restricted = () => {
  const [{ user }] = useStateValue();

  return user ? <Navigate to="/" /> : 
  <>
    <Outlet />;
    <Navigate to={'/login'}/> 
  </>
};

export default Restricted;
