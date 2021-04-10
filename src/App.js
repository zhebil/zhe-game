import React, { useEffect } from "react";
import Header from "./components/header";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import TruthPage from "./pages/Truth-page";
import NeverPage from "./pages/Never-page";
import QuestionsPage from "./pages/Questions-page";
import AdminPage from "./pages/Admin-page";
import SelectPlayersPage from "./pages/Select-players-page";
import "./sass/style.scss";
import { useDispatch, useSelector } from "react-redux";
import { setData, setTruth } from "./actions";
import { getData } from "./utillity/getData";
import Spinner from "./components/spinner";

function App() {
  const dispatch = useDispatch();

  const dataToConsole = useSelector(state=> state.dare.all)
  useEffect(() => {
    const dataType = ["truth", "dare", "never"];
    let data = {};
    dataType.forEach((item) => {
      data[item] = getData(item);
    });
    dispatch(setData(data));
  }, [dispatch]);
console.log(dataToConsole.length, dataToConsole);
 
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <TruthPage />
          </Route>
          <Route path="/never">
            <NeverPage />
          </Route>
          <Route path="/questions">
            <QuestionsPage />
          </Route>
          <Route path="/select-players">
            <SelectPlayersPage />
          </Route>
          <Route path="/admin">
            <AdminPage />
          </Route>

          <Route>{/* <NotFound /> */}</Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
