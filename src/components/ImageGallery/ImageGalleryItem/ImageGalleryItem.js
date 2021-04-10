import React from 'react';
import PropTypes from 'prop-types';
import styles from './imageGalleryItem.module.scss';

const ImageGalleryItem = ({ gallery, handleOnImageClick }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={gallery.webformatURL}
        alt={gallery.tags}
        className={styles.image}
        data-source={gallery.largeImageURL}
        onClick={handleOnImageClick}
      />
      <div className={styles.stats}>
        <p>
          <i class="material-icons">thumb_up</i>
          {gallery.likes}
        </p>
        <p>
          <i class="material-icons">visibility</i>
          {gallery.views}
        </p>
        <p>
          <i class="material-icons">comment</i>
          {gallery.comments}
        </p>
        <p>
          <i class="material-icons">cloud_download</i>
          {gallery.downloads}
        </p>
      </div>
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.defaultProps = {
  handleOnImageClick: () => null,
};

ImageGalleryItem.propTypes = {
  gallery: PropTypes.array.isRequired,
  handleOnImageClick: PropTypes.func,
};
