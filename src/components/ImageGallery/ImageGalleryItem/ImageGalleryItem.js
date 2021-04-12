import React from 'react';
import PropTypes from 'prop-types';
import styles from './imageGalleryItem.module.scss';

const ImageGalleryItem = ({ image, handleOnImageClick }) => {
  return (
    <li className={styles.item} onClick={event => handleOnImageClick(event)}>
      <img
        src={image.webformatURL}
        alt={image.tags}
        className={styles.image}
        data-source={image.largeImageURL}
      />
      <div className={styles.stats}>
        <p>
          <i className="material-icons">thumb_up</i>
          {image.likes}
        </p>
        <p>
          <i className="material-icons">visibility</i>
          {image.views}
        </p>
        <p>
          <i className="material-icons">comment</i>
          {image.comments}
        </p>
        <p>
          <i className="material-icons">cloud_download</i>
          {image.downloads}
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
  image: PropTypes.object.isRequired,
  handleOnImageClick: PropTypes.func,
};
