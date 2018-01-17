import { Component, OnInit, HostBinding, DoCheck } from "@angular/core";
import { PlayGroundService } from "./play-ground.service";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { TicTacToeService } from "./tic-tac-toe.service";

@Component({
  templateUrl: "./play-ground.component.html",
  styleUrls: ["./play-ground.component.less"]
})
export class PlayGroundComponent implements OnInit {
  @HostBinding("style.position") position = "relative";
  board: any[][];
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
  reset() {
    this.tic.boards = this.play.reset();
    this.board = this.tic.boards;
  }
  playerTurn(row, col) {
    if (this.playFirst) {
      return;
    }
    this.play.playerTurn(row, col);
    this.playFirst = true;
    this.router.navigate([{ outlets: { player: null } }], {
      skipLocationChange: true
    });
    this.computerTurn();
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
        this.play.updateBoard(move.row, move.col, this.tic.computer);
      }, 2000);

      setTimeout(() => {
        if (this.won()) {
          this.play.computerScore++;
          this.router.navigate(
            [{ outlets: { computer: null, player: null } }],
            {
              skipLocationChange: true
            }
          );

          setTimeout(() => {
            this.reset();
          }, 1500);
          reject();
        } else {
          resolve();
        }
      }, 2500);
    });

    promise
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
      })
      .catch(err => {
        setTimeout(() => {
          this.playFirst = false;
          this.router.navigate([{ outlets: { player: "player-alert" } }], {
            skipLocationChange: true
          });
        }, 2000);
      });
  }

  won() {
    const stat: any = this.play.won();

    if (stat) {
      stat.pos.forEach(val => {
        // bcos of object and array behaviour
        const player = this.board[val.row][val.col];
        this.board[val.row][val.col] = {
          name: player.name,
          type: player.type,
          win: true
        };
      });
      this.play.computerWon = true;
      return true;
    }
  }
}
