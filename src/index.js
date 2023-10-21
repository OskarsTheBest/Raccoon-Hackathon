import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Sidebar from "./Sidebar";
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('Ngo9BigBOggjHTQxAR8/V1NHaF5cXmVCf1JpR2NGfV5yd0VBal1RTndfUiweQnxTdEZiWX1fcHNURmFcWE1wVw==');


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="main-container">
      <Sidebar />
      <App />
    </div>
  </React.StrictMode>
);

reportWebVitals();
