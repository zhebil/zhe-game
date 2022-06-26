import { constants } from './index';

const { ROUTES } = constants;

type linkItem = {
  title: string;
  path: string;
};
export const navbarLinks: linkItem[] = [
  { title: 'Правда или Действие', path: ROUTES.TRUTH },
  { title: 'Я никогда не', path: ROUTES.NEVER },
  { title: 'Вопросы', path: ROUTES.QUESTIONS },
  { title: 'Покер', path: ROUTES.POKER },
  { title: 'Мафія', path: ROUTES.MAFIA },
  { title: 'Добавить свои', path: ROUTES.ADMIN_PAGE },
  { title: 'Пресеты', path: ROUTES.PRESETS },
];
