import { useState, useEffect } from "react";
import Container from "./components/Container/Container.jsx";
import Description from "./components/Description/Description.jsx";
import Options from "./components/Options/Options.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Notification from "./components/Notification/Notification.jsx";

function App() {
  let totalFeedback = 0;
  let positive = 0;

  const [feedback, setFeedback] = useState(() => {
    const feedback = window.localStorage.getItem("feedback");
    if (feedback !== null) {
      return JSON.parse(feedback);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (option) => {
    if (option == "reset") {
      setFeedback({
        ...feedback,
        good: 0,
        neutral: 0,
        bad: 0,
      });
      return;
    }
    setFeedback({
      ...feedback,
      [option]: feedback[option] + 1,
    });
  };

  totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  positive = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <Container>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          totalFeedback={totalFeedback}
          positive={positive}
        />
      ) : (
        <Notification />
      )}
    </Container>
  );
}

export default App;
