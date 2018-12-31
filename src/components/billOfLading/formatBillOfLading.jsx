import React from "react";

const FormatBillOfLading = props => {
  const { object, onClick } = props;
  const { bl } = object;
  return <div onClick={onClick}>BL: {bl} Quantidade: 80/100 (Falta 20)</div>;
};

export default FormatBillOfLading;
