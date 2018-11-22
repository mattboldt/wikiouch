import 'whatwg-fetch';

class Api {
  index(ids) {
    return Promise.all(ids.map((id) => {
      const page = this.pages.find((url) => url.id.toString() === id);
      return fetch(page.url).then((res) => {
        return res.json();
      })
    }));
  }

  get pages() {
    return [
      { id: 1, url: '/pages/1.json' },
      { id: 2, url: '/pages/2.json' },
      { id: 3, url: '/pages/3.json' }
    ]
  }
}

export default new Api();
