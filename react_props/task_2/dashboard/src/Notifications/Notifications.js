import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

const Notifications = () => {
  return (
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
          top: '16px',
          right: '16px',
          background: 0,
          border: 0,
          outline: 'none',
          cursor: 'pointer',
        }}>
          <img src={closeIcon} style={{ width: '8px', height: '8px' }} alt=''></img>
        </button>
    </div>
  );
};

export default Notifications;
