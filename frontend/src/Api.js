import 'whatwg-fetch';

const URL = process.env.REACT_APP_API_URL;

class Api {

  index(urls) {
    return Promise.all(urls.map((url) => {
      const parsedUrl = encodeURIComponent(url);
      return fetch(`${URL}?url=${parsedUrl}`).then((res) => {
        return res.text();
      })
    }));
  }

  random() {
    return fetch(`${URL}/random`).then((res) => {
      return res.json();
    })
  }
}

export default new Api();
