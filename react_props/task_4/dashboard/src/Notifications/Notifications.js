import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

const Notifications = ({ displayDrawer }) => {
  let screen = displayDrawer ? (
    <div className='Notifications'>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type='default' value='New course available' />
        <NotificationItem type='urgent' value='New resume available' />
        <NotificationItem 
          type='urgent'
          html={{ __html: getLatestNotification() }}
        />
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

Notifications.defaultProps = {
  displayDrawer: false,
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

export default Notifications;
