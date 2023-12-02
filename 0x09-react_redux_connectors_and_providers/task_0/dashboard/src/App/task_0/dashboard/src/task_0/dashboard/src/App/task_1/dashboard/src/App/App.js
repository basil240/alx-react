import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  // Your existing component code...

  // Update the mapStateToProps function
  mapStateToProps = (state) => {
    return {
      // Connect the uiReducer properties to the component's props
      isLoggedIn: state.uiReducer.isLoggedIn,
      displayDrawer: state.uiReducer.isNotificationDrawerVisible,
    };
  };

  render() {
    // Update the render function to use the value of displayDrawer from props
    const { displayDrawer } = this.props;

    return (
      <div>
        {/* Your component rendering logic using displayDrawer */}
        {displayDrawer && <NotificationDrawer />}
        {/* Other components and UI elements */}
      </div>
    );
  }
}

// Connect the mapStateToProps to the component using the connect function
export default connect(mapStateToProps)(App);