import React from "react";
import { Link, useLocation } from "react-router-dom";
const links = [
  { title: "Правда или Действие", path: "/" },
  { title: "Я никогда не", path: "/never" },
  { title: "Вопросы", path: "/questions" },
  { title: "Добавить свои", path: "/admin" },
];
export default function Navbar() {
  const location = useLocation();
  return (
    <div
      className="collapse navbar-collapse justify-content-end"
      id="navbarSupportedContent"
    >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {links.map(({ title, path }, key) => {
          const isActive = (location.pathname === path ? true : false);
          return (
            <li key={key} className="nav-item">
              <Link
                className={`nav-link ${isActive ? "active" : ""}`}
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
