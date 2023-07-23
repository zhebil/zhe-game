import { FC } from 'react';
import { constants } from '.';
import { MafiaGame } from '../games/Mafia.game';

export interface IRouterItem {
  path: string;
  exact: boolean;
  component: FC;
}
const { ROUTES } = constants;
const router: IRouterItem[] = [
  { path: ROUTES.MAFIA, exact: false, component: MafiaGame },
];
export { router };
