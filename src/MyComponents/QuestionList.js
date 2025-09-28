import React, { useEffect, useState } from "react";

const QuestionsList = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/questions")
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Questions in Database</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Question</th>
            <th>Option1</th>
            <th>Option2</th>
            <th>Option3</th>
            <th>Option4</th>
            <th>Answer</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((q) => (
            <tr key={q.sno}>
              <td>{q.sno}</td>
              <td>{q.question}</td>
              <td>{q.option1}</td>
              <td>{q.option2}</td>
              <td>{q.option3}</td>
              <td>{q.option4}</td>
              <td>{q.answer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuestionsList;
