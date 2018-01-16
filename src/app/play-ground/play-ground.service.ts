import { Injectable } from "@angular/core";
import { Person, Computer } from "./player";
import { TicTacToeService } from "./tic-tac-toe.service";

@Injectable()
export class PlayGroundService {
  player: Person;
  playerScore = 0;
  computerScore = 0;
  computer: Computer;
  constructor(private tic: TicTacToeService) {}
  reset() {
    this.tic.boards = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
  }

  pausePlay(play) {
    this.tic.play = !play;
  }
  createPlayers(name, type) {
    const cType = type === "O" ? "X" : "O";
    this.createPLayer(name, type);
    this.createComputer(cType);
  }
  createPLayer(name: string, type: "O" | "X") {
    this.tic.player = type;
    this.player = new Person(name, type);
  }
  createComputer(type: "O" | "X", name?: string) {
    this.tic.computer = type;
    this.computer = new Computer(type, "Computer");
  }

  updateBoard(rowPos: number, colPos: number, player) {
    const space = this.tic.boards[rowPos][colPos];
    if (space === " ") {
      this.tic.boards[rowPos][colPos] = player;
      return true;
    } else {
      return false;
    }
  }

  computerTurn() {
    return this.tic.findBestMove(this.tic.boards, this.computer.type);
  }
  playerTurn(rowPos, colPos) {
    return this.updateBoard(rowPos, colPos, this.player.type);
  }

  won() {
    return this.tic.won(this.tic.boards, this.computer.type);
  }

  loose() {
    if (this.tic.won(this.tic.boards, this.player.type)) {
      alert("player won");
      this.reset();
      return true;
    }
    return false;
  }

  draw() {}
}
