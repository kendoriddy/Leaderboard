import { base, gameId } from './env.js';

const userName = document.querySelector('.name');
const userScore = document.querySelector('.score');

const submitScore = async () => {
  const nameValue = userName.value;
  const scoreValue = userScore.value;
  if (nameValue !== '' || scoreValue !== '') {
    await fetch(`${base}${gameId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: nameValue,
        score: scoreValue,
      }),
    });
  }
  userName.value = '';
  userScore.value = '';
};

export default submitScore;