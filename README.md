# US-citizenship-test-api

U.S. Citizenship Test Questions and Answers API.

Live site: https://american-citizenship-test.herokuapp.com/


![FWN3wPrX0AMWDfB](https://user-images.githubusercontent.com/101214978/177057652-c6cd5942-b8b0-4d51-948b-a84079286ee0.jpeg)

The U.S. citizenship exam, which tests an applicant’s knowledge of U.S. history and government, is given orally during the U.S. citizenship interview. The citizenship test consists of 100 questions. The U.S. Citizenship and Immigration Services (USCIS) officer will ask the applicant 10 of the 100 questions, and the applicant must answer 6 out the 10 questions correctly in order to pass the civics test. Below you will find all 100 questions and correct answers for the 2008 version of the civics test. Topics include: American Government American History Integrated Civics

How to fetch: https://american-citizenship-test.herokuapp.com/query-parameter

Parameters

Query Parameter	Description
/api	Returns all 100 questions
/api/random	Returns one random question from the whole question bank
/api/government	Returns all the questions with the topic "American Government"
/api/government/random	Returns one random question with the topic "American Government"
/api/history	Returns all the questions with the topic "American History"
/api/history/random	Returns one random question with the topic "American History"
/api/civics	Returns all the questions with the topic "Integrated Civics"
/api/history/random	Returns one random question with the topic "Integrated Civics"
Example query

https://american-citizenship-test.herokuapp.com/api/random

returns


        { 
          "id":88,
          "question":"Name one of the two longest rivers in the United States.",
          "answer":"Missouri (River), Mississippi (River)",
          "topic":"Integrated Civics",
          "subTopic":"Geography"
        }
