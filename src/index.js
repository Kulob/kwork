import React from "react";
import { CssBaseline } from '@mui/material';
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
    <CssBaseline />
      <App />
    </BrowserRouter>
  </>
);

