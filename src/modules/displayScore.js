import { base, gameId } from './env.js';
import scoreBody from './scoreBody.js';

const scoreList = document.querySelector('.score-board');

const displayScore = async () => {
  const response = await fetch(`${base}${gameId}`);
  const data = await response.json();
  let dataArray = data.result;
  dataArray = dataArray.sort((a, b) => b.score - a.score);
  scoreList.innerHTML = '';
  dataArray.forEach((score) => {
    scoreBody(score.user, score.score);
  });
};

export default displayScore;
