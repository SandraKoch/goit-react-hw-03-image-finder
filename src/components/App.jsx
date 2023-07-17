import { ImageGallery } from './ImageGallery';
import { Modal } from './Modal';
import { Searchbar } from './Searchbar';
import React, { useState } from 'react';

export const App = () => {
  const [images, setImages] = useState([]);

  return (
    <div>
      <Searchbar onSearched={images => setImages(images)} />
      <ImageGallery images={images} />
    </div>
  );
};
