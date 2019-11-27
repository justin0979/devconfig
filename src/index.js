import 'index.html';
import 'main.scss';

const saying = document.createElement('h2');
saying.innerHTML = 'Works';
const app = document.querySelector('.app');
app.appendChild(saying);
