'use strict';

import axios from 'axios';

const pixabayApi = async (searchrequest, pageNumber, onEachPage) => {
  try {
    return await axios.get(`https://pixabay.com/api/`, {
      params: {
        key: '44302589-5a2329cbe5164dd3461a63194',
        q: searchrequest,
        page: pageNumber,
        per_page: onEachPage,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });
  } catch (error) {
    gallery.innerHTML =
      'Something went wrong. <br/>Error happend during request.';
    console.error(error);
  }
};

export default pixabayApi;
