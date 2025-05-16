import React from "react";
import Header from "./Header";
import Total from "./Total";
import Part from "./Part";

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};

export default Content;
