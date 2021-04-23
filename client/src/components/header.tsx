import React, { useRef, useState } from 'react';
import Navbar from './navbar';

const Header: React.FC = (): JSX.Element => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [isShow, setIsShow] = useState<boolean>(false);
  const [click, setCick] = useState<boolean>(false);

  function toggleMenu(): void {
    if (click) return;
    setCick(true);

    const el: HTMLDivElement = menuRef.current!;
    el.style.display = 'block';
    el.style.height = 'auto';
    const height: number = el.offsetHeight;

    if (!isShow) {
      el.style.height = '';
      setTimeout(() => {
        el.style.height = height + 'px';
      }, 10);
    } else {
      el.style.height = height + 'px';
      setTimeout(() => {
        el.style.height = '0px';
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
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Navbar ref={menuRef} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
