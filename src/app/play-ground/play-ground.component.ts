import { Component, OnInit, HostBinding, DoCheck } from '@angular/core';
import { PlayGroundService } from './play-ground.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Person, Computer } from './player';
import { TicTacToeService } from './tic-tac-toe.service';

@Component({
  templateUrl: './play-ground.component.html',
  styleUrls: ['./play-ground.component.less'],
})
export class PlayGroundComponent implements OnInit {
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
    this.computerTurn();
  }

  playerTurn(row, col) {
    if (this.playFirst) { return; }
    const promise = new Promise((resolve, reject) => {
      if (this.play.playerTurn(row, col)) {
        resolve();
      }
    });

    promise.then(() => {
      setTimeout(() => {
        this.won();
        this.router.navigate([{ outlets: { player: null } }], { skipLocationChange: true });
      }, 500);

      setTimeout(() => {
        this.playFirst = true;
        this.computerTurn();
      }, 1000);

    });
  }
  computerTurn() {
    if (!this.playFirst) { return; }
    const move = this.play.computerTurn();
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        this.router.navigate([{ outlets: { computer: 'computer-alert' } }], { skipLocationChange: true });
      }, 1000);
      setTimeout(() => {
        this.play.updateBoard(move.row, move.col, this.play.computer.type);
        this.won();
      }, 2000);
      setTimeout(() => {
        resolve();
      }, 2500);
    });

    promise.then(() => {
      this.router.navigate([{ outlets: { computer: null } }], { skipLocationChange: true });
    }).then(() => {
      setTimeout(() => {
        this.playFirst = false;
        this.router.navigate([{ outlets: { player: 'player-alert' } }], { skipLocationChange: true });
      }, 1000);
    });

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
