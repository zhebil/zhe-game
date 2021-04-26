import React, { ReactElement } from 'react';
import Header from './components/header';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import './sass/style.scss';
import router, { IRouterItem } from './constants/router';
import Messages from './components/messages';

const App: React.FC = (): ReactElement => {
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
        <Messages />
      </main>
    </Router>
  );
};

export default App;
