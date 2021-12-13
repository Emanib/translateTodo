import axios from "axios";

const api=axios.create({
  baseURL:'https://jsonplaceholder.typicode.com'
})

export default class APIInstance {
  static get = async (url, config={}) =>
      api.get(url, config);

  static post = async (url, body,config={}) =>
      api.post(url, body, config);

  static put = async (url, body,config={}) =>
      api.put(url, body, config);

  static delete = async (url, config={}) =>
      api.delete(url, config);
}
