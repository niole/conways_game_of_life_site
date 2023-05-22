import {Game} from "wasm-game-of-life";

const gameDiv = document.createElement('div');

document.body.append(gameDiv);

const game = Game.new();
render();

setTimeout(() => {
  game.on_tick()
  render();
}, 1000);

function render() {
  gameDiv.innerHTML = game.render();
}
