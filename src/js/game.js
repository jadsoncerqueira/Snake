import Arena from './arena.js'
import Snake from './snake.js';
import Fruta from './fruta.js';

const arena1 = new Arena(1310, 26, 'game');
const snake = new Snake(arena1);
const fruta = new Fruta();

arena1.start();

const Game = window.setInterval(() => {
  snake.start(Game);
  fruta.fruta(snake);
}, 100)