import { Game } from "./Game";
import { Jax } from "./Jax";
import { Scorpio } from "./Scorpio";

const game = new Game(new Jax());

game.a();
game.b();
game.x();
game.y();

game.setCharacter(new Scorpio());

game.a();
game.b();
game.x();
game.y();
