import { memory } from "wasm-game-of-life/wasm_game_of_life_bg";
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
  const gamePtr = game.board();
  const board = new Uint8Array(memory.buffer, gamePtr, 16);
  let line = '';
  for (let i = 0; i < 16; i++) {
    if (i%4 === 0 && i != 0) {
      line += '</br>';
    }
    line += `${board[i]}`;
  }
  gameDiv.innerHTML = line;// game.render();
}
