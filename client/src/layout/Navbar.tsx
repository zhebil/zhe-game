import React, { forwardRef, ReactElement } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navbarLinks } from '../constants/navbar';

const Navbar = forwardRef<HTMLDivElement, { toggleMenu: () => void }>(
  ({ toggleMenu }, ref): ReactElement => {
    const location = useLocation<Location>();

    return (
      <div
        className="collapse menu-transition justify-content-end navbar-collapse"
        ref={ref}
      >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {navbarLinks.map(({ title, path }, key) => {
            const isActive: boolean = location.pathname === path;
            return (
              <li key={key} className="nav-item">
                <Link
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  aria-current="page"
                  to={path}
                  onClick={toggleMenu}
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
