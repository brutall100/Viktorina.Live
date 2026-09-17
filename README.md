# Viktorina.Live

Live pub-quiz platform. Players register, join a running quiz, answer rounds
against the clock and climb a leaderboard, earning virtual currency along the
way.

Production site: **[viktorina.live](https://www.viktorina.live)**

## Stack

Front end is hand-written HTML, CSS and JavaScript with no framework. Auth and
question submission are handled by PHP endpoints talking to MySQL.

## Layout

```
index.html / index.js / style.css   quiz screen and game loop
Footer/                             shared footer component (html + css + js)
REGILOGI/                           registration and login
  regilogi.html/.css/.js              client form and validation
  register.php, login.php             server-side auth
  nameGenerator.js                    random display names
NewQuestionInsert/                  submitting new questions
  newquestionindex.html               submission form
  phpquestion.php                     insert endpoint
  questionwaiting.php                 moderation queue
images/                             artwork and icons
```

## Running locally

The static pages open directly in a browser, but the PHP endpoints need a
server with PHP and MySQL — XAMPP or any LAMP stack works.

1. Copy the project into your web root (`htdocs/viktorina`).
2. Create the MySQL database and point the connection settings in the PHP
   files at it.
3. Open `http://localhost/viktorina/index.html`.
