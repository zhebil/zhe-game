import React, { useRef, useState } from 'react';
import Navbar from './navbar';

export default function Header(props) {
  const menuRef = useRef(null);
  const [isShow, setIsShow] = useState(false);
  const [click, setCick] = useState(false);

  function toggleMenu() {
    if (click) return false;

    setCick(true);
    const el = menuRef.current;
    el.style.display = 'block';
    el.style.height = 'auto';
    const height = el.offsetHeight;

    if (!isShow) {
      el.style.height = '';
      setTimeout(() => {
        el.style.height = height + 'px';
      }, 10);
    } else {
      el.style.height = height + 'px';
      setTimeout(() => {
        el.style.height = 0;
      }, 10);
    }
    setTimeout(() => {
      setIsShow(!isShow);
      setCick(false);
    }, 350);
  }
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container ">
          <a className="navbar-brand" href="/">
            Zhe-Game
          </a>
          <button
            className="navbar-toggler"
            type="button"
            // data-bs-toggle="collapse"
            // data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            onClick={toggleMenu}
            // => true
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Navbar ref={menuRef} />
        </div>
      </nav>
    </header>
  );
}
