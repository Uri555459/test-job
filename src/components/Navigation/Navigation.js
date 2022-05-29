import { useState } from "react";
import { Link } from "react-scroll";

import "./navigation.scss";

export const Navigation = ({ burgerMenuIcon = true }) => {
  const [menuToggle, setMenuToggle] = useState(false);

  const buttonMenuHandler = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <nav className="nav">
      <ul className={`nav__list ${menuToggle ? "active" : ""}`}>
        <li>
          <Link
            to="biography"
            smooth={true}
            duration={1000}
            className="nav__link"
          >
            биография
          </Link>
        </li>
        <li>
          <Link
            to="creativity"
            smooth={true}
            duration={1000}
            className="nav__link"
          >
            творчество
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={1000} className="nav__link">
            картины
          </Link>
        </li>
        <li>
          <Link
            to="museums"
            smooth={true}
            duration={1000}
            className="nav__link"
          >
            музеи
          </Link>
        </li>
      </ul>
      {burgerMenuIcon ? (
        <button onClick={buttonMenuHandler} className="burger-menu-btn">
          <img src="images/burger-menu-icon.svg" alt="" />
        </button>
      ) : null}
    </nav>
  );
};
