0. Read data from a JSON
mandatory
Reuse the latest dashboard project you worked on in the React course 0x06-React_state

For this task, place notifications.json into the root of the project directory and use the data inside for the next step.

Create a new notifications.js file in a schema folder:

Import the JSON data from notifications.json and give it a name. Try import * as [variable name] from [path to notifications.json]
Create a function named getAllNotificationsByUser that accepts userId as an argument
The function should return a list containing all the context objects from the notifications.json data when the author id is the same as the userId
In the same schema directory, create a notifications.test.js file:

Add a test that uses the id 5debd764a7c57c7839d722e9 and verifies that the following data is returned:
1. Normalize a nested JSON
mandatory
Copy over dashboard from the previous task into a task_1 directory at the root of the project

Modify src/schema/notifications.js to set up a schema using Normalizr

You’re going to use schema.Entity to create a 3 of entities.

The first one is an example the task will provide for you.

const user = new schema.Entity("users")

Create a message entity in a variable called message whose key is messages and set the idAttribute to the string guid in the options
Create a notification entity in a variable called notification whose key is notifications and set the definition of the entity as so:
author: user
context: message
Add a test in schema/notifications.test.js to verify that your normalized data has a correct result array. It should contain:
2. Filter a normalized Schema
mandatory
Copy the contents of dashboard from the task_1 directory into a task_2 directory at the root of the project

Modify the function getAllNotificationsByUser to use the normalized dataset

Requirements:

You should only use one loop at this point
You should not use Object.keys
You should not have to modify the test, and the test should pass correctly
All the tests in the project should pass
3. Create actions for the course list
mandatory
Copy the dashboard folder from the task_2 directory into a directory named task_3

Create a new folder named actions

Create the action types:
In a file named courseActionTypes.js, create two action types:

SELECT_COURSE
UNSELECT_COURSE
They will be used to define if a user selected or unselected a specific course

Create the action creators:
In a file named courseActionCreators.js, create two action creators that will send the two types we previously created:

The function selectCourse will accept index as argument
The function unSelectCourse will accept index as argument
Test the action creators:
In a file named courseActionCreators.test.js, write a test for the selectCourse action. Calling the creator with 1 as argument should return: { type: SELECT_COURSE, index: 1 }

Write a test for the unSelectCourse action. Calling the creator with 1 as argument should return: { type: UNSELECT_COURSE, index: 1 }
4. Create actions for the UI
mandatory
Copy the dashboard folder from task_3 into a directory labeled task_4

In src/actions/uiActionTypes.js, create four action types:

e.g . export const LOGIN = "LOGIN"

Create the action types:
LOGIN
LOGOUT
DISPLAY_NOTIFICATION_DRAWER
HIDE_NOTIFICATION_DRAWER
They will be used to define when a user is logging in, logging out, and display / hide the notifications drawer

Create the action creator:
In a file named uiActionCreators.js, the goal of this section is to create four action creators that will send the four types we previously created. Remember to import all the types from uiActionTypes in this file.

The function login will accept email and password as arguments. It will return the action with LOGIN as a type and the user object:
5. Create actions for the notification list
mandatory
Copy dashboard from the task_4 directory into task_5

Create the action types
In src/actions/notificationActionTypes.js, create two action types:

MARK_AS_READ
SET_TYPE_FILTER
Create the filter states
In src/actions/notificationActionTypes.js, create a constant named NotificationTypeFilters, that will contain the two filter states:

DEFAULT
URGENT
They will be used when the user interacts with the notification drawer

Create the action creator
Import the action types you just created in src/actions/notificationActionTypes.js

In a file named notificationActionCreators.js, create two action creators that will send the two action types we previously created:

The function markAsAread will accept index as argument
The function setNotificationFilter will accept filter as argument
Test the action creators
Import the action types, NotificationTypeFilters, and the action creators into src/actions/notificationActionCreators.test.js

In this file, write a test for the markAsAread action. Calling the creator with 1 as an argument should return: