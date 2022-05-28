import { Search } from "../Search/Search";

import "./header.scss";

export const Header = () => {
  return (
    <header className="header">
      <Search />

      <nav className="nav">
        <a href="#" className="nav__link">
          биография
        </a>
        <a href="#" className="nav__link">
          творчество
        </a>
        <a href="#" className="nav__link">
          картины
        </a>
        <a href="#" className="nav__link">
          музеи
        </a>
      </nav>
    </header>
  );
};
