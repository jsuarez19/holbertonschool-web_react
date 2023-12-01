import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type, html, value }) {
  let li;

  value
    ? (li = <li data-notification-type={type} onClick={() => markAsRead(id)}>{value}</li>)
    : (li = (
        <li
          data-notification-type={type}
          dangerouslySetInnerHTML={html}
          onClick={() => markAsRead(id)}
        ></li>
      ));

  return li;
};

NotificationItem.defaultProps = {
  html: {},
  type: 'default',
  value: '',
  markAsRead: () => {},
  id: NaN,
};

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

export default NotificationItem;
