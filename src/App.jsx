import React, { useEffect, useState } from "react";
import "./App.scss";
import SideBar from "./layouts/SideBar";
import { Navigate, Route, Routes, Outlet } from "react-router-dom";
import ChatBar from "./components/chat";
import Login from "./layouts/login";
import { useStateValue } from "./store/stateProvider";
import Header from "./layouts/Header";
import Restricted from "./layouts/restricted";
import Private from "./layouts/private";
import HomePage from "./layouts/home";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <Routes>
      <Route element={<Restricted />}>
        <Route path="/login" element={<Login />} />
      </Route>

      <Route element={<Private />}>
        <Route path="/room/:roomId" element={<ChatBar />} />
        <Route index element={<HomePage/>} />
      </Route>
    </Routes>
  );
}

export default App;
