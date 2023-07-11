import axios from 'axios'
export const toImages = async (querySearch, page, perPage) => {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = new URLSearchParams({
    key: '38200936-a4e2c2bd0c68444647b59d521',
    q: querySearch,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: perPage,
  });
  const response = await axios.get(`${BASE_URL}?${params.toString()}`);
  return response;
};