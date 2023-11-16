Task 0:  
Using the previous project (0x05. React inline styling), we have modularized our React application without worrying about interactions and state, which is usually a recommended process of development. Now, our application is in a good place to start adding logic and state.

Modify the App component in task_0/dashboard/src/App.App.js:

Create a local state to store a displayDrawer element:

Define the default state for the state in the constructor of the Class
Create a function named handleDisplayDrawer that will change the value of displayDrawer to true
Create a function named handleHideDrawer that will change the value of displayDrawer to false
Modify the Notifications import in task_0/dashboard/src/App/App.js:

Pass to the component the prop displayDrawer using the local state
Pass the new functions handleDisplayDrawer and handleHideDrawer
Modify the App test suite in task_0/dashboard/src/App/App.test.js:

Add a test to verify that the default state for displayDrawer is false. Verify that after calling handleDisplayDrawer, the state should now be true
Add a test to verify that after calling handleHideDrawer, the state is updated to be false
Modify the Notifications component in task_0/dashboard/src/Notifications/Notifications.js:

Define the propTypes and the defaultProps for the new props
When clicking on Your notifications, call handleDisplayDrawer
When clicking on the close button, call handleHideDrawer
At this point, after reloading the app, you should be able to show / hide the notifications panel

Modify the Notifications test suite in task_0/dashboard/src/Notifications/Notifications.test.js:

Add a test to verify that clicking on the menu item calls handleDisplayDrawer
Add a test to verify that clicking on the button calls handleHideDrawer
Tips:

Remember that you implemented shouldComponentUpdate. You will need to modify the logic to allow the component to rerender when the prop displayDrawer changes
Use setState and instance when creating tests with Enzyme
Remember to use spies to verify if a function is being called. You can pass a spy as a property

Task 1:
create a form within the Login component & handle login submit in task_1/dashboard/src/Login/Login.js:

Create a local state with the value isLoggedIn set to false
Wrap the inputs within a form element
Replace the button by an input element with type submit
Create a function named handleLoginSubmit that will update the local state by setting isLoggedIn to true
When the form is submitted call the newly created login submission handling function
create controlled components in the Login component intask_1/dashboard/src/Login/Login.js

Modify the local state to add two new values email and password. By default these values are empty but not null
Modify the two inputs elements in the form and set their values to use the local state
Create two function handleChangeEmail and handleChangePassword that the two inputs will call when the value in the input field is changed. The local state should update with what the user is typing
modify state callback in task_1/dashboard/src/Login/Login.js

Modify the local state to add one value enableSubmit. It should be set to false by default
Modify the Submit button to only be enabled when the enableSubmit value of the local state is true
Every time the user changes the value of the email or password field, verify that both fields are not empty. If they are not empty, you can enable the submit button
add tests in the task_1/dashboard/src/Login/Login.js suite

Add a test to verify that the submit button is disabled by default
Add a test to verify that after changing the value of the two inputs, the button is enabled
Tips:

To simulate an input change, you can use the simulate method and use the change event