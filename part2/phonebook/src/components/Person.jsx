import servicePersons from "../services/person";

const Person = ({ persons, handleDeleteFunct }) => {
  return persons.map((item, index) => (
    <p key={index}>
      {item.name} : {item.number}
      <button onClick={() => handleDeleteFunct(item)}>delete</button>
    </p>
  ));
};

export default Person;
