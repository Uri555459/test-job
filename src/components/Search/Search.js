import { useState } from "react";

import "./search.scss";

export const Search = () => {
  const [searchShow, setSearchShow] = useState(false);

  const searchHandler = (event) => {
    event.preventDefault();
    setSearchShow(!searchShow);
  };

  return (
    <form className="search">
      <button onClick={searchHandler} type="button" className="search__btn">
        <img src="images/search-icon.svg" alt="" />
      </button>
      <input
        className={`search__input ${searchShow ? "active" : ""}`}
        type="search"
      />
    </form>
  );
};
