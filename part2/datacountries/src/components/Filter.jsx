import React, { useState } from "react";

export const Filter = ({ filtrado }) => {
  const onChange = (event) => {
    filtrado(event.target.value);
  };

  return (
    <>
      <label>Filter countries</label>
      <input type="text" onChange={onChange} />
    </>
  );
};
