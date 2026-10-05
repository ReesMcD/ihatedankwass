export default class HttpService {
  async get(url: string, options: RequestInit = {}) {
    console.log('GET Request');
    try {
      const response = await fetch(url, { ...options, method: 'GET' });
      if (!response.ok) {
        throw new Error(`Request failed with status code ${response.status}`);
      }
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async post(_url: string, _data?: unknown, _options?: RequestInit) {
    console.log('POST Request');
  }

  async put(_url: string, _data?: unknown, _options?: RequestInit) {
    console.log('PUT Request');
  }

  async delete(_url: string, _data?: unknown, _options?: RequestInit) {
    console.log('DELETE Request');
  }
}
