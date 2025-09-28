import './App.css';
import { StartPage } from "./MyComponents/StartPage";
import {ExamPage} from "./MyComponents/ExamPage";
import {ResultPage} from "./MyComponents/ResultPage";
import AnalysisPage from "./MyComponents/AnalysisPage";
import QuestionList from "./MyComponents/QuestionList";

import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [questions, setQuestions] = useState([]);
  const [marks, setMarks] = useState(0);
  const [answers, setAnswers] = useState([]); // store user's answers for analysis
  const [userAnswers, setUserAnswers] = useState({});


  const handleAnswer = (sno, answer) => {
  setUserAnswers((prev) => ({
    ...prev,
    [sno]: answer
  }));
};

  // fetch all questions from backend (SQLite)
  useEffect(() => {
    fetch("http://localhost:5000/questions")
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch((err) => console.error("Error fetching questions:", err));
  }, []);

  // handle next click → check answer & update marks
  const onNextClick = (sno, selectedOption) => {
    const currentQuestion = questions.find(
      (item) => parseInt(item.sno) === parseInt(sno)
    );

    if (currentQuestion) {
      // record answer
      setAnswers((prev) => [
        ...prev.filter((a) => a.sno !== sno), // replace if exists
        { sno, selectedOption, correct: currentQuestion.answer },
      ]);

      // update marks
      if (currentQuestion.answer === selectedOption) {
        console.log("Correct Answer");
        setMarks((prev) => prev + 1);
      } else {
        console.log("Wrong Answer");
      }
    }
  };

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<StartPage />} />

          <Route path="/exam1/:sno" element={<ExamPage questions={questions} userAnswers={userAnswers} onAnswer={handleAnswer} onNextClick={onNextClick} />} />

          <Route exact path="/result" element={<ResultPage questions={questions} userAnswers={userAnswers}/>} />

          <Route exact path="/analyse" element={<AnalysisPage questions={questions} userAnswers={userAnswers} />} />
        
          <Route path="/questions" element={<QuestionList />} /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;