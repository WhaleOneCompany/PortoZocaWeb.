import http from "../http/http";

class HttpBillOfLadingItem {
  constructor() {
    this.http = new http();
  }

  get = bl => {
    return this.http.get("/itemsOfBl", { bl: bl });
  };
}

export default HttpBillOfLadingItem;
