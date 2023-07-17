import css from './ImageGalleryItem.module.css';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  render() {
    const { webformatURL, largeImageURL, tags } = this.props.item;
    return (
      <li className={css.galleryItem}>
        <img className={css.galleryImage} src={webformatURL} alt={tags} />
      </li>
    );
  }
}
