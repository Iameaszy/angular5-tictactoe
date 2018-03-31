import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { ActivatedRoute } from "@angular/router";
import { Player, Computer, Empty } from "./player";

class Win {
  constructor(public row: string, public col: string) {}
}
@Injectable()
export class TicTacToeService {
  player: Player;
  computer: Computer;
  empty = new Empty();
  play = true;
  boards: any[][] = [
    [this.empty, this.empty, this.empty],
    [this.empty, this.empty, this.empty],
    [this.empty, this.empty, this.empty]
  ];

  getEmptyColsIndexex(board): { row: number; col: number }[] {
    const indexes = [];
    board.forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
        if (col.type === " ") {
          indexes.push({ row: rowIndex, col: colIndex });
        }
      });
    });
    return indexes;
  }

  transform(...aoa) {
    const arr = [];

    aoa.forEach(array => {
      arr.push(new Win(array[0], array[1]));
    });

    return arr;
  }
  won(board, player) {
    const whoWon = player === this.player ? this.player.name : "Computer";
    const obj = { winner: whoWon, pos: [] };
    if (
      board[0][0] === player &&
      board[0][1] === player &&
      board[0][2] === player
    ) {
      obj.pos = this.transform([0, 0], [0, 1], [0, 2]);
      return obj;
    } else if (
      board[1][0] === player &&
      board[1][1] === player &&
      board[1][2] === player
    ) {
      obj.pos = this.transform([1, 0], [1, 1], [1, 2]);
      return obj;
    } else if (
      board[2][0] === player &&
      board[2][1] === player &&
      board[2][2] === player
    ) {
      obj.pos = this.transform([2, 0], [2, 1], [2, 2]);
      return obj;
    } else if (
      board[0][0] === player &&
      board[1][0] === player &&
      board[2][0] === player
    ) {
      obj.pos = this.transform([0, 0], [1, 0], [2, 0]);
      return obj;
    } else if (
      board[0][1] === player &&
      board[1][1] === player &&
      board[2][1] === player
    ) {
      obj.pos = this.transform([0, 1], [1, 1], [2, 1]);
      return obj;
    } else if (
      board[0][2] === player &&
      board[1][2] === player &&
      board[2][2] === player
    ) {
      obj.pos = this.transform([0, 2], [1, 2], [2, 2]);
      return obj;
    } else if (
      board[0][0] === player &&
      board[1][1] === player &&
      board[2][2] === player
    ) {
      obj.pos = this.transform([0, 0], [1, 1], [2, 2]);
      return obj;
    } else if (
      board[0][2] === player &&
      board[1][1] === player &&
      board[2][0] === player
    ) {
      obj.pos = this.transform([0, 2], [1, 1], [2, 0]);
      return obj;
    } else {
      return false;
    }
  }
  draw(board) {
    if (this.getEmptyColsIndexex(board).length === 0) {
      return true;
    }
    return false;
  }
  minimax(board, depth, player) {
    const availSpots = this.getEmptyColsIndexex(board);
    if (this.won(board, this.player)) {
      return 10;
    }
    if (this.won(board, this.computer)) {
      return -10;
    }

    if (availSpots.length === 0) {
      return 0;
    }

    if (this.player === player) {
      let best = -1000;
      availSpots.forEach(obj => {
        board[obj.row][obj.col] = player;
        best = Math.max(best, this.minimax(board, depth + 1, this.computer));
        board[obj.row][obj.col] = this.empty;
      });
      return best;
    } else {
      let best = 1000;
      availSpots.forEach(obj => {
        board[obj.row][obj.col] = player;
        best = Math.min(best, this.minimax(board, depth + 1, this.player));
        board[obj.row][obj.col] = this.empty;
      });
      return best;
    }
  }

  findBestMove(board, player) {
    const availSpots = this.getEmptyColsIndexex(board);
    let bestScore = 1000;
    const bestMove: { col: number; row: number } = { col: -1, row: -1 };

    availSpots.forEach(obj => {
      board[obj.row][obj.col] = player;
      const moveVal = this.minimax(board, 0, this.player);
      board[obj.row][obj.col] = this.empty;
      if (moveVal < bestScore) {
        bestScore = moveVal;
        bestMove.col = obj.col;
        bestMove.row = obj.row;
      }
    });

    return { row: bestMove.row, col: bestMove.col, bestScore };
  }
  /////// creating players////////////
  createPlayers(name, type) {
    const cType = type === "O" ? "X" : "O";
    this.createPLayer(name, type);
    this.createComputer(cType);
  }
  createPLayer(name: string, type: "O" | "X") {
    this.player = new Player(name, type);
  }
  createComputer(type: "O" | "X", name?: string) {
    this.computer = new Computer(type, "Computer");
  }
}
