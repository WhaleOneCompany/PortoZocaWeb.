import axios from "axios";

const server = "http://192.168.0.114:8090/v1";

class http {
  state = {
    response: null
  };

  get(func, filter) {
    return axios.get(`${server}${func}${this.getfilter(filter)}`);
  }

  getfilter = filter => {
    if (filter == null) {
      return "";
    }
    return "?search=" + encodeURIComponent(JSON.stringify(filter));
  };
}

export default http;
