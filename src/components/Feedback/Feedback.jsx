const Feedback = ({ good, neutral, bad, totalFeedback }) => {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p><strong>Total: {totalFeedback}</strong></p>
      {totalFeedback > 0 && (
        <p>Positive: {Math.round((good / totalFeedback) * 100)}%</p>
      )}
    </>
  );
};

export default Feedback;
