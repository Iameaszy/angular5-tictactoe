import { Component, OnInit, HostBinding, DoCheck } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { TicTacToeService } from "../play-ground/tic-tac-toe.service";
import { PlayGroundService } from "../play-ground/play-ground.service";

@Component({
  templateUrl: "./playGround.component.html",
  styleUrls: ["./playGround.component.less"]
})
export class PlayGroundComponent implements OnInit {
  @HostBinding("style.position") position = "relative";
  board: any[][];
  win: any;
  status = false;
  playFirst = Math.floor(Math.random() * 2) === 1 ? true : false;
  constructor(
    private route: ActivatedRoute,
    private tic: TicTacToeService,
    private play: PlayGroundService,
    private router: Router
  ) {}

  ngOnInit() {
    this.board = this.tic.boards;
    this.init();
  }

  reset() {
    this.tic.boards = this.play.reset();
    this.board = this.tic.boards;
  }
  init() {
    if (this.playFirst) {
      this.router.navigate(
        [
          {
            outlets: {
              player: [
                "player-alert",
                { turn: `${this.tic.computer.name}'s turn` }
              ]
            }
          }
        ],
        { skipLocationChange: true }
      );
    } else {
      this.router.navigate(
        [
          {
            outlets: {
              computer: [
                "computer-alert",
                { turn: `${this.tic.player.name}'s turn` }
              ]
            }
          }
        ],
        { skipLocationChange: true }
      );
    }
  }
  playerTurn(row, col) {
    const space = this.tic.boards[row][col].type;
    if (space !== " ") {
      return;
    }

    this.router.navigate([{ outlets: { player: null, computer: null } }], {
      skipLocationChange: true
    });
    const next = this.playFirst ? this.tic.computer : this.tic.player;
    this.play.updateBoard(row, col, next);
    this.playFirst = !this.playFirst;
    const promise = new Promise((resolve, reject) => {
      const status = this.won(next);
      if (status) {
        resolve();
      } else {
        reject();
      }
    });

    promise
      .then(() => {
        this.play.playerWon = `${next.name} wins`;
        this.playFirst ? this.play.playerScore++ : this.play.computerScore++;
        setTimeout(() => {
          this.reset();
          this.init();
        }, 1000);
      })
      .catch(() => {
        setTimeout(() => {
          this.init();
        }, 1000);
      });
  }

  won(player) {
    const stat: any = this.play.won(player);
    if (stat) {
      stat.pos.forEach(val => {
        // bcos of object and array behaviour
        const col = this.board[val.row][val.col];
        this.board[val.row][val.col] = {
          name: col.name,
          type: col.type,
          win: true
        };
      });
      return true;
    }
    return false;
  }
}
