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

###Screenshots

**Start Page**  
<img width="1919" height="873" alt="Screenshot 2025-09-28 072857" src="https://github.com/user-attachments/assets/cc0f7735-2ed0-4830-af86-f1ce1258eaf0" />

**Exam Page with Timer**  
<img width="1919" height="1079" alt="Screenshot 2025-09-28 072913" src="https://github.com/user-attachments/assets/590a3d8b-687b-4d26-98d7-e1e3d6132dd3" />


**Result Page**  
<img width="1919" height="1079" alt="Screenshot 2025-09-28 072942" src="https://github.com/user-attachments/assets/9731cf91-5704-434e-84c5-e9a7d80cb4d9" />


**Analysis Page**  
<img width="1919" height="1079" alt="Screenshot 2025-09-28 072951" src="https://github.com/user-attachments/assets/447fc1af-a5c4-43f9-8a8e-8e81ebead440" />
