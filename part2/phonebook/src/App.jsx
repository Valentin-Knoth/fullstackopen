import { useState, useEffect, use } from "react";
import Person from "./components/Person";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import servicePersons from "./services/person";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filteredPersons, setFilteredPersons] = useState([...persons]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [error, setError] = useState(false);
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
          setTimeout(() => {
            setErrorMessage(null);
          }, 5000);
          setErrorMessage("Deleted successfully");
          setError(false);
        })
        .catch((error) => {
          setTimeout(() => {
            setErrorMessage(null);
          }, 5000);
          setErrorMessage(
            `Information of ${person.name} has already been removed from server`
          );
          setError(true);
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
          {errorMessage !== null && (
            <Notification message={errorMessage} error={error}></Notification>
          )}
          <Filter handleFilter={handleFilter} />
          <h4>add a new</h4>
          <PersonForm
            persons={persons}
            setPersons={updatePersons}
            setError={setError}
            setErroMessage={setErrorMessage}
          />
          <h2>Numbers</h2>
          <Person persons={filteredPersons} handleDeleteFunct={handleDelete} />
        </div>
      )}
    </div>
  );
};

export default App;
