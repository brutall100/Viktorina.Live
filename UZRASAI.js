// Chat gpt del mysqli is side Servo.

// To use this code, you'll need to take a few steps:

// Make sure you have Node.js and npm (Node Package Manager) installed on your computer. If you don't have them already, you can download them from the official Node.js website.
// Create a new directory for your project and navigate to it in the command line.
// Run the command npm init to create a new package.json file for your project. You can just press enter for all the prompts, or you can fill them in if you want.
// Run the command npm install --save express mysql2 to install the required dependencies: Express, and mysql2.
// Create a new file in your project directory called server.js, and copy the code I provided into that file.
// In your command line, navigate to your project directory and run the command node server.js to start the server.
// With the server running, you should now be able to send a GET request to http://localhost:3000/questions and retrieve the data from the database as a JSON. If you don't have any other libraries running on 3000 port of your localhost, you should be able to see the response, otherwise you'll need to find out which port is your server running
// Also, you'll need to replace the values of host, user, password, database with your own MySQL server details

// And remember that this is a basic example, it's not recommended to use this code in production because you're closing the connection after each request and it's not handling errors properly.


const express = require('express');
const mysql = require('mysql2');

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'viktorina'
});

app.get('/questions', (req, res) => {
  // Connect to the database
  connection.connect();

  // SQL query to select all rows from the question_answer table
  const query = 'SELECT id, user, question, answer FROM viktorina.question_answer';

  // Execute the query
  connection.query(query, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });

  // Close the connection
  connection.end();
});

app.listen
