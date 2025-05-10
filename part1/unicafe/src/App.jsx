import { useState } from "react";

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};
const Stadistics = ({ good, neutral, bad, all, text }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <>
      <table>
        <tbody>
          <StatisticLine values={good} text="good" />
          <StatisticLine values={neutral} text="neutral" />
          <StatisticLine values={bad} text="bad" />
          <StatisticLine values={all} text="all" />
          <StatisticLine values={(good - bad) / all} text="average" />
          <StatisticLine values={(good / all) * 100} text="positive" />
        </tbody>
      </table>
    </>
  );
};

const StatisticLine = ({ values, text }) => {
  return (
    <tr>
      <td> {text} </td>
      <td>{values} </td>
    </tr>
  );
};
const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;
  return (
    <>
      <h1>give feedback</h1>
      <Button text="good" handleClick={() => setGood(good + 1)} />
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" handleClick={() => setBad(bad + 1)} />
      <h1>statistics</h1>
      <Stadistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        text="neutral"
      />
    </>
  );
};

export default App;
