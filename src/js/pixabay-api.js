'use strict';

const pixabayApi = searchrequest =>
  fetch(
    `https://pixabay.com/api/?key=44302589-5a2329cbe5164dd3461a63194&q=${searchrequest}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });

export default pixabayApi;
