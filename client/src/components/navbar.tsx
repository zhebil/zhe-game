import React, { forwardRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import constants from '../constants/index';
const { ROUTES } = constants;
type linkItem = {
  title: string;
  path: string;
};
const links: linkItem[] = [
  { title: 'Правда или Действие', path: ROUTES.TRUTH },
  { title: 'Я никогда не', path: ROUTES.NEVER },
  { title: 'Вопросы', path: ROUTES.QUESTIONS },
  { title: 'Добавить свои', path: ROUTES.ADMIN_PAGE },
  { title: 'Пресеты', path: ROUTES.PRESETS },
];
const Navbar = forwardRef<HTMLDivElement, {}>(
  (props, ref): JSX.Element => {
    const location = useLocation<Location>();

    return (
      <div className="collapse menu-transition navbar-collapse" ref={ref}>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {links.map(({ title, path }, key) => {
            const isActive: boolean = location.pathname === path;
            return (
              <li key={key} className="nav-item">
                <Link
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  aria-current="page"
                  to={path}
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
);

export default Navbar;
