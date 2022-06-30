# AI based Chatbot to answer FAQs

We are making an AI based chatbot to automate the process of answering frequently asked questions.


Background: There have always been queries of people regarding various topics to which answers are provided manually by people. In order to make this process fast the FAQs can be answer using the latest AI technologies where answers can be automatically generated according to the questions. Also for every question asked it can be stored and the list of questions can be increased to provide better mapping of question and answers. This process can reduce lot of work pressure for both the consumer and the government. Also providing quick responses and suggestions can help in the better economical market growth. Summary: There have always been queries of people regarding various topics to which answers are provided manually by people. In order to make this process fast the FAQs can be answer using the latest AI technologies where answers can be automatically generated according to the questions. Objective: We need you to develop an AI based Chatbot (mobile/web app) to create answers to queries based on FAQs and more FAQs getting automatically added including categorization. You can use machine learning algorithms to increase the dataset of questions and answers and ensure that the mapping of questions and answers remain maintained every time there is an increase in the dataset.



## FAQ

#### How does this chatbot work ? 

This chatbot takes input from the user as query and an AI model is used to generate automatic response to the query.

#### What are the technology stack you are using ? 

We are using HTML , CSS , JS , Node + Express , mongoDB , Flask and Tensorflow.


#### What is the use of Flask in this project ?

We are using Flask software to implement our API in python. We are connecting our AI model to the user interface through this API.

## Tech Stack

**Frontend** :HTML , CSS, JS

**Server:** Node, Express

**Database:** mongoDB

**MODEL:** TensorFlow, NLTK


## Documentation

### THe working of our User Interface

The  UI of our  chat bot is a web application and we are using NodeJS to create our server for our backend.
#### The UI works as below:
- Start the server by commmand "node app.js" and go to localhost:PORT to access the web app

- Accessing the web app will request to "/" home route,where the page is render with ejs.

- Takes the query as an input from user using html tags

- Post the query(question) to "/" route,where the express js is used to get the 
  query and store it in a array of questions

- Using the query we make an http get request to the api of ai model by giving 
  query as an parameter in the api route and get an response which an answer
  is provided
- The answer from the api is stored in a array and the response for the post 
  request is redirected to "/" get 

- On redirecting to "/" the express render the ejs file in the browser,
  by passing the arrays of the question and answer to render in website,
  the chat information is displayed on web app

### Working of API and Database

- we are using Flask software to implement API.
- API transfer the query from UI to AI model which works on those input and provide an answer.
- We use API to transfer answer created by the model back to the UI.
- We are using mongoDB as a database. mondoDB is a cloud based database which stores data as cluster of doucments. We are using PyMongo to retreive the data from our database and use those data on our model tranining.


### Working of our AI model

Our AI model picks up the query and uses nltk to perform the basic cleaning of the words. It then converts our query into a vector(bag of words). Our dataset is, now split into training and testing dataset. We then train our 3-layered neural network using the training dataset. The neural network is trained to predict the tag of the query. Once the tag is predicted, the response is automatically generated.

### About our Neural Network

Activation function : relu, softmax
Optimizer : stochastic gradient descent
Loss function : categorical cross-entropy

## Model Accuracy 

Our model is giving an Accuracy of 90%, with tranining on better dataset we can get it to 95%+.

[![Model Accuracy](https://i.postimg.cc/C5TpppZq/image.png)](https://postimg.cc/zbjcTMFz)


## Deployment

It is still pending for our project . We are still in developing stage.

You can run this file on your machine by using command
```bash
  node app.js
```

- TO run AI model use collab and execute the code after Loading Intents.json file




## Contributors


- [@ABHISHEK MISHRA](https://www.github.com/abhishekiiitr)

- [@JITESH KUMAR SINGH](https://www.github.com/ITSJKS)

- [@LOKESH REDDY](https://www.github.com/lokeshRM)

- [@ANJANEY SHRINIWAS](https://www.github.com/branch-electronics)

- [@SHUBHADEEP MANDAL](https://www.github.com/Seronic2001)

- [@GARIMA JAIN](https://github.com/abhishekiiitr/chat_bot_to_ans_faqs)