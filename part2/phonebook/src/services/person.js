import axios from "axios";
const url = 'http://localhost:3001/persons';
const getAll = () => {
    const response = axios(url);
    return response.then((response) => {
        return response.data;
    });
}
const create = (newObject) => {
    const response = axios.post(url, newObject);
    return response.then((response) => {
        return response.data;
    });
}

const update = (id, newObject) => {
    const response = axios.put(`${url}/${id}`, newObject);
    return response.then((response) => {
        return response.data;
    });
}
const deletePerson = (id) => {
    const response = axios.delete(`${url}/${id}`);
    return response.then((response) => {
        return response.data;
    });
}

export default { getAll, create, update, deletePerson };