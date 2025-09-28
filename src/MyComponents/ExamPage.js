import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const ExamPage = (props) => {
  let { sno } = useParams();
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutes in seconds, adjust as needed

  // Load current question & restore selected option
  useEffect(() => {
    const q = props.questions.find(
      (item) => parseInt(item.sno) === parseInt(sno)
    );
    setCurrentQuestion(q);

    if (props.userAnswers && props.userAnswers[parseInt(sno)]) {
      setSelectedOption(props.userAnswers[parseInt(sno)]);
    } else {
      setSelectedOption(null);
    }
  }, [sno, props.questions, props.userAnswers]);

  // Timer logic
  useEffect(() => {
    if (timeLeft <= 0) {
      navigate("/result");
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, navigate]);

  if (!currentQuestion) {
    return <h2>Loading...</h2>;
  }

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    props.onAnswer(parseInt(sno), event.target.value); // save immediately
  };

  const handleNextClick = () => {
    const currentSno = parseInt(sno);
    const nextSno = currentSno + 1;
    if (nextSno <= props.questions.length) {
      navigate(`/exam1/${nextSno}`);
    } else {
      navigate("/result");
    }
  };

  const handlePrevClick = () => {
    const currentSno = parseInt(sno);
    const prevSno = currentSno - 1;
    if (prevSno >= 1) {
      navigate(`/exam1/${prevSno}`);
    }
  };

  const handleSubmitClick = () => {
    navigate("/result");
  };

  // Convert seconds to mm:ss format
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div>
      <section className="vh-100 section-bg" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-10 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-3 mt-4">Test</p>

                      {/* Timer display */}
                      <p className="text-center h4 mb-4">
                        ⏱ Time Left: <span style={{ color: "red" }}>{formatTime(timeLeft)}</span>
                      </p>

                      <form className="mx-1 mx-md-4" onSubmit={(e) => e.preventDefault()}>
                        <div>
                          <p>
                            {currentQuestion.sno}. {currentQuestion.question}
                          </p>
                        </div>

                        {["option1", "option2", "option3", "option4"].map((opt, idx) => (
                          <div key={idx}>
                            <input
                              type="radio"
                              id={opt}
                              name="options"
                              value={currentQuestion[opt]}
                              checked={selectedOption === currentQuestion[opt]}
                              onChange={handleOptionChange}
                            />
                            <label htmlFor={opt}>{currentQuestion[opt]}</label>
                            <br />
                          </div>
                        ))}

                        <br />
                        <div className="d-flex justify-content-between">
                          <button
                            type="button"
                            className="btn btn-secondary btn-lg"
                            disabled={parseInt(sno) === 1}
                            onClick={handlePrevClick}
                          >
                            Previous
                          </button>

                          <button
                            type="button"
                            className="btn btn-primary btn-lg"
                            disabled={!selectedOption}
                            onClick={handleNextClick}
                          >
                            Next
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-end mt-3">
              <button className="btn btn-danger btn-lg" onClick={handleSubmitClick}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
