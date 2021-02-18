import React, { useEffect } from "react";
import Header from "./components/header";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import TruthPage from "./pages/Truth-page";
import NeverPage from "./pages/Never-page";
import QuestionsPage from "./pages/Questions-page";
import AdminPage from "./pages/Admin-page";
import SelectPlayersPage from "./pages/Select-players-page";
import "./sass/style.scss";
import { useDispatch } from "react-redux";
import { setData } from "./actions";
function App({ data }) {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setData(data))
  }, [data, dispatch])

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
