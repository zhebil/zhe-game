import constants from '.';
import AdminPage from '../pages/Admin-page';
import NeverPage from '../pages/Never-page';
import Presets from '../pages/Presets-page';
import QuestionsPage from '../pages/Questions-page';
import SelectPlayersPage from '../pages/Select-players-page';
import TruthPage from '../pages/Truth-page';

const router = [
  {
    path: constants.routes.truth,
    exact: true,
    component: TruthPage,
  },
  {
    path: constants.routes.never,
    exact: false,
    component: NeverPage,
  },
  {
    path: constants.routes.questions,
    exact: false,
    component: QuestionsPage,
  },
  {
    path: constants.routes.selectPlayers,
    exact: false,
    component: SelectPlayersPage,
  },
  {
    path: constants.routes.adminPage,
    exact: false,
    component: AdminPage,
  },
  {
    path: constants.routes.presets,
    exact: true,
    component: Presets,
  },
];
export default router;
