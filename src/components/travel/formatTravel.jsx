import React from "react";

const FormatTravel = props => {
  const { object, onClick } = props;
  const { travel, ship } = object;
  return (
    <div onClick={onClick}>
      Viagem: {travel} Navio: {ship}
    </div>
  );
};

export default FormatTravel;
