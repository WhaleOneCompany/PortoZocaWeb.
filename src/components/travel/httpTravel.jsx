import http from "../http/http";

class HttpTravel {
  constructor() {
    this.http = new http();
  }

  get = () => {
    return this.http.get("/travel");
  };
}

export default HttpTravel;
