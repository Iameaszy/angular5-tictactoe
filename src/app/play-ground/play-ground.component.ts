import { Component, OnInit, HostBinding, DoCheck } from "@angular/core";
import { PlayGroundService } from "./play-ground.service";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { Person, Computer } from "./player";
import { TicTacToeService } from "./tic-tac-toe.service";

@Component({
  templateUrl: "./play-ground.component.html",
  styleUrls: ["./play-ground.component.less"]
})
export class PlayGroundComponent implements OnInit {
  @HostBinding("style.position") position = "relative";
  board: string[][];
  win: any;
  status = false;
  playFirst = true;
  constructor(
    private route: ActivatedRoute,
    private tic: TicTacToeService,
    private play: PlayGroundService,
    private router: Router
  ) {}

  ngOnInit() {
    this.board = this.tic.boards;
    this.computerTurn();
  }

  playerTurn(row, col) {
    if (this.playFirst) {
      return;
    }
    const promise = new Promise((resolve, reject) => {
      if (this.play.playerTurn(row, col)) {
        resolve();
      }
    });

    promise.then(() => {
      setTimeout(() => {
        this.won();
        this.router.navigate([{ outlets: { player: null } }], {
          skipLocationChange: true
        });
      }, 500);

      setTimeout(() => {
        this.playFirst = true;
        this.computerTurn();
      }, 1000);
    });
  }
  computerTurn() {
    if (!this.playFirst) {
      return;
    }
    const move = this.play.computerTurn();
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        this.router.navigate([{ outlets: { computer: "computer-alert" } }], {
          skipLocationChange: true
        });
      }, 1000);
      setTimeout(() => {
        this.play.updateBoard(move.row, move.col, this.play.computer.type);
        resolve();
      }, 2000);
    });

    promise
      .then(() => {
        setTimeout(() => {
          this.won();
        }, 2500);
      })
      .then(arg => {
        this.router.navigate([{ outlets: { computer: null } }], {
          skipLocationChange: true
        });
      })
      .then(arg => {
        setTimeout(() => {
          this.playFirst = false;
          this.router.navigate([{ outlets: { player: "player-alert" } }], {
            skipLocationChange: true
          });
        }, 1000);
      });
  }

  won() {
    this.win = this.play.won();
    if (this.win) {
      const wrapper = document.querySelector(".wrapper") as any;
      const span = wrapper.querySelectorAll("span");
      const winLoose = wrapper.querySelector(".win-loose");
      span.forEach((elem, ind) => {
        this.win.forEach(val => {
          if (val.row === 0 && ind === val.col) {
            elem.className += " win";
          } else if (val.row === 1 && ind === val.col + 3) {
            elem.className += " win";
          } else if (val.row === 2 && ind === val.col + 6) {
            elem.className += " win";
          }
        });
      });

      this.play.computerScore++;
      setTimeout(() => {
        this.router.navigate([{ outlets: { player: null, computer: null } }], {
          skipLocationChange: true
        });
        winLoose.style.display = "block";
      }, 500);
      setTimeout(() => {
        this.play.reset();
        this.board = this.tic.boards;
      }, 1500);
      setTimeout(() => {
        winLoose.style.display = "none";
        this.router.navigate([{ outlets: { player: "player-alert" } }], {
          skipLocationChange: true
        });
      }, 2000);
    }
  }

  loose() {
    if (this.play.loose()) {
      this.board = this.tic.boards;
    }
  }
}
