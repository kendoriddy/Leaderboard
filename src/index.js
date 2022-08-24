import './style.css';
import submitScore from './modules/submitScore.js';

const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  submitScore();
});