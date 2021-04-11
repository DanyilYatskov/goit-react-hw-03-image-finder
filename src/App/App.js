import React, { Component } from 'react';
import fetchAPI from '../API/fetchAPI';
import Modal from '../components/Modal';
import SearchBar from '../components/SearchBar/';
import ImageGallery from '../components/ImageGallery';
import Notification from '../components/Notification';
import LoadMoreBtn from '../components/Button';
import styles from './app.module.scss';

class App extends Component {
  state = {
    gallery: [],
    searchQuery: '',
    modalVisible: false,
    showPaginationBtn: false,
  };

  windowScrollTo = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.renderGallery();
    }
  }

  onNewSearch = ({ query }) => {
    fetchAPI.resetPageToFirst();
    this.setState({
      searchQuery: query,
      gallery: [],
      showPaginationBtn: false,
    });
  };

  renderGallery = () => {
    const { searchQuery } = this.state;
    fetchAPI.tag = searchQuery;
    fetchAPI
      .fetchImages()
      .then(hits => {
        if (hits.length === 0) {
          return;
        }

        this.setState(prevState => ({
          gallery: [...prevState.gallery, ...hits],
          showPaginationBtn:
            hits.length === fetchAPI.itemsOnPage ? true : false,
        }));

        this.windowScrollTo();
      })
      .catch(error => console.log(error));
  };

  changeModalState = () => {
    this.setState(({ modalVisible }) => ({
      modalVisible: !modalVisible,
    }));
  };

  // togglePaginationBtn = () => {
  //   this.setState(({ showPaginationBtn }) => ({
  //     showGalshowPaginationBtnlery: !showPaginationBtn,
  //   }));
  // };

  render() {
    const { modalVisible, gallery, showPaginationBtn } = this.state;
    return (
      <div className={styles.App}>
        <SearchBar onShowGalleryByQuery={this.onNewSearch} />
        {gallery.length > 0 ? (
          <ImageGallery gallery={gallery} />
        ) : (
          <Notification message="No images to show, Pls enter correct image query" />
        )}
        {showPaginationBtn && (
          <LoadMoreBtn
            name="Load More"
            type="Button"
            handleOnClick={this.renderGallery}
          />
        )}
        {modalVisible && <Modal onClose={this.changeModalState}></Modal>}
      </div>
    );
  }
}

export default App;
