import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateValue } from "../store/stateProvider";
import Header from "./Header";
import SideBar from "./SideBar";

const Private = () => {
  const [{ user }] = useStateValue();
  console.log("Here is Private area");
  return (
    <>
      <Header />
      <div className="app_body">
        <SideBar />
        {user?.stsTokenManager?.refreshToken ? (
          <Outlet />
        ) : (
          <Navigate to={"/login"} />
        )}
      </div>
    </>
  );
};

export default Private;
