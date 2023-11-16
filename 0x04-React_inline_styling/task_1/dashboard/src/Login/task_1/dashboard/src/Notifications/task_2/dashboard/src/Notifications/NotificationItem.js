import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  urgentItem: {
    // Define styles for urgent items
  },
  defaultItem: {
    // Define styles for default items
  },
});

const NotificationItem = ({ type, value }) => {
  const itemStyle = type === 'urgent' ? styles.urgentItem : styles.defaultItem;

  return <li className={css(itemStyle)}>{value}</li>;
};

export default NotificationItem;