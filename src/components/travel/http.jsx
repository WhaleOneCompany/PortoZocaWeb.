import http from "./../http/http";

class HttpTravel {
  get = () => {
    return [
      {
        _id: 1,
        travel: "ATLÂNTICO SUL",
        ship: "ALBATROZ",
        custommer: "HYUNDAI",
        time: "28/12/2018 18:30:15",
        status: "Em conferência"
      },
      {
        _id: 2,
        travel: "ATLÂNTICO SUL 13",
        ship: "ALBATROZ ZOZ",
        custommer: "HYUNDAI",
        time: "28/12/2018 18:30:15",
        status: "Conferido"
      }
    ];
  };
}

export default HttpTravel;
