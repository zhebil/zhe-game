import React, { ReactElement } from 'react';
import { Header } from './layout/Header';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import './sass/style.scss';
import { IRouterItem, router } from './constants/router';
import { Messages } from './components/Messages/Messages';
import { Footer } from './layout/Footer';
import { MafiaGame } from './games/Mafia.game';

const App: React.FC = (): ReactElement => {
  return (
    <Router>
      <Header />

      <MafiaGame />

      <Footer />
      <Messages />
    </Router>
  );
};

export { App };
