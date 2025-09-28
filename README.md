### Project Structure
/backend 

	  ├─ server.js
	  
	  └─ quiz.db

/frontend   

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
