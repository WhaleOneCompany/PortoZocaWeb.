import http from "../http/http";

class HttpBillOfLading {
  constructor() {
    this.http = new http();
  }

  get = travel => {
    return this.http.get("/billOfLading");
  };
}

export default HttpBillOfLading;
