import React from "react";
import { Link } from "react-router-dom";

const AnalysisPage = ({ questions = [], userAnswers = {} }) => {
  // const userAns = userAnswers[q.sno];
  return (
    <div style={{ padding: "20px" }}>
      <h2>Answer Analysis 📊</h2>
      {questions.map((q) => {
        // const userAns = answers.find((a) => parseInt(a.sno) === parseInt(q.sno));
        const userAns = userAnswers[q.sno]; // get answer from userAnswers object
        return (
          <div
            key={q.sno}
            style={{
              marginBottom: "15px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "8px",
            }}
          >
            <p>
              <strong>Q{q.sno}:</strong> {q.question}
            </p>
            <p>
              ✅ Correct Answer: <strong>{q.answer}</strong>
            </p>
            <p>
              📝 Your Answer:{" "}
              <span
                style={{
                  color: userAns === q.answer ? "green" : "red",
                }}
              >
                {userAns || "Not Attempted"}
              </span>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default AnalysisPage;
