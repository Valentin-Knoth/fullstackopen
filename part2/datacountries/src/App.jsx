import { use, useEffect, useState } from "react";
import seviceCountries from "./services/countries";
import { Filter } from "./components/Filter";
import Countries from "./components/Countries";

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  useEffect(() => {
    seviceCountries
      .getAll()
      .then((response) => {
        setCountries(response);
        setFilteredCountries(response);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);
  const handleFilterChange = (value) => {
    setFilteredCountries(
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(value.toLowerCase())
      )
    );
  };
  return (
    <>
      <Filter filtrado={handleFilterChange}></Filter>

      <Countries
        countries={filteredCountries}
        filtrado={handleFilterChange}
      ></Countries>
    </>
  );
}

export default App;
