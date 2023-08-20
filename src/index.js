import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContextprovider from "./Components/Store/AuthContextprovider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextprovider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthContextprovider>
);
