import $ from 'jquery';
import _ from 'lodash';

// Function to update the counter
function updateCounter() {
  let count = 0;
  const countParagraph = $('#count');
  const button = $('#startButton');

  button.on('click', _.debounce(function () {
    count++;
    countParagraph.text(`${count} clicks on the button`);
  }, 1000));
}

$(document).ready(function () {
  const body = $('body');

  body.append("<p>Holberton Dashboard</p>");
  body.append("<p>Dashboard data for the students</p>");
  body.append("<button id='startButton'>Click here to get started</button>");
  body.append("<p id='count'></p>");
  body.append("<p>Copyright - Holberton School</p>");

  updateCounter();
});