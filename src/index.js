import './style.css';
import submitScore from './modules/submitScore.js';
import displayScore from './modules/displayScore.js';
import './logo.png';

displayScore();
const submitBtn = document.getElementById('submit-btn');
const refreshBtn = document.getElementById('refresh');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  submitScore();
});

refreshBtn.addEventListener('click', () => {
  displayScore();
});