import { useState, useEffect } from "react";
import Container from "./components/Container/Container.jsx";
import Description from "./components/Description/Description.jsx";
import Options from "./components/Options/Options.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const feedback = window.localStorage.getItem("feedback");
    if (feedback !== null) {
      return JSON.parse(feedback);
    }
    return {
      good: 0,
      netural: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem("feedbacks", JSON.stringify(feedback));
  }, [feedback]);

  const onLeaveFeedback = (option) => {
    setFeedback({
      ...feedback,
      [option]: feedback[option] + 1,
    });
  };

  // { totalFeedback > 0 ? <Feedback/> : <Notification/> }

  return (
    <Container>
      <Description />
      <Options />
      <Feedback />
    </Container>
  );
}

export default App;
