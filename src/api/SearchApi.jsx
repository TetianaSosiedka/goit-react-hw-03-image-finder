import axios from 'axios';

export const SearchApi = (searchName, nextPage) => {
  const KEY = '27694476-af667d0eda220e59ccfe1729b';
  const URL = 'https://pixabay.com/api/';

  return axios
    .get(
      `${URL}?q=${searchName}&page=${nextPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then(response => {
      if (response.status === 200 && response.data.totalHits !== 0) {
        return response.data;
      }

      return Promise.reject(
        new Error(`There is no image with the name ${searchName}`)
      );
    });
};
