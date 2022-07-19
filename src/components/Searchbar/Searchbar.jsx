import { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';

import { HeaderSearchbar, SearchForm } from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    name: '',
    disabled: true,
  };

  handleInputName = ({ target }) => {
    this.setState({
      name: target.value,
      disabled: false,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const name = this.state.name;

    if (name.trim() === '') {
      toast.error('Fill in the search term!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    this.props.onSubmit(this.state);

    this.setState({
      name: '',
      disabled: true,
    });
  };

  render() {
    return (
      <HeaderSearchbar>
        <SearchForm onSubmit={this.handleSubmit}>
          <button type="submit" disabled={this.state.disabled}>
            <span>
              <BsSearch />
            </span>
          </button>

          <input
            onChange={this.handleInputName}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.name}
          />
        </SearchForm>
      </HeaderSearchbar>
    );
  }
}

export default Searchbar;
