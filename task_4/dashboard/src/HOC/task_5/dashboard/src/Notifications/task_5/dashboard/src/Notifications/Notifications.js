import React, { Component } from 'react';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

class Notifications extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    const { listNotifications } = this.props;

    return (
      <div>
        <p>Here are the notifications</p>
        <ul>
          {listNotifications.map(notification => (
            <NotificationItem
              key={notification.id}
              type={notification.type}
              value={notification.value}
              markAsRead={() => this.markNotificationAsRead(notification.id)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

Notifications.propTypes = {
  listNotifications: PropTypes.array.isRequired,
};

export default Notifications;