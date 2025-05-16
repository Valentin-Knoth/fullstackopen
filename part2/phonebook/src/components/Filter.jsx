import React from "react";

const Filter = ({ handleFilter }) => {
  const handleChangePerson = (e) => {
    handleFilter(e.target.value);
  };

  return (
    <>
      <input type="text" onChange={handleChangePerson} placeholder="Filtrado" />
    </>
  );
};

export default Filter;
