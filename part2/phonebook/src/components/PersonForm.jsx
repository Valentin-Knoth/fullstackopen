import React, { useState } from "react";
import servicePersons from "../services/person";

const PersonForm = ({ persons, setPersons, setErroMessage, setError }) => {
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const personaNueva = persons.find(
      (i) => i.name === newName || i.number === newPhone
    );
    const newPersona = {
      name: newName,
      number: newPhone,
      id: `${persons.length + 1}`,
    };
    if (newName && newPhone && !personaNueva) {
      servicePersons.create(newPersona);
      setPersons(persons.concat(newPersona));
      setErroMessage(`Created ${newPersona.name} with number ${newPhone}`);
    } else {
      window.confirm("Update the number?") &&
        servicePersons.update(personaNueva.id, newPersona);
      setErroMessage(
        `Updated ${personaNueva.name} with new number ${newPhone}`
      );
      setPersons(
        persons.map((i) => (i.id === personaNueva.id ? newPersona : i))
      );
    }
    setTimeout(() => {
      setErroMessage(null);
    }, 5000);
    setError(false);
    setNewName("");
    setNewPhone("");
  };

  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  const handleChangeNumber = (e) => {
    setNewPhone(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          number:{" "}
          <input type="text" value={newPhone} onChange={handleChangeNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

export default PersonForm;
