import { useState, useEffect, use } from "react";
import Person from "./components/Person";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import servicePersons from "./services/person";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filteredPersons, setFilteredPersons] = useState([...persons]);

  useEffect(() => {
    servicePersons
      .getAll()
      .then((allPersons) => {
        setPersons(allPersons);
        setFilteredPersons(allPersons);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleDelete = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      servicePersons
        .deletePerson(person.id)
        .then(() => {
          setPersons((prev) => prev.filter((p) => p.id !== person.id));
          setFilteredPersons((prev) => prev.filter((p) => p.id !== person.id));
        })
        .catch((error) => {
          console.error("Error deleting person:", error);
        });
    }
  };
  const handleFilter = (filterValue) => {
    if (filterValue) {
      const filtered = persons.filter((person) =>
        person.name.toLowerCase().includes(filterValue.toLowerCase())
      );
      setFilteredPersons(filtered);
    } else {
      setFilteredPersons(persons);
    }
  };

  const updatePersons = (newPersons) => {
    setPersons(newPersons);
    setFilteredPersons(newPersons);
  };

  return (
    <div>
      {persons.length === 0 ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <h2>Phonebook</h2>
          <Filter handleFilter={handleFilter} />
          <h4>add a new</h4>
          <PersonForm persons={persons} setPersons={updatePersons} />
          <h2>Numbers</h2>
          <Person persons={filteredPersons} handleDeleteFunct={handleDelete} />
        </div>
      )}
    </div>
  );
};

export default App;
