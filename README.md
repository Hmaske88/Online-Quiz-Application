### Description
This is a **full-stack Quiz Application** built with **React** (frontend) and **Node.js + Express + SQLite** (backend). Users can take a quiz, navigate between questions, submit their answers, and view their results with detailed analysis. A timer is also included for timed quizzes.

	1. App.js

		Routes:
		
		/ → StartPage
		
		/exam1/:sno → ExamPage (with timer, next/prev buttons)
		
		/result → ResultPage (marks + percentage)
		
		/analyse → AnalysisPage (user vs correct answers)
		
		/questions → Optional QuestionList page
		
		State:
		
		questions → fetched from backend
		
		userAnswers → stores answers keyed by sno
		
		answers → optional for detailed analysis
		
		marks → count of correct answers

	2. Server.js (Express + SQLite)

		SQLite table: questions
		
		sno | question | option1 | option2 | option3 | option4 | answer

	3. StartPage.js

		Starts the exam, requests full screen.

		Navigates to /exam1/1

	4. ExamPage.js

		Loads the current question based on URL param sno.
		
		Displays options with radio buttons.
		
		Saves selected option in userAnswers immediately.
		
		Timer:
		
		Configured in seconds (timeLeft state)
		
		Automatically redirects to /result when time runs out
		
		Timer format is mm:ss
		
		Next/Previous buttons navigate through questions.

	5. ResultPage.js

		Calculates marks and percentage using userAnswers.
		
		Shows results and button to navigate to /analyse.

	6. AnalysisPage.js

		Compares userAnswers with correct answers.
		
		Shows each question, correct answer, and user’s answer.
		
		Color coding: green if correct, red if wrong, “Not Attempted” if empty.


### Project Structure

		├─ server
		
			├─ server.js
			
			└─ quiz.db
			
		├─ src
	
			├─ App.js
			
			├─ MyComponents/ 
			
		          ├─ StartPage.js
				  
		          ├─ ExamPage.js
				  
		          ├─ ResultPage.js
				  
		          ├─ AnalysisPage.js
				  
		          ├─ QuestionList.js
			  

### For running the app:
	1)  go to →       ..\quiz\server>   
	    run command →       node server.js
	2)  go to →		..\quiz>
	    run command →	npm start

### For inserting data into database :
	1) go to →	..\quiz\server>
	2) run command →	sqlite3 quiz.db
	3) INSERT INTO questions (sno, question, option1, option2, option3, option4, answer)
		VALUES 
		(1, "What is 2+2?", "3", "4", "5", "6", "4"),
		(2, "What is capital of India?", "Mumbai", "Delhi", "Kolkata", "Chennai", "Delhi");
	4) .exit

### Screenshots

**Start Page**  
<img width="1919" height="873" alt="Screenshot 2025-09-28 072857" src="https://github.com/user-attachments/assets/cc0f7735-2ed0-4830-af86-f1ce1258eaf0" />

**Exam Page with Timer**  
<img width="1919" height="1079" alt="Screenshot 2025-09-28 072913" src="https://github.com/user-attachments/assets/590a3d8b-687b-4d26-98d7-e1e3d6132dd3" />


**Result Page**  
<img width="1919" height="1079" alt="Screenshot 2025-09-28 072942" src="https://github.com/user-attachments/assets/9731cf91-5704-434e-84c5-e9a7d80cb4d9" />


**Analysis Page**  
<img width="1919" height="1079" alt="Screenshot 2025-09-28 072951" src="https://github.com/user-attachments/assets/447fc1af-a5c4-43f9-8a8e-8e81ebead440" />
