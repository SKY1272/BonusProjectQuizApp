import React, { useState } from "react";
import Question from "./Question";
import Result from "./Result";

function Quiz({ questionsData }) {
  const [qna, setQna] = useState(1);
  const [score, setScore] = useState(0);
  // const [countQna, setcountQna] = useState(0);
  function handleAnswer(selectAnswer) {
    if (selectAnswer === questionsData[qna].correctAnswer) {
      setScore(score + 1);
    }
    setQna(qna + 1);
    // setcountQna(countQna + 1);
  }
  const currQna = questionsData[qna];
  return (
    <div>
      {currQna ? (
        <Question
          question={currQna.question}
          answers={currQna.answers}
          onClick={handleAnswer}
          qna={qna}
          totalQuestion={questionsData.length}
        />
      ) : (
        <Result score={score} totalQuestion={questionsData.length} />
      )}
    </div>
  );
}
export default Quiz;
