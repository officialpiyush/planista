import dayjs from "dayjs";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import { initializeApp } from "firebase/app";

import utcPlugin from "dayjs/plugin/utc";
import timezonePlugin from "dayjs/plugin/timezone";

import "virtual:fonts.css";
import "virtual:windi.css";

import App from "./App";

dayjs.extend(utcPlugin);
dayjs.extend(timezonePlugin);

dayjs.tz.setDefault("Asia/Kolkatta");

const firebaseConfig = {
  apiKey: "AIzaSyBWxHDrKXB0_oFO1SzVXnYwcwOuTnnDKQM",
  authDomain: "planista-app.firebaseapp.com",
  projectId: "planista-app",
  storageBucket: "planista-app.appspot.com",
  messagingSenderId: "551508576516",
  appId: "1:551508576516:web:3be2ad8d59def684b8e851",
  measurementId: "G-3H12QL1SEH",
};

initializeApp(firebaseConfig);

// eslint-disable-next-line no-undef
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
