import {Game} from "wasm-game-of-life";

const gameDiv = document.createElement('div');

document.body.append(gameDiv);
const board = [0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0];
const game = Game.new_board(board);
render();

setInterval(() => {
  game.on_tick()
  render();
}, 1000);

function render() {
  gameDiv.innerHTML = game.render();
}
