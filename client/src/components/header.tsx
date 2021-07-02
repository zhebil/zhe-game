import React, { ReactElement, useRef, useState } from 'react';
import { slideToggle } from '../utillity';
import Navbar from './navbar';

const Header: React.FC = (): ReactElement => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [isShow, setIsShow] = useState<boolean>(false);
  const [click, setCick] = useState<boolean>(false);

  function toggleMenu(): void {
    if (click) return;
    setCick(true);

    const el: HTMLDivElement = menuRef.current!;
    slideToggle(el, isShow, () => {
      setIsShow(!isShow);
      setCick(false);
    });
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
          <Navbar toggleMenu={toggleMenu} ref={menuRef} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
