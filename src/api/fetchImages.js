const API_KEY = '36788203-2c78e2a924ca1cc7e222b7ed9';
const PAGE = 1;
const PER_PAGE = 12;

export const fetchImages = async inputSearch => {
  try {
    const response = await fetch(
      `https://pixabay.com/api/?q=${inputSearch}&page=${PAGE}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
    );

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
