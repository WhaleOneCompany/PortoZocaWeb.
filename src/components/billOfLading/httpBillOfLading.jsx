import http from "../http/http";

class HttpBillOfLading {
  constructor() {
    this.http = new http();
  }

  get = travel => {
    return this.http.get("/billOfLading", {
      items: [{ key: "travel", op: "EQ", value: travel.id }]
    });
  };
}

export default HttpBillOfLading;
