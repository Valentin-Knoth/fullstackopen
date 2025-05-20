import axios from "axios";
const url = 'https://studies.cs.helsinki.fi/restcountries/api';


const getAll = () => {
    const req = axios.get(`${url}/all`)
    return req.then(response => response.data);
}

const findCountries = (name) => {
    const req = axios.get(`${url}/name/${name}`)
    return req.then(response => response.data);
}

export default { findCountries, getAll };