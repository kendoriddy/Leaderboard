const scoreBoard = document.querySelector('.score-board');

const scoreBody = (name, score) => {
  const ul = document.createElement('ul');
  const li = document.createElement('li');
  li.innerHTML = `${name} ${score}`;

  ul.appendChild(li);
  scoreBoard.appendChild(ul);

  const index = [...document.querySelectorAll('li')].length;
  if (index % 2 === 0) {
    li.classList.add('even');
  } else {
    li.classList.add('odd');
  }
};

export default scoreBody;
