import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends React.Component{
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    let screen = displayDrawer ? (
      <div className='Notifications'>
        <p>Here is the list of notifications</p>
        <ul>
          {listNotifications.length === 0
            ? (<NotificationItem value='No new notification for now' />)
            : (listNotifications.map((notification) => (
              <NotificationItem 
                type={notification.type}
                value={notification.value}
                html={notification.html}
              />
            )))
          }
        </ul>
        <button 
          type='button'
          aria-label='Close'
          onClick={() => console.log('Close button has been clicked')}
          style={{
            display: 'inline-block',
            position: 'absolute',
            top: '56px',
            right: '16px',
            background: 0,
            border: 0,
            outline: 'none',
            cursor: 'pointer',
          }}>
          <img src={closeIcon} style={{ width: '8px', height: '8px' }} alt=''></img>
        </button>
      </div>
    ) : null;
  
    return (
      <React.Fragment>
        <div className='menuItem'><p>Your notifications</p></div>
        {screen}
      </React.Fragment>
    );
  };
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;
