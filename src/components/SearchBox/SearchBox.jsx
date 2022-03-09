import React from "react";

import "./SearchBox.scss";

const SearchBox = props => {
  const { label, searchTerm, handleInput } = props;

  const capitalizedLabel = label[0].toUpperCase() + label.slice(1);

  return (
    <>
   <form className="search-box">
      <input type="text" name={label} value={searchTerm} onInput={handleInput} className="search-box__input"/>
    </form>
  </>)
};

export default SearchBox;
