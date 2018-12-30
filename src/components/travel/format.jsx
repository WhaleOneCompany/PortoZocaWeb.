import React from "react";

const FormatTravel = props => {
  const { object, onClick } = props;
  const { travel, ship, custommer } = object;
  return (
    <div onClick={onClick}>
      Viagem: {travel} Navio: {ship} Cliente: {custommer}
    </div>
  );
};

export default FormatTravel;
