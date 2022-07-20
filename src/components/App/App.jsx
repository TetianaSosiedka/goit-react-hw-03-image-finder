import Container from './App.styled';

import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SearchApi } from '../../api/SearchApi.jsx';

import Searchbar from 'components/Searchbar';
import ButtonComponent from 'components/Button';
import ImageGallery from 'components/ImageGallery';
import Loader from 'components/Loader';
import Modal from 'components/Modal';

export class App extends Component {
  state = {
    name: '',
    images: [],
    page: 1,
    totalHits: 0,
    isLoading: false,
    currentImg: [],
    showModal: false,
  };

  componentDidUpdate(prevPrors, prevState) {
    const prevName = prevState.name.trim();
    const nextName = this.state.name.trim();
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevName !== nextName) {
      this.setState({ page: 1 });
    }

    if (prevName !== nextName || prevPage !== nextPage) {
      this.setState({ isLoading: true });

      SearchApi(nextName, nextPage)
        .then(({ hits, totalHits }) => {
          this.setState({ totalHits: totalHits });
          if (prevName === nextName) {
            this.setState(prevState => ({
              images: [...prevState.images, ...hits],
            }));
          }
          if (prevName !== nextName) {
            this.setState({ images: hits });
          }
        })
        .catch(error =>
          toast.error(error.message, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        )
        .finally(() => this.setState({ isLoading: false }));
    }
    if (this.state.images.length > this.state.totalHits) {
      toast('No more pictures for your request!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  hendleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  getSearchName = name => {
    this.setState(name);
  };

  hendleOupenModal = event => {
    this.setState({
      showModal: true,
      currentImg: [event.target.alt, event.target.dataset.modal],
    });
  };

  hendleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const images = this.state.images;
    const totalHits = this.state.totalHits;
    const isLoading = this.state.isLoading;
    const showModal = this.state.showModal;
    const currentImgTag = this.state.currentImg[0];
    const currentImgLink = this.state.currentImg[1];

    return (
      <>
        <Searchbar onSubmit={this.getSearchName} />

        <Container onClick={this.hendleOupenModal}>
          <ImageGallery images={this.state.images} />

          {isLoading && <Loader />}
        </Container>

        {totalHits > images.length > 0 && !isLoading && (
          <ButtonComponent onLoadMore={this.hendleLoadMore}>
            Load more
          </ButtonComponent>
        )}

        {showModal && (
          <Modal onClouse={this.hendleCloseModal}>
            <img src={currentImgLink} alt={currentImgTag} />
          </Modal>
        )}

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <ToastContainer />
      </>
    );
  }
}
