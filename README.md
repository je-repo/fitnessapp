# fitnessapp

## Table of Content

1. [Introduction](#Introduction)
2. [Login Credentials](#Login-Credentials)
3. [Tutorial](#Tutorial)
4. [Tech Stack](#Tech-Stack)
5. [Features](#Features)
6. [Project Layout](#Project-Layout)
7. [Conclusion](#Conclusion)
8. [Appendices](#Appendices)
    1. [Development Process](#Development-Process)
    2. [Files](#Files)


## Introduction

"fitnessapp" is a fitness tracking web app. This web app lets users create profiles to track their workouts and data visualise their weightlifing progression and -habits. 

A previous version of this web app was created as Harvard cs50x's final project, where a self-selected idea was implemented as per specified requirements. Given some sort of interest in fitness tracking and building a portfolio project, the web app was extended with new features, database schemas, pages and design, among other things.

The tech stack includes Python, JavaScript, Bootstrap, Flask, SQLite3, HTML, CSS.

## Login Credentials

Username: demo\
Password: demo

## Tutorial

![fitnessapp homepage](../.screenshots/fitnessapp_homepage2.png)

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

## Conclusion

What that went well include project completion, despite various challenges; overcoming motivational slumps from unexpected issues and acknowledging technologies are not a fit, after investing resources in them; and finally, continous iteration to keep  project features "sensible", and meet the deadline and project requirements.

Challenges along the way include difficulty in designing the relational database schema for all use cases, the database schema required later redesigning; scope creep from ongoing new insights and unexpected issues necessitated adjusting project specifications and troubleshooting; learning new technologies ad-hoc; balancing tradeoffs between technologies and planning and execution. 

All in all, building a project from end-to-end as a beginner, was a challenging and interesting learning experience. For future reference, a formal software development process will be followed; thorough planning will be undertaken to minimise scope creep and unexpected challenges; and, where possible, an MVP will be defined and built to prove the concept, before investing resources into advanced features.

<br>

## Appendices

### Development Process

Building a full stack application from end-to-end was a challenging and highly educational. The project broadly followed the subsequent steps:

1. Ideation
2. Define features
3. Select tech stack
4. Development (front- and backend)
5. Updates
6. Deployment

The steps are similar to the below model, which can be referenced for future projects:

1. Project Requirement Analysis & Planning
2. Design and Prototyping
3. Software Development
4. Software Testing
5. Deployment
6. Maintenance and Updates

<br>

### Files

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

#### Files Descriptions

##### app.py

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

##### fitnessapp.db

This is the SQLite3 database that supports the web app's CRUD (Create, Read, Update & Delete) functionality. The tables are designed to minimise column redundancy. Features that interact with the database include user profile creation, updating user profiles, reading workout history, editing workouts, deleting workouts, etc.

For an overview of the database's table schema, refer to the table creation queries in "schema.sql" in the folder "zzz_other_files".

<br>

##### helpers.py

helpers.py contains support functions used in app.py. This facilitates the DRY (Don't Repeat Yourself) principle. Some functions are referenced from CS50's problem set 9 - Finance.

helpers.py includes the following functions:

**error_message(message, code=400)**

Takes in error message- and code arguments. The default code is 400, if no code is provided. It renders an error page showing the error message- and code arguments.

**login_required(f)**

A function decorator, requiring users to be logged in to access the wrapped function. Visitors that are not logged-in will be redirected to the login page.

**retrieve_user(database, username_form_id)**

This function takes a database variable and string as arguments. Returns a user dict from the database table "users". Returns None if the user does not exist.

<br>

##### zzz_load_ext_api_exercises.py

This Python file performs an API call to an open source workout exercises database at https://wger.de/api/v2/ by https://wger.de/en/software/api.
The JSON data is parsed and loaded into an Excel sheet for further processing before being loaded into fitnessapp.db.
This file was used to create the pre-loaded exercises. It is no longer in use and stored in the "zzz_other_files" folder for reference.

<br>

##### readme.md

A text file written in Markdown language that describes the app, how to set it up and how to use it, among other things.

<br>

##### schema.sql

This file contains SQL queries used to create- and query the tables in "fitnessapp.db".

<br>

##### sql_migrations.py

This Python file contains scripts to migrate- and load data into SQLite3 tables. The purpose of the former was to preserve user data, when modifying table schemas.

The migration steps are as below:
1. migrate data from the old table to a temporary table
2. delete old table
3. create a new table
4. migrate data from temporary table to new table
5. delete temporary table

<br>

#### static folder

In this web app, the static folder stores .css and .js files without subfolders. For future projects, it would be beneficial to save different file types in respective subfolders for organisational purposes and scalability. 

##### CSS files

The CSS files are structured so that style.css provides the basic styling on every page. This follows the DRY (Don't Repeate Yourself) principle and allows for editing elements of many pages in one place. The other CSS files are used to customise styling for each respective page. 

Additionally, custom CSS properties are declared in style.css. This carries the benefit of declaring and editing values in one place that are referenced in multiple other places. It also adds readability and semantics. Bootstrap classes are also used to add UI design and frontend functionality.

##### scripts.js

Contains scripts for frontend functionality of the following pages:
- createworkout.html - prepopulate date- and time input fields
- editworkout.html - exercise input autosuggestions with API call to "/exercise" endpoint. An event listener listens to keyboard inputs to update auto-suggestions in "real-time". 
- editworkout.html - click autosuggestions to populate exercise input box
- editworkout.html - uses event delegation to handle show/hide functionality, among other things. Event delegation makes use of event bubbling by attaching an event listener to a parent element to handle the events of its children. This saves from repetitively attaching multiple event listeners to many child elements.

<br>

#### templates folder

This folder contains HTML template files that containt static- and dynamic content. These files use the Jinja templating language to write dynamic and easy-to-maintain HTML pages. Bootstrap classes are used to add UI design and frontend functionality.

##### base.html

The base.html file serves as the boilerplate code, containing the navigation bar, footer and other elements repeated over other pages.
The boilderplate code includes the doctype declaration, head tag and body tag, among other things.

##### changepassword.html

Contains a form to change the logged-in user's password.

##### createworkout.html

Contains a pre-populated form to create a workout record.

##### editprofile.html

Contains a form to change user profile details, including first name, last name, date of birth, height(cm) and weight(kg).

##### editworkout.html

Contains fields to display workout information, such as datetime, exercises, sets, reps and weight, among other things.
Workout exercises and sets are grouped by exercise name and set number, both in ascending order. This ensures a structured overview of the data, regardless of order of data entry.

##### error_message.html

Displays a customisable error message and error code. This is referenced from CS50's problem set 9 - Finance.

##### index.html

This is the homepage for logged-in users.
It displays a workout metrics dashboard and the most recent 5 workouts.

##### login.html

This is the first page to be shown, if a user is not logged in.
The user can login with their credentials or create a new account with the register button.

##### profile.html

Displays user profile data, including user id, member since, username, first name, last name, date of birth, height(cm) and weight(kg).
The details can be updated with the edit profile button. The current user's password can be updated with the change password button.

##### register_login.html

This file contains required form fields to create new accounts with. The required fields are username, password and confirm password.

##### register_details.html

This file contains optional form fields to create new accounts with. The optional fields are first name, last name, date of birth, height(cm) and weight(kg). These can be edited after account creation from the profile page.

##### workouthistory.html

Displays history of all workouts related to the current logged-in user. The records are ordered by date in descending order by default, which can be switched to ascending order by clicking on the button next to the date heading. The workout data is paginated to 10 rows per page. Workout records can be edited or deleted from this page.
