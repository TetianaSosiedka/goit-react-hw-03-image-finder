import { Component } from 'react';

import { Overlay, ModalWindow } from './Modal.styled';

class Modal extends Component {
  state = {
    imageLink: '',
    imageAlt: '',
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('click', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('click', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape' || event.target.tagName === 'DIV') {
      this.props.onClouse();
    }
  };

  render() {
    return (
      <Overlay>
        <ModalWindow>{this.props.children}</ModalWindow>
      </Overlay>
    );
  }
}

export default Modal;
