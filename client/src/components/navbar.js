import React, { forwardRef, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import constants from '../constants';
const { routes } = constants;
const links = [
  { title: 'Правда или Действие', path: routes.truth },
  { title: 'Я никогда не', path: routes.never },
  { title: 'Вопросы', path: routes.questions },
  { title: 'Добавить свои', path: routes.adminPage },
  { title: 'Пресеты', path: routes.presets },
];
const Navbar = forwardRef((props, ref) => {
  const location = useLocation();
  return (
    <div className="collapse menu-transition navbar-collapse" ref={ref}>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {links.map(({ title, path }, key) => {
          const isActive = location.pathname === path ? true : false;
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
});

export default Navbar;
