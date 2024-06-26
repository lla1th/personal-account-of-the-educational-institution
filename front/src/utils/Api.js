import axios from 'axios';

class Api {
  constructor(
    SERVER_API,
  ) {
    const baseURL = SERVER_API;

    this.instance = axios.create({
      baseURL,
        headers: {'X-Custom-Header': 'foobar'}
    });

    this.post = async (url, data = {}, config = {}) => this.instance.post(url, data, config);

    this.patch = async (url, data, config = {}) => this.instance.patch(url, data, config);

    this.put = async (url, data, config = {}) => this.instance.put(url, data, config);

    this.get = async (url, config = {}) => this.instance.get(url, config);

    this.delete = async (url, config = {}) => this.instance.delete(url, config);
  }
}

export default (new Api('http://localhost:5022/'));
