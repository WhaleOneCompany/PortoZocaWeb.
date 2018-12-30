import http from "./../http/http";

class HttpBillOfLading {
  get = () => {
    return [
      {
        _id: 1,
        billOfLading: "BLXXXXX001",
        informedQuantity: 15,
        conferredQuantity: 10
      },
      {
        _id: 2,
        billOfLading: "BLXXXXX002",
        informedQuantity: 20,
        conferredQuantity: 13
      },
      {
        _id: 3,
        billOfLading: "BLXXXXX003",
        informedQuantity: 30,
        conferredQuantity: 30
      }
    ];
  };
}

export default HttpBillOfLading;
