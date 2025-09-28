import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ResultPage = ({ questions = [], userAnswers = {} }) => {
  const navigate = useNavigate();

  // Ensure questions is an array
  const marks = Array.isArray(questions)
    ? questions.reduce((total, q) => {
        const userAns = userAnswers[q.sno];
        if (userAns && userAns === q.answer) return total + 1;
        return total;
      }, 0)
    : 0;

  const percent =
    questions.length > 0 ? ((marks / questions.length) * 100).toFixed(2) : 0;

  const handleAnalysisClick = () => {
    navigate('/analyse');
  };

  return (
    <section className="vh-100 section-bg" style={{ backgroundColor: '#eee' }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: '25px' }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Result
                    </p>
                    <h5>
                      Marks Obtained : {marks} / {questions.length}
                    </h5>
                    <br />
                    <h5>Percentage : {percent} %</h5>
                    <br />
                    <div className="d-flex justify-content-start">
                      <button
                        className="btn btn-primary btn-lg"
                        onClick={handleAnalysisClick}
                      >
                        Analyse
                      </button>
                    </div>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
