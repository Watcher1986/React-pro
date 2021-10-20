import React, { Component } from 'react';

const SearchBar = props => {
  const handleFilterTextChange = e => {
    props.onFilterTextChange(e.target.value);
  };

  const handleInStockChange = e => {
    props.onInStockChange(e.target.checked);
  };

  // const filterText = props.filterText;
  // const inStockOnly = props.inStockOnly;

  const { filterText, inStockOnly } = props;

  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={handleFilterTextChange}
      />
      <p>
        <input type="checkbox" checked={inStockOnly} onChange={handleInStockChange} /> Only show
        products in stock
      </p>
    </form>
  );
};

export default SearchBar;
