import React from "react";
import "./App.scss";
import Header from "./layouts/header";
import SideBar from "./layouts/SideBar";
import { Route, Routes } from "react-router-dom";
import ChatBar from "./components/chat";

function App() {
  return (
    <>
      <h1>Slack Clone Lets Go :rocket</h1>
      <Header />
      <div className="app_body">
        <SideBar />

        <Routes>
          <Route path="/room/:roomId" element={<ChatBar/>} /> 
          <Route path="/" element={<h1>Welcome</h1>} />x
        </Routes>
      </div>
    </>
  );
}

export default App;
