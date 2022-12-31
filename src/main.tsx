import dayjs from "dayjs";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import utcPlugin from "dayjs/plugin/utc";
import timezonePlugin from "dayjs/plugin/timezone";

import "virtual:fonts.css";
import "virtual:windi.css";

import App from "./App";

dayjs.extend(utcPlugin);
dayjs.extend(timezonePlugin);

dayjs.tz.setDefault("Asia/Kolkatta");

// eslint-disable-next-line no-undef
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
