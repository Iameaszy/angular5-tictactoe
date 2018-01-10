import { Component, OnInit, HostBinding, DoCheck } from '@angular/core';
import { PlayGroundService } from './play-ground.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Person, Computer } from './player';
import { TicTacToeService } from './tic-tac-toe.service';

@Component({
  templateUrl: './play-ground.component.html',
  styleUrls: ['./play-ground.component.less'],
})
export class PlayGroundComponent implements OnInit, DoCheck {
  @HostBinding('style.position') position = "relative";
  board: string[][];
  win: { [index: number]: number }[] | boolean;
  status = false;
  playFirst = true;
  constructor(
    private route: ActivatedRoute,
    private tic: TicTacToeService,
    private play: PlayGroundService,
    private router: Router
  ) { }

  ngOnInit() {
    this.board = this.tic.boards;
    if (this.playFirst) { this.computerTurn(); }
  }
  ngDoCheck() {
  }

  playerTurn(row, col) {
    if (this.play.playerTurn(row, col)) {
      this.won();
      this.computerTurn();
    }
  }
  computerTurn() {
    const move = this.play.computerTurn();
    setTimeout(() => {
      this.play.updateBoard(move.row, move.col, this.play.computer.type);
      this.won();
    }, 2000);
  }

  won() {
    this.win = this.play.won();
    if (this.win) {
      setTimeout(() => {
        this.play.reset();
        this.board = this.tic.boards;
      }, 1000);
    }
  }

  loose() {
    if (this.play.loose()) {
      this.board = this.tic.boards;
    }
  }

}
