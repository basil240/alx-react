import React from 'react';
import { connect } from 'react-redux';
import { displayNotificationDrawer, hideNotificationDrawer } from './yourActions'; // Import your actual action creators

class App extends React.Component {
  // Your existing component code...

  render() {
    const { displayDrawer, hideDrawer, displayNotificationDrawer, hideNotificationDrawer } = this.props;

    return (
      <div>
        {/* Your component rendering logic using displayDrawer */}
        {displayDrawer && <NotificationDrawer />}
        {/* Other components and UI elements */}
        
        {/* Use the functions from props instead of calling them directly */}
        <button onClick={displayNotificationDrawer}>Display Drawer</button>
        <button onClick={hideNotificationDrawer}>Hide Drawer</button>
      </div>
    );
  }
}