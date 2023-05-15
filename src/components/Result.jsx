import React from "react";

function Result({ score, totalQuestion }) {
  return (
    <div>
      <h1>Quiz Completed:</h1>
      <p style={{ backgroundColor: "black" }}>
        Your Score:{score}/{totalQuestion}
      </p>
    </div>
  );
}
export default Result;
