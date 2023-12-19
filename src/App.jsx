import React, { useEffect, useState } from "react";
import "./App.scss";
import SideBar from "./layouts/SideBar";
import { Navigate, Route, Routes } from "react-router-dom";
import ChatBar from "./components/chat";
import Login from "./layouts/login";
import { useStateValue } from "./store/stateProvider";
import Header from "./layouts/Header";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <>
      {!user ? (
        <>
          <Login />
        </>
      ) : (
        <>
          <Header />
          <div className="app_body">
            <SideBar />

            <Routes>
              <Route path="/room/:roomId" element={<ChatBar />} />
              <Route path="/" element={<h1>Welcome</h1>} />
            </Routes>
          </div>
        </>
      )}
    </>
  );
}

export default App;
