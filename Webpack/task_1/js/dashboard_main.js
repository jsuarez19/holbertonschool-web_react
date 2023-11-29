import $ from "jquery";
import _ from 'lodash';

$(document).ready(() => {
  let count = 0;

  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button>Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  $('button').click(_.debounce(function updateCounter() {
    count += 1;
    $('#count').text(`${count} clicks on the button`);
  }, 500));
});
