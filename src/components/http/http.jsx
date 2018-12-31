import axios from "axios";

const server = "http://localhost:8090/v1";

class http {
  state = {
    response: null
  };

  get(func, params) {
    return axios.get(`${server}${func}`, {
      params: params
    });
  }
}

export default http;
