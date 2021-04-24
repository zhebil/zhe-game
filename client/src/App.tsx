import React, { useEffect } from 'react';
import Header from './components/header';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import './sass/style.scss';
import Spinner from './components/spinner';
import router, { IRouterItem } from './constants/router';
import { useAppDispatch, useAppSelector } from './hooks/redux.hook';
import { fetchData } from './redux/ducks/gameData/truth/actionCreators';
import { gameDataStatus } from './redux/types';

const App: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const status: gameDataStatus = useAppSelector((state) => state.dare.status);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (status === gameDataStatus.LOADNIG) {
    return (
      <div className="d-flex justify-content-center vh-100 align-items-center">
        <Spinner />
      </div>
    );
  }
  if (status === gameDataStatus.ERROR) {
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
};

export default App;
