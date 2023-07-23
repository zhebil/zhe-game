import { constants } from './index';

const { ROUTES } = constants;

type linkItem = {
  title: string;
  path: string;
};
export const navbarLinks: linkItem[] = [{ title: 'Мафія', path: ROUTES.MAFIA }];
