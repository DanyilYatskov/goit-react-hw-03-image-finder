import React, { Component } from 'react';
import fetchAPI from '../API/fetchAPI';
import Modal from '../components/Modal';
import SearchBar from '../components/SearchBar/';
import ImageGallery from '../components/ImageGallery';
import Notification from '../components/Notification';
import LoadMoreBtn from '../components/Button';
import Loader from '../components/Loader';
import styles from './app.module.scss';

class App extends Component {
  state = {
    gallery: [],
    searchQuery: '',
    modalVisible: false,
    showPaginationBtn: false,
    bodyOverflow: 'scroll',
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
    document.body.style.overflow = this.state.bodyOverflow;
  }

  onNewSearch = ({ query }) => {
    fetchAPI.resetPageToFirst();
    this.setState({
      searchQuery: query,
      gallery: [],
      showPaginationBtn: false,
      showLoader: false,
      currentBigPicture: '',
    });
  };

  renderGallery = () => {
    this.setState({ showPaginationBtn: false, showLoader: true });
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
      .catch(error => console.log(error))
      .finally(() => this.setState({ showLoader: false }));
  };

  changeModalState = () => {
    this.setState(({ modalVisible, bodyOverflow }) => ({
      modalVisible: !modalVisible,
      bodyOverflow: bodyOverflow === 'hidden' ? 'scroll' : 'hidden',
    }));
  };

  imageClickHandler = event => {
    if (event.target.nodeName !== 'IMG') {
      return;
    }
    this.setState({ currentBigPicture: event.target.dataset.source });
    this.changeModalState();
  };

  render() {
    const {
      modalVisible,
      gallery,
      showPaginationBtn,
      showLoader,
      currentBigPicture,
    } = this.state;
    return (
      <div className={styles.App}>
        <SearchBar onShowGalleryByQuery={this.onNewSearch} />

        {gallery.length > 0 ? (
          <ImageGallery
            gallery={gallery}
            handleOnImageClick={this.imageClickHandler}
          />
        ) : (
          <Notification message="No images to show, Pls enter correct image query" />
        )}
        {showLoader && <Loader />}
        {showPaginationBtn && (
          <LoadMoreBtn
            name="Load More"
            type="Button"
            handleOnClick={this.renderGallery}
          />
        )}
        {modalVisible && (
          <Modal onClose={this.changeModalState}>
            <img src={currentBigPicture} alt="hello" />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
