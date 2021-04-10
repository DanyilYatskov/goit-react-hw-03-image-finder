import React from 'react';
//import PropTypes from 'prop-types';
import SearchForm from './SearchForm';
import styles from './searchBar.module.scss';

const SearchBar = ({ onShowGalleryByQuery }) => {
  return (
    <header className={styles.SearchBar}>
      <SearchForm onShowGalleryByQuery={onShowGalleryByQuery} />
    </header>
  );
};

export default SearchBar;
