import React, { Component } from "react";

const FormatMovement = props => {
  const { object, onClick } = props;
  const { billOfLading, informedQuantity, conferredQuantity } = object;
  return (
    <div onClick={onClick}>
      BL: {billOfLading} Quantidade: {conferredQuantity}/{informedQuantity}
    </div>
  );
};

export default FormatMovement;
