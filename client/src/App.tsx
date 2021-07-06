import React, { ReactElement } from 'react';
import Header from './components/header';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import './sass/style.scss';
import router, { IRouterItem } from './constants/router';
import Messages from './components/messages';
import { Footer } from './components/footer';

const App: React.FC = (): ReactElement => {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          {router.map(
            ({ exact, path, component: Component }: IRouterItem, i: number) => {
              return (
                <Route key={path} exact={exact} path={path}>
                  <Component />
                </Route>
              );
            }
          )}
          <Route>{/* <NotFound /> */}</Route>
        </Switch>
      </main>
      <Footer />
      <Messages />
    </Router>
  );
};

export default App;
