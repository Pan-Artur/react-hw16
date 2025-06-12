import { useState } from "react";

import { Section } from "./components/Section/Section";
import { FeedbackOptions } from "./components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "./components/Statistics/Statistics";
import { Notification } from "./components/Notification/Notification";

import "./App.css";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => good + neutral + bad;

  const total = countTotalFeedback();

  const countPositivePercentage = () => {
    return total ? Math.round((good / total) * 100) : 0;
  }

  return (
    <div className="App">
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveGood={() => setGood((prevState) => prevState + 1)}
          onLeaveNeutral={() => setNeutral((prevState) => prevState + 1)}
          onLeaveBad={() => setBad((prevState) => prevState + 1)}
        />
        {total > 0 ? (
          <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={countPositivePercentage} />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}

export default App;
