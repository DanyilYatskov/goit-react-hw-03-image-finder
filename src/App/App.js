import React, { Component } from 'react';
import Modal from '../components/Modal';
import styles from './app.module.scss';

class App extends Component {
  state = {
    gallery: [],
    modalVisible: false,
  };
  changeModalState = () => {
    this.setState(({ modalVisible }) => ({
      modalVisible: !modalVisible,
    }));
  };

  render() {
    const { modalVisible } = this.state;
    return (
      <div className={styles.App}>
        {modalVisible && <Modal onClose={this.changeModalState}></Modal>}
      </div>
    );
  }
}

export default App;
