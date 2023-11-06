import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  panel: {
    // Define styles for the panel
  },
  panelOpen: {
    // Modify styles for open panel
  },
  ulStyle: {
    // Define styles for ul
  },
  '@media (max-width: 900px)': {
    panel: {
      // Modify styles for the panel for smaller screens
    },
    ulStyle: {
      // Modify styles for ul for smaller screens
    },
  },
});

const Notifications = ({ isOpen }) => {
  return (
    <div className={css(styles.panel, isOpen && styles.panelOpen)}>
      <ul className={css(styles.ulStyle)}>
        {/* Notification items */}
      </ul>
    </div>
  );
};

export default Notifications;