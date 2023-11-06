import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  loginContainer: {
    // Define styles for the login container
  },
  labelInput: {
    // Define styles for label and input
  },
  button: {
    // Define styles for the button
  },
  '@media (max-width: 900px)': {
    labelInput: {
      // Modify styles for label and input for smaller screens
    },
    button: {
      // Modify styles for the button for smaller screens
    },
  },
});

const Login = () => {
  return (
    <div className={css(styles.loginContainer)}>
      <div className={css(styles.labelInput)}>
        <label>Username:</label>
        <input type="text" />
      </div>
      <div className={css(styles.labelInput)}>
        <label>Password:</label>
        <input type="password" />
      </div>
      <button className={css(styles.button)}>Login</button>
    </div>
  );
};

export default Login;