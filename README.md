# fitnessapp

## Table of Content

1. [Introduction](#Introduction)
2. [Login Credentials](#Login-Credentials)
3. [Tutorial](#Tutorial)
4. [Tech Stack](#Tech-Stack)
5. [Features](#Features)
6. [Project Layout](#Project-Layout)
7. [Files](#Files)
8. [Conclusion](#Conclusion)


## Introduction

"fitnessapp" is a fitness tracking web app. This web app lets users create profiles to track their workouts and data visualise their weightlifing progression and -habits. 

A previous version of this web app was created as Harvard cs50x's final project, where a self-selected idea was implemented as per specified requirements. Given some sort of interest in fitness tracking and building a portfolio project, the web app was extended with new features, database schemas, pages and design, among other things.

The tech stack includes Python, JavaScript, Bootstrap, Flask, SQLite3, HTML, CSS.

## Login Credentials

Username: demo\
Password: demo

## Tutorial

work in progress.

## Tech Stack

This section discusses the utlity and selection criteria for the technologies in the tech stack of the project.

The tech stack includes:

* Python
* JavaScript
* Bootstrap
* Flask
* SQLite3
* HTML
* CSS

### Frontend

The frontend is built with Bootstrap, CSS, HTML and JavaScript. Bootstrap is utilised for its pre-built CSS components and some JavaScript functionality. The rest of the styling and further customisation is made with CSS. Sass was considered for styling the frontend. The website layout is built with HTML. JavaScript is used to build or customise interactive frontend elements.

### Backend

The backend uses Flask, Python and SQLite3. Flask provides a lightweight and flexible web app framework in Python. SQLite3 provides an embedded database to support the CRUD (Create, Read, Update and Delete) functionalities. This eliminates the need to set up a standalone database. PostreSQL, MySQL and SQLAlchemy were considered.

<br>

## Features

Below is a brief summary of the app's features:

* New account registeration
    * Users can create a new account by providing the following required and optional details:
        * Required details:
            * Username
            * Password
            * E-mail address 
        * Optional details: 
            * First name
            * Last name
            * Date of Birth
            * Height in centimeters
            * Weight in kilograms
    * Passwords, for security reasons, are required to contain at least:
        * one upper case letter
        * one lower case letter
        * one number
        * one special character
* Login to user profile
    * Users can login with their username and password to use track their workouts
* View and edit profile
    * Logged-in users can view and edit their profile
    * Usernames cannot be changed
    * Passwords can be updated
    * The following profile information can be edited:
        * First name
        * Last name
        * Date of Birth
        * Height in centimeters
        * Weight in kilograms
* Homepage
    * Logged-in users can access the homepage
    * The homepage includes the following elements:
        * Navigation bar at the top
        * A workout metrics dashboard near the top
        * 5 most recent workouts
* Create workouts
    * Logged-in users can create workout records to track exercises, sets, reps and weights
    * The workout date and -start time are prepopulated and editable
    * To add an exercise, it must be chosen from one of the autosuggested options. Available exercises are shown, when typing full- or partial exercise names into the exercise field.\
    Clicking on auto-suggested exercises will populated the input field with the respective exercise name.\
    Incorrectly entered exercises will raise an error.\
    Exercises cannot have duplicate sets in a workout.\
    Exercises sets can be deleted.
    * Sets, reps and weights can also be entered
* Workout history
    * Users can view, edit and delete workouts
    * 10 workouts are shown per page
    * By default workouts are sorted by date in descending order, meaning the most recent workout comes first and the oldest workout comes last.\
    The date can be switched between ascending- and descending order with the button next to the date heading.

<br>

## Project Layout

"fitnessapp" is the project directory, or parent folder. It references the [Flask project layout](https://flask.palletsprojects.com/en/3.0.x/tutorial/layout/) to organise its folders and project files and looks as follows:

.../fitnessapp\
&ensp;&ensp;├── \_\_pycache\_\_ (not commiteed)/\
&ensp;&ensp;├── flask_session (not commiteed)/\
&ensp;&ensp;├── static/\
&ensp;&ensp;├── templates/\
&ensp;&ensp;└── zzz_other_files/

### \_\_pycache\_\_

The \_\_pycache\_\_ folder stores compiled bytecode from projects. This enables the interpreter to shorten script startup times by skipping recurring steps, such as lexing and parsing and validating correctness. 

\_\_pycache\_\_ is usually added to the ".gitignore" file, as is the case here. The folder is not commited to this repo and is mentioned, as it will be created after running the Flask web app.

### flask_session

The flask_session folder stores server-side "temporary" session (cookie) data. The information and attributes include user ID, pages visited and action taken. These can be required for certain interactions, such as visiting pages for logged-in users only. 

flask_session is also added to the ".gitignore" file and not committed to this repo. It is mentioned, as it will appear in the folder structure, after running the Flask web app.

### static

This folder stores static files, which do not change when the web server is running and are not generated with code while executing the program. This means that they do not change from one request to another. Examples include HTML- and image files.

### templates

This project's templates are HTML files containing both static- and dynamic elements.

<br>

## Files

The project folders contain the following files:

.../fitnessapp\
&ensp;&ensp;├── \_\_pycache\_\_ (not commiteed)/\
&ensp;&ensp;├── flask_session (not commiteed)/\
&ensp;&ensp;├── static/\
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;├── editprofile.css\
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;├── editworkout.css\
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;├── index.css\
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;├── login.css\
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;├── profile.css\
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;├── register_login.css\
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;├── scripts.js\
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;├── style.css\
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;├── workoutanalytics.css\
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;└── workouthistory.css\
&ensp;&ensp;├── templates/\
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;├── base.html\
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;├── changepassword.html\
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;├── editprofile.html\
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;├── editworkout.html\
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;├── error_message.html\
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;├── index.html\
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;├── login.html\
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;├── profile.html\
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;├── register_details.html\
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;├── register_login.html\
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;├── workout_analytics.html\
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;└── workouthistory.html\
&ensp;&ensp;├── zzz_other_files/\
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;├── exercises_csvs/\
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;├── exercise_muscle_group.csv\
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;├── exercise.csv\
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;├── muscle_group.csv\
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;└── source_exercises.xlsx\
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;├── fitnessapp copy.db\
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;├── plotly_test.py\
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;├── schema.sql\
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;├── sql_migrations.py\
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;└── zzz_load_ext_api_exercises.py\
&ensp;&ensp;├── app.py\
&ensp;&ensp;├── fitnessapp.db\
&ensp;&ensp;├── helpers.py\
&ensp;&ensp;├── README.md\
&ensp;&ensp;└── requirements.txt

CSS Notes:
- declared custom CSS properties. benefits include Custom properties allow a value to be defined in one place, then referenced in multiple other places so that it's easier to work with. Another benefit is readability and semantics.
- style.css provides base styling on every page, to allow styling to be defined in one place and minimise repetitive code.
- other .css files are used to add- or customise styling for their respective pages
- scripts.js adds frontend functionality for pages
editworkout.html - show hide input forms with event listeners. used event delegation to save from writing repetitive code and for performance. JS event delegation is a technique that leverages event bubbling to handle events more efficiently. Instead of adding an event listener to each element individually, we can add a single event listener to a parent element and then use event. target to determine which child element was clicked.
editworkout.html - exercise autofill feature built with JS making API call to exercise API of app. it uses event listener to list to user keyboard inputs and updates autosuggestions in "real-time"

### Files Descriptions

#### app.py

This is the main Python file containing the backend logic of the web app. The functions are ordered by their name in alphabetical order from A-Z in the file. Below is a brief description of the functions in app.py.

**after_request**

This function disables caching HTML responses by modifying key-value pairs in response.headers.
It was referenced from CS50's problem set 9 - Finance. 

**changepassword (login required)**

Renders the changepassword.html page, and updates the user password via POST request. New passwords must meet the requirements of having at least one lower case letter, one upper case letter, one number and one special symbol.

Passwords can be changed to old passwords used in the past, as long as it meets the character requirements. Requiring passwords to be a minimum length is a security best practice that can be implemented.

**createworkout (login required)**

Renders creatworkout.html. This function allows users to create a new workout record in the SQLite3 database table "workouts".
session["workout_id"] is cleared with session.pop("workout_id", None) to avoid raising an error, when session["workout_id"] doesn't exist.
When creating a new workout record, session["workout_id"] is cleared and set to the value of the new workout id.
The user is redirected to editworkout.html after creating a new workout record.

**datetime_format**

Jinja2 function to format datetime in editworkout.html.

**deleteworkout (login required)**

Function that receives POST request to delete workouts and redirect to index.html.

**editnote (login required)**

Function that receives POST request to edit workout notes and redirect to editworkout.html.

**editprofile (login required)**

Displays user data on editprofile.html.
This includes first name, last name, date of birth, height in centimeters and weight in kilograms. The fields can be edited via a POST request, which will update the relevant user record in the "user" table in the database.

**editworkout (login required)**

Renders editworkout.html file. This function displays and updates workout-related data, including datetime (day, start- and finish time), notes, exercises, sets, reps and weights. To maintain some sort of order, exercises and sets are grouped by alphabet and numerical value, in ascending order, respectively.

The workout record is retrieved with session.get("user_id") and session.get("workout_id"). Try-except blocks are used to handle database retrieval errors. 

**index (login required)**

Renders index.html. This is the homepage for logged-in users, which displays a set of workout metrics and the most recent workouts.

The workout metrics are calulated with data retrieved with the user id. This includes average workout duration, days since last workout, workouts in last 7-, 30- and 90 days, and total volume lifted. Most recent workouts displays the 5 latest workouts for viewing, editing or deleting.

Database retrieval errors are handled with try-except blocks.

**login**

Renders login.html. If the user is not logged-in, this will be the first page displayed, prompting them to login or register. Upon successful login, the user is redirected to index.html.

**logout (login required)**

This function operates the logic for the logout button in the navigation bar, which is in base.html. It is displayed for logged-in users. Upon activation, the user is logged out with session.pop("user_id", None) and redirected to login.html.

**profile (login required)**

Renders profile.html. 
This function renders the profile.html file. The page displays profile information including user id, username, first name, last name, date of birth, member since, height(cm) and weight(cm) and a button to convert between imperial- and metric units. Users are able to edit their profile details.

**search_exercise (login required)**

API function to retrieve exercise autosuggestions for editworkout.html.

**register_login**

Renders register_login.html. This function is used to create a new user account via POST request. The username, password and confirm password fields are required. Passwords must meet the requirements of having at least one lower case letter, one upper case letter, one number and one special symbol. The password nad confirmed passwords have to match.

**register_details**

Renders register_details.html. This is the second page of the registration process. It contains optional fields to populate the user profile with first name, last name, date of birth, height(cm) and weight(kg). The data can be edited in the profile page.

**workoutanalytics (login required)**

Renders workoutanalytics.html. This function uses plotly, a Python open source library to render graphs to visualise workout data. Other libraries considered were seaborn and matplotlib. plotly was chosen at the time, due to perceived ease of use. The limitations of this library include enforced minimum sizes for graphs. Documentation on the difference between plotly.express and go and available features was somewhat confusing.

The following graphs are displayed:
 * Pie chart: sets performed by muscle group of all time
 * Horizontal bar chart: top 10 exercises by sets
 * Horizontal bar chart: top 10 exercises by weight
 * Scatter-/ line graph: max weight progression by exercise

**workouthistory (login required)**

Renders workouthistory.html. This function retrieves and displays all user workout records, ordered by date in descending order. The date sorting can be changed between ascending- and descending order with a button next to the date column heading. Each page displays 10 workouts. Workout records can be accessed for viewing and editing.

The pagination feature was manually built with SQLite3. ROW_NUMBER () is used to enumerate and filter rows from the "workout" table. 

SQLAlchemy was considered for its built-in pagination feature. However, switching database technology at this point would have required rewriting all SQL queries. This cost was deemed to outweigh the benefits, so, the change was not made.

<br>

#### fitnessapp.db

This is the SQLite3 database file. The relational tables are designed to minimise column redundancy. The web app's various features perform CRUD (Create, Read, Update & Delete) on this database. Examples include user profile creation, updating user profiles, reading workout history, editing workouts, deleting workouts, etc.

*Outdated, consider deleting or adding a section on database schema?\
fitnessapp.db contains the following tables, columns and data types:

- exercises
    - id INTEGER (primary key)
    - exercise TEXT
- sets
    - user_id INTEGER (foreign key referencing the user table's id column)
    - workout_id INTEGER (foreign key referencing the workout table's id column)
    - exercise_id INTEGER (foreign key referencing the exercise table's id column)
    - exercise_set INTEGER
    - reps INTEGER
    - weight_kg REAL
    - PRIMARY KEY (user_id, workout_id, exercise_id, exercise_set)
- users
    - id INTEGER (primary key)
    - username TEXT
    - hash TEXT
    - member_since TEXT
    - first_name TEXT
    - last_name TEXT
    - date_of_birth TEXT
    - height_cm REAL
    - weight_kg REAL
- workouts
    - id INTEGER
    - user_id INTEGER (foreign key referencing the user table's id column)
    - date TEXT
    - start_time TEXT
    - end_time TEXT

<br>

#### helpers.py

helpers.py contains support functions that are imported in app.py for reuse. This facilitates the DRY (Don't Repeat Yourself) principle. Some functions in this file are referenced from CS50's problem set 9 - Finance.

helpers.py includes the following functions:
- error_message(message, code=400)

    Takes in error message- and code arguments. The default code is 400, if no code is provided. It renders an error page showing a meme with the error message- and code arguments.

- login_required(f)

    A function decorator, requiring users to be logged in to access the wrapped function. Otherwise, they will be redirected to the login page. The wrapped functions are usually functions that render html files.

- retrieve_user(database, username_form_id)

    This function takes a database variable and string as arguments, respectively. Returns a user dict from the database table "users". Returns None if the user does not exist.

<br>

#### zzz_load_ext_api_exercises.py

This Python file performs an API call to an open source workout exercises database at https://wger.de/api/v2/ by https://wger.de/en/software/api.
The JSON data is parsed and loaded into an Excel sheet for further processing before being loaded into fitnessapp.db.
This file was used to create the pre-loaded exercises. It is no longer in use and stored in the "zzz_other_files" folder for reference.

<br>

#### readme.md

A documentation file containing instructions, support or details to help readers better undertand a project. It is formatted in the lightweight markup language Markdown.

<br>

#### schema.sql

This file contains the SQL queries used to create the tables in fitnessapp.db and to facilitate the interactions between the web app and the database.
It includes statements to create the database tables "users", "workouts", "sets" and "exercises".
There are also statements querying data to be displayed on pages, such as on index.html and workouthistory.html. Example metrics include average workout duration, days since last workout, workouts in last 7 days, workouts in last 30 days, workouts in last 90 days, total training volume, workout history, workout history pagination and sorting workout history by date.

<br>

#### usersmigration.py

This Python file was used to update the database table "users", while preserving the existing data. This was used to modify the database "users" table a number of times.
The process includes the following steps:
- migrate the existing data from the old table to a temporary table
- delete the old table
- create a new table
- migrate data from the temporary table to the new table
- delete the temporary table.

<br>

### flask_session files:

This folder stores auto-generated files with user session data. A session is measured as the period of time, when a client logs into the server and logs out of the server.

<br>

### static files:

#### scripts.js

This file contains JavaScript code to extend the frontend functionality of the web app.

It includes functions for the following pages:
- createworkout.html - prepopulate date- and time input fields
- editworkout.html - autosuggestions for exercise input box from https://wger.de/api/v2/exercise/${parameters} with parameters ?language=2&is_main=False&ordering=name&limit=400
- editworkout.html - click autosuggestions to populate exercise input box
- editworkout.html - redundant code for hiding/showing input fields to edit workout date, start time and end time

<br>

### templates files:

This folder contains HTML template files that containt static- and dynamic content. The Jinja templating language is used to write dynamic and easy-to-maintain HTML pages. Bootstrap classes are used to add UI design and frontend functionality.

#### base.html

The base.html file serves as the boilerplate code, containing sections of code that is repeated across multiple files.
These include the doctype declaration, head tag, body tag, navigation bar and footer tag.

#### changepassword.html

This HTML file contains a form that allows users to change their password.

#### createworkout.html

The createworkout.html file contains a pre-populated form that users can edit to create a workout record.

#### editprofile.html

This HTML file contains a form that lets users change their profile details, including first name, last name, date of birth, height(cm) and weight(kg).

#### editworkout.html

The editworkout.html file allows users to edit the workout information and exercises relating to a workout. The former includes, date, start time and end time. The latter includes exercises, sets, reps and weights(kg). Workout exercises and sets are grouped by exercise name and set number, both in ascending order. This ensures a structured overview of the data, regardless of order in which the exercise and sets were entered.

#### error_message.html

This HTML file displays a meme with a customisable error message and error code. It is referenced from CS50's problem set 9 - Finance.

#### index.html

The index.html file is the default page that a user is redirected to, after successful login.
It shows the users a workout metrics dashboard and a brief workout history containing the most recent 5 workouts.

#### login.html

This is the default page shown, if a user is not logged into the web app.
The user can login with their credentials or create a new account with the register button on the top right.

#### profile.html

This HTML file displays a users profile data, including user id, member since, username, first name, last name, date of birth, height(cm) and weight(kg).
The user can click on the edit profile button to update their details or the edit password button to change their password.

#### register.html

The register.html file allows users to enter information to create a new account that can be used to access the web app.
Username, password and confirm password are required fields for registration.
First name, last name, date of birth, height(cm) and weight(kg) are optional fields and can be updated after account creation through profile.html.

#### workouthistory.html

This HTML file shows the user a history of all the workouts ever created on their respective account. The records are ordered by date in descending order by default, which can be switched to ascending order by clicking on the button next to the date heading. Additionally, the workout data is paginated to 10 rows per page for a better viewing experience. Workout records can be edited or deleted from this page.

<br>

## Conclusion

Designing and implementing a full stack application from start to finish was a challenging and educational experience. The steps of this project followed broadly included ideation, define functionality, choose tech stack, implementing the front- and backend and repeating steps.

Some of the challenges encountered along the way are to reduce redundancy while designing a relational database, updating relational database tables, dealing with scope creep, troubleshooting unexpected problems, refactoring code, making tradeoffs and learning new technologies.

