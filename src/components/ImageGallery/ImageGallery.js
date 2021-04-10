import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem/';
import styles from './imageGallery.module.scss';

const ImageGallery = ({ gallery }) => {
  return (
    <ul className={styles.ImageGallery}>
      {gallery.map(image => (
        <ImageGalleryItem key={image.id} image={image} />
      ))}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  gallery: PropTypes.array.isRequired,
};
