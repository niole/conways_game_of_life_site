import { memory } from "wasm-game-of-life/wasm_game_of_life_bg";
import {Cell, Game} from "wasm-game-of-life";

const gameDiv = document.createElement('div');

const renderCell = c => c === Cell.Dead ? '◻' : '◼';

document.body.append(gameDiv);
const game = Game.new();
render();

setInterval(() => {
  game.on_tick()
  render();
}, 1000);

function render() {
  const gamePtr = game.board();
  const board = new Uint8Array(memory.buffer, gamePtr, game.board().length);
  let line = '';
  for (let i = 0; i < 1296; i++) {
    if (i%game.row_size() === 0 && i !== 0) {
      line += '</br>';
    }
    line += renderCell(board[i]);
  }
  gameDiv.innerHTML = line;
}
