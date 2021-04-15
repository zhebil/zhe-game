import React, { useEffect, useState } from 'react';
import Header from './components/header';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import TruthPage from './pages/Truth-page';
import NeverPage from './pages/Never-page';
import QuestionsPage from './pages/Questions-page';
import AdminPage from './pages/Admin-page';
import SelectPlayersPage from './pages/Select-players-page';
import './sass/style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from './actions';
import { getServerData } from './utillity/getServerData';
import Spinner from './components/spinner';

function App() {
  const dispatch = useDispatch();
  const [fetch, setFetch] = useState({ error: false, loading: true });
  useEffect(() => {
    (async () => {
      try {
        const dataType = ['truth', 'dare', 'never'];
        let data = {};
        for (const item of dataType) {
          data[item] = (await getServerData(item)).data;
        }
        dispatch(setData(data));
        setFetch({ error: false, loading: false });
      } catch (e) {
        setFetch({ error: true, loading: false });
      }
    })();
  }, [dispatch]);
  if (fetch.loading) {
    return <Spinner />;
  }
  if (fetch.error) {
    return <h1>Что-то пошло не так</h1>;
  }
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
