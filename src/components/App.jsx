import { Button } from './Button';
import { ImageGallery } from './ImageGallery';
// import { Modal } from './Modal';
import { Searchbar } from './Searchbar';
import React, { useState } from 'react';

export const App = () => {
  // fetch start
  const API_KEY = '36788203-2c78e2a924ca1cc7e222b7ed9';
  const PAGE = 1;
  const PER_PAGE = 12;
  const BASE_URL = 'https://pixabay.com/api/';

  const fetchImages = async inputSearch => {
    const params = new URLSearchParams({
      q: inputSearch,
      page: PAGE,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: PER_PAGE,
    });
    try {
      const response = await fetch(`${BASE_URL}?${params}`);

      if (!response.ok) {
        throw new Error('Network response has failed');
      }

      const data = await response.json();
      console.log(data.hits);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  // fetch end
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  const loadMoreFn = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  return (
    <div>
      <Searchbar onSearched={images => setImages(images)} />
      <ImageGallery images={images} />
      <Button isVisible={false} onClick={loadMoreFn} />
    </div>
  );
};
