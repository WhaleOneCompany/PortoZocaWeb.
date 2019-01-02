import http from "../http/http";

class HttpBillOfLadingItem {
  constructor() {
    this.http = new http();
  }

  get = bl => {
    return this.http.get("/itemsOfBl", {
      items: [{ key: "bl", op: "EQ", value: bl.id }]
    });
  };
}

export default HttpBillOfLadingItem;
