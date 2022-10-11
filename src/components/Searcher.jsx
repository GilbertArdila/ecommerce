import React from 'react';

const Searcher = ({ handleSearch, searchInput, search }) => {
  return (
    <input
      type="text"
      className="Searcher"
      value={search}
      ref={searchInput}
      onChange={handleSearch}
      placeholder={'Estoy buscando'}
    />
  );
};

export { Searcher };
