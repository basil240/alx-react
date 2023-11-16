import React from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends React.PureComponent {
  render() {
    const { id, type, value, markAsRead } = this.props;

    const handleClick = () => {
      markAsRead(id);
    };

    return (
      <li onClick={handleClick}>
        <p>{value}</p>
        <button onClick={handleClick}>Mark as Read</button>
      </li>
    );
  }
}

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  markAsRead: PropTypes.func.isRequired,
};

export default NotificationItem;