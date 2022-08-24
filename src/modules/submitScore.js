const userName = document.querySelector('.name');
const userScore = document.querySelector('.score');
const errorMsg = document.querySelector('small');

const submitScore = async () => {
  const nameValue = userName.value;
  const scoreValue = userScore.value;
  if (nameValue === '' || scoreValue === '') {
    errorMsg.innerHTML = 'All fields are required';
  } else {
    await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ncT92zkPgEUg4RfpDGEA/scores', {
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