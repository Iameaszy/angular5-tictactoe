import { Injectable } from "@angular/core";
import { Player, Computer, Empty } from "./player";
import { TicTacToeService } from "./tic-tac-toe.service";

@Injectable()
export class PlayGroundService {
  playerScore = 0;
  computerScore = 0;
  computerWon = false;
  playerWon = false;
  constructor(private tic: TicTacToeService) {}
  reset() {
    const empty = new Empty();
    return [
      [empty, empty, empty],
      [empty, empty, empty],
      [empty, empty, empty]
    ];
  }

  updateBoard(rowPos: number, colPos: number, player) {
    const space = this.tic.boards[rowPos][colPos].type;
    if (!space) {
      return;
    }
    if (space === " ") {
      this.tic.boards[rowPos][colPos] = player;
    }
  }

  computerTurn() {
    return this.tic.findBestMove(this.tic.boards, this.tic.computer);
  }
  playerTurn(rowPos, colPos) {
    this.updateBoard(rowPos, colPos, this.tic.player);
  }

  won() {
    return this.tic.won(this.tic.boards, this.tic.computer);
  }

  loose() {
    if (this.tic.won(this.tic.boards, this.tic.player)) {
      alert("player won");
      this.reset();
      return true;
    }
    return false;
  }

  draw() {}
}
