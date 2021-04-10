import React, { Component } from 'react';
import fetchAPI from '../API/fetchAPI';
import Modal from '../components/Modal';
import SearchBar from '../components/SearchBar/';
import ImageGallery from '../components/ImageGallery';
import Notification from '../components/Notification';
import styles from './app.module.scss';

class App extends Component {
  state = {
    gallery: [],
    modalVisible: false,
  };

  renderGallery = ({ query }) => {
    fetchAPI.tag = query;
    fetchAPI
      .fetchImages()
      .then(hits => {
        if (hits.length === 0) {
          return;
        }
        this.setState(prevState => ({
          gallery: [...prevState.gallery, ...hits],
        }));
      })
      .catch(error => console.log(error));
  };

  changeModalState = () => {
    this.setState(({ modalVisible }) => ({
      modalVisible: !modalVisible,
    }));
  };

  toggleGallery = () => {
    this.setState(({ showGallery }) => ({ showGallery: !showGallery }));
  };

  render() {
    const { modalVisible, gallery } = this.state;
    console.log(gallery);
    return (
      <div className={styles.App}>
        <SearchBar onShowGalleryByQuery={this.renderGallery} />
        {gallery.length > 0 ? (
          <ImageGallery gallery={gallery} />
        ) : (
          <Notification message="No images found, Pls enter correct image query" />
        )}
        {modalVisible && <Modal onClose={this.changeModalState}></Modal>}
      </div>
    );
  }
}

export default App;
