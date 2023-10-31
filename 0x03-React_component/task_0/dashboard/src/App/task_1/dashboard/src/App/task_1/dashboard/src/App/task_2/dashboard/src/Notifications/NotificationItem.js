import React, { Component } from 'react';

class NotificationItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { notification, markAsRead } = this.props;
    markAsRead(notification.id);
  }

  render() {
    return (
      <li onClick={this.handleClick}>
        
      </li>
    );
  }
}

NotificationItem.propTypes = {
  notification: PropTypes.object.isRequired,
  markAsRead: PropTypes.func.isRequired,
};

NotificationItem.defaultProps = {
  notification: {},
  markAsRead: () => {},
};

export default NotificationItem;