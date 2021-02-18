import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store";
import firebase from "firebase/app";
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
      <FirestoreProvider {...config} firebase={firebase}>
        <FirestoreCollection path="tud">
          {(res) => {
            console.log(res);
            return res.isLoading ? <Spinner /> : <App data={res.value} />;
          }}
        </FirestoreCollection>
      </FirestoreProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
