import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from "./store/stateProvider/index.jsx";
import Reducer, { initialState } from "./store/stateProvider/reducer.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StateProvider initialState={initialState} reducer={Reducer}>
      <App />
    </StateProvider>
  </BrowserRouter>
);
