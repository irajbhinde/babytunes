import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {
  VideoProvider,
  AuthProvider,
  FeatureProvider,
} from "../src/Components/context/index";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <FeatureProvider>
      <AuthProvider>
        <VideoProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </VideoProvider>
      </AuthProvider>
    </FeatureProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
