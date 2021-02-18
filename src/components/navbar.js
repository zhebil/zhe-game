import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div
      className="collapse navbar-collapse justify-content-end"
      id="navbarSupportedContent"
    >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
            Правда или действие
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/never">
            Я никогда не
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/questions">
            Вопросы
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin">
            Добавить свои
          </Link>
        </li>
      </ul>
    </div>
  );
}
