import _ from 'lodash';
import './style.css';


function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hi there', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  const myImage = new Image();
  myImage.src = Icon;

  element.appendChild(myImage);

  return element;
}

document.body.appendChild(component());
