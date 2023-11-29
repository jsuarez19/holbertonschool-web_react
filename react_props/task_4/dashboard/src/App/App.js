import React from 'react';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications'
import Footer from '../Footer/Footer'
import Login from '../Login/Login'
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';

function App({ isLoggedIn }) {
  let screen = undefined;
  isLoggedIn ? (screen = <CourseList />) : (screen = <Login />);
  return (
    <React.Fragment>
      <Notifications />
      <div className="App">
        <Header />
      </div>
      <div className='App-body'>
        {screen}
      </div>
      <div className='App-footer'>
        <Footer />
      </div>
    </React.Fragment>
  );
};

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
