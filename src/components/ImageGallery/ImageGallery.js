import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem/';
import styles from './ImageGallery.module.scss';

const ImageGallery = ({ gallery }) => {
  return (
    <ul className={styles.ImageGallery}>
      <ImageGalleryItem id={gallery.id} gallery={gallery} />
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  gallery: PropTypes.array.isRequired,
};
