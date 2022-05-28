import { Link } from "react-scroll";

import "./navigation.scss";

export const Navigation = () => {
  return (
    <nav className="nav">
      <Link to="biography" smooth={true} duration={1000} className="nav__link">
        биография
      </Link>
      <Link to="creativity" smooth={true} duration={1000} className="nav__link">
        творчество
      </Link>
      <Link to="about" smooth={true} duration={1000} className="nav__link">
        картины
      </Link>
      <Link to="museums" smooth={true} duration={1000} className="nav__link">
        музеи
      </Link>
    </nav>
  );
};
