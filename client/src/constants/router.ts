import { FC } from 'react';
import constants from '.';
import AdminPage from '../pages/Admin-page';
import { CreatePresetsPage } from '../pages/CreatePresets-page';
import NeverPage from '../pages/Never-page';
import PresetsPage from '../pages/Presets-page';
import QuestionsPage from '../pages/Questions-page';
import SelectPlayersPage from '../pages/Select-players-page';
import TruthPage from '../pages/Truth-page';

export interface IRouterItem {
  path: string;
  exact: boolean;
  component: FC;
}
const { ROUTES } = constants;
const router: IRouterItem[] = [
  {
    path: ROUTES.TRUTH,
    exact: true,
    component: TruthPage,
  },
  {
    path: ROUTES.NEVER,
    exact: false,
    component: NeverPage,
  },
  {
    path: ROUTES.QUESTIONS,
    exact: false,
    component: QuestionsPage,
  },
  {
    path: ROUTES.SELECT_PLAYER,
    exact: false,
    component: SelectPlayersPage,
  },
  {
    path: ROUTES.ADMIN_PAGE,
    exact: false,
    component: AdminPage,
  },
  {
    path: ROUTES.PRESETS,
    exact: true,
    component: PresetsPage,
  },
  { path: ROUTES.CREATE_PRESET, exact: false, component: CreatePresetsPage },
];
export default router;
