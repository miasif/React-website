import axios from 'axios';
class RestClient {
  static GetRequest = (getUrl) => {
    return axios
      .get(getUrl)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error;
      });
  };
}

export default RestClient;
