import React, { useEffect, useState } from 'react';
import Header from './components/header';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import './sass/style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from './actions';
import api from './api/api';
import Spinner from './components/spinner';
import router from './constants/router';

function App() {
  const dispatch = useDispatch();
  const [fetch, setFetch] = useState({ error: false, loading: true });
  useEffect(() => {
    (async () => {
      try {
        const dataType = ['truth', 'dare', 'never'];
        let data = {};
        for (const item of dataType) {
          data[item] = (await api.getDataByType(item)).data;
        }
        dispatch(setData(data));
        setFetch({ error: false, loading: false });
      } catch (e) {
        setFetch({ error: true, loading: false });
      }
    })();
  }, [dispatch]);
  if (fetch.loading) {
    return (
      <div className="d-flex justify-content-center vh-100 align-items-center">
        <Spinner />
      </div>
    );
  }
  if (fetch.error) {
    return <h1>Что-то пошло не так</h1>;
  }
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          {router.map(({ exact, path, component: Component }, i) => {
            return (
              <Route key={i} exact={exact} path={path}>
                <Component />
              </Route>
            );
          })}
          <Route>{/* <NotFound /> */}</Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
