import React, { Component } from 'react';
import Modal from '../components/Modal';
import SearchBar from '../components/SearchBar/';
import styles from './app.module.scss';

class App extends Component {
  state = {
    gallery: [],
    modalVisible: false,
  };

  renderGallery = ({ query }) => {};

  changeModalState = () => {
    this.setState(({ modalVisible }) => ({
      modalVisible: !modalVisible,
    }));
  };

  render() {
    const { modalVisible } = this.state;
    return (
      <div className={styles.App}>
        <SearchBar onShowGalleryByQuery={this.renderGallery} />
        {modalVisible && <Modal onClose={this.changeModalState}></Modal>}
      </div>
    );
  }
}

export default App;
