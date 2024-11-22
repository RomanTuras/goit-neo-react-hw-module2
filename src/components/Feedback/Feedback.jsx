const Feedback = ({ good, neutral, bad, totalFeedback, positive }) => {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p><strong>Total: {totalFeedback}</strong></p>
      {totalFeedback > 0 && (
        <p>Positive: {positive}%</p>
      )}
    </>
  );
};

export default Feedback;
