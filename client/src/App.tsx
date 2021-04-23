import React, { useEffect, useState } from 'react';
import Header from './components/header';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import './sass/style.scss';
import { setData } from './actions/index';
import api from './api/api';
import Spinner from './components/spinner';
import router, { IRouterItem } from './constants/router';
import { useAppDispatch } from './hooks/redux.hook';

interface IFetch {
  hasError: boolean;
  isLoading: boolean;
}
export interface IFetchedData {
  truth?: any[];
  dare?: any[];
  never?: any[];
}

function App() {
  const dispatch = useAppDispatch();
  const [fetch, setFetch] = useState<IFetch>({
    hasError: false,
    isLoading: true,
  });

  useEffect(() => {
    (async () => {
      try {
        const dataTypes: string[] = ['truth', 'dare', 'never'];
        let data: IFetchedData = {};
        for (const item of dataTypes) {
          data[item as keyof IFetchedData] = (
            await api.getDataByType(item)
          ).data;
        }
        dispatch(setData(data));
        setFetch({ hasError: false, isLoading: false });
      } catch (e) {
        setFetch({ hasError: true, isLoading: false });
      }
    })();
  }, [dispatch]);

  if (fetch.isLoading) {
    return (
      <div className="d-flex justify-content-center vh-100 align-items-center">
        <Spinner />
      </div>
    );
  }
  if (fetch.hasError) {
    return <h1>Что-то пошло не так</h1>;
  }
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          {router.map(
            ({ exact, path, component: Component }: IRouterItem, i: number) => {
              return (
                <Route key={i} exact={exact} path={path}>
                  <Component />
                </Route>
              );
            }
          )}
          <Route>{/* <NotFound /> */}</Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
