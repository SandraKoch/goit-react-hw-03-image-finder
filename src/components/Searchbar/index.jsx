import { Component } from 'react';
// import { useCallback } from 'react';
import css from './Searchbar.module.css';
import debounce from 'lodash.debounce';
import { fetchImages } from 'api/fetchImages';
import { Loader } from 'components/Loader';

export class Searchbar extends Component {
  state = {
    loading: false,
  };

  debouncedQueryChange = debounce(async query => {
    this.setState({ loading: true });
    const fetchedData = await fetchImages(query);
    // console.log('didUpdate', fetchedData);
    this.setState({ loading: false });

    const images = fetchedData.hits;
    this.props.onSearched(images);

    console.log('images', images);
  }, 500);

  handleQueryChange = e => {
    this.debouncedQueryChange(e.target.value);
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.searchform}>
          <button type="submit" className={css.button}>
            <span className={css.buttonLabel}>Search</span>
          </button>

          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleQueryChange}
          />
        </form>
        <Loader visible={this.state.loading} />
      </header>
    );
  }
}
