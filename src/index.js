import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store";
import "firebase/firestore";
import {
  FirestoreCollection,
  FirestoreProvider,
} from "@react-firebase/firestore";
import { config } from "./services/config";
import Spinner from "./components/spinner";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
