import React from 'react';
import PropTypes from 'prop-types';

const Notifications = ({ displayDrawer, handleDisplayDrawer, handleHideDrawer }) => {
  // ... other code

  const openDrawer = () => {
    handleDisplayDrawer();
  };

  const closeDrawer = () => {
    handleHideDrawer();
  };

  return (
    <div className="notifications">
      <button onClick={openDrawer}>Your notifications</button>
      {displayDrawer && (
        <div className="drawer">
          <span>Notification 1</span>
          <span>Notification 2</span>
          <button onClick={closeDrawer}>Close</button>
        </div>
      )}
    </div>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

export default Notifications;