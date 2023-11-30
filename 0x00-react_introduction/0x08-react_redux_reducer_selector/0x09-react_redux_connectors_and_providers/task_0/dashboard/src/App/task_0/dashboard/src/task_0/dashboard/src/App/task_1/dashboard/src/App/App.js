// App.js
import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  // Your component code here

  render() {
    const { isLoggedIn, displayDrawer } = this.props; 

    return (
      <div>
        {/* Your component rendering code here */}
        <p>Is User Logged In: {isLoggedIn ? 'Yes' : 'No'}</p>
        <p>Display Drawer: {displayDrawer ? 'Yes' : 'No'}</p>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.uiReducer.get('isUserLoggedIn'),
    displayDrawer: state.uiReducer.get('isNotificationDrawerVisible'),
  };
};

export default connect(mapStateToProps)(App);