import React from "react";

const Notification = ({ message, error }) => {
  const styleMessage = {
    color: !error ? "green" : "red",
    background: "lightgrey",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  };
  return <div style={styleMessage}>{message}</div>;
};

export default Notification;
