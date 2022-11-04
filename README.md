# U.S. Citizenship Test API

This project is very dear to me as this is an immigration system that I have gone through myself. Since I'm on the path to citizenship, I developed this API to help others on a similar path.

**Link to project:** https://american-citizenship-test.herokuapp.com/

<img src="https://user-images.githubusercontent.com/101214978/177057652-c6cd5942-b8b0-4d51-948b-a84079286ee0.jpeg"  alt="home page screenshot"/>

## How It's Made:

**Tech used:** Node, Express, MongoDB, EJS, JavaScript, HTML, CSS, APIs

The U.S. citizenship test, which tests an applicant’s knowledge of U.S. history and government, is given orally during the U.S. citizenship interview. The citizenship test consists of 100 questions. The U.S. Citizenship and Immigration Services (USCIS) officer will ask the applicant 10 of the 100 questions, and the applicant must answer 6 out the 10 questions correctly in order to pass the civics test. 

The purpose of this API is to provide the questions and answers to the United States Citizenship test. The test consists of 100 questions and answers each having additional information like topic and subtopic. This API can provide responses based on several different parameters as outlined in the documentation. Calls made to the API will return a response in the JSON format which can then be used accordingly.

## Lessons Learned:
- Implementing a full stack application by building an API on the backend and a landing page with the documentation on the front end.
- Using the CORS package to prevent CORS errors when users consume the API.

Further learnings on converting the project architecture to MVC-
- How to convert a legacy codebase to a newer architecture
- How to move data from js files to a MongoDb database
- How to pull data from a database via the model and serve it to the views using the controller
- How to work with ejs to render data dynaimcally on the front end
- EJS syntax and expressions

## Optimizations

I am working on a front end flash card application that users can use to develop their own flash cards to study for this test. Users will be able to mark questions based on the difficulty level according to them and practice the tougher questions more frequently. 
