import React from "react";
import style from "./Question.module.css";
function Question({ question, qna, totalQuestion, answers, onClick }) {
  return (
    <div className={style.divContainer}>
      <div className={style.container}>
        {/* <h2>Question {Noquestion}/{totalQuestion}</h2> */}
        <p>
          Question:{qna}/{totalQuestion} <br /> <br />
          {question}
        </p>

        <div className={style.question}>
          <ul>
            {answers.map((answer, idx) => (
              <li key={idx}>
                <p onClick={(e) => onClick(answer)}>{answer}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Question;
