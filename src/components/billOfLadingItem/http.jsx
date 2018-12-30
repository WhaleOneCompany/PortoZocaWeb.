import http from "./../http/http";

class HttpBillOfLadingItem {
  get = () => {
    return [
      {
        _id: 1,
        dimension: "150 x 150",
        time: "28/12/2018 18:30:15"
      },
      {
        _id: 2,
        dimension: "200 x 150",
        time: "28/12/2018 18:30:15"
      }
    ];
  };
}

export default HttpBillOfLadingItem;
