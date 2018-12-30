import React from "react";

const FormatBillOfLading = props => {
  const { object, onClick } = props;
  const { billOfLading, informedQuantity, conferredQuantity } = object;
  return (
    <div onClick={onClick}>
      BL: {billOfLading} Quantidade: {conferredQuantity}/{informedQuantity}
    </div>
  );
};

export default FormatBillOfLading;
