import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const random = () => Math.floor(Math.random() * anecdotes.length);
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const vote = () => {
    const copy = [...votes];
    if (copy[selected] === 0) {
      copy[selected] = 1;
    } else {
      copy[selected] += 1;
    }
    setVotes(copy);
  };
  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <button onClick={() => vote(selected)}>Vote</button>
      <button onClick={() => setSelected(random())}>Next anecdote</button>
      <h2>Anecdote with most votes</h2>

      {votes.length > 0 && (
        <p>
          {anecdotes[votes.indexOf(Math.max(...votes))]} has{" "}
          {Math.max(...votes)} votes
        </p>
      )}
    </div>
  );
};

export default App;
