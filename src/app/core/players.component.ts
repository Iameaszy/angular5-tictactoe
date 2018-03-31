import { Component, OnInit, DoCheck } from "@angular/core";
import { TicTacToeService } from "../play-ground/tic-tac-toe.service";
import { PlayGroundService } from "../play-ground/play-ground.service";

@Component({
  template: `
      <header>
        <div class="playerName">{{playerName|uppercase}}</div>
        <span class="player-score">{{playerScore}}</span>
        <span>VS</span>
        <span class="computer-score">{{computerScore}}</span>
        <div class="computerName">{{computerName|uppercase}}</div>
      </header>
  `,
  styles: [
    `
      header{
            font-size: 3rem;
            text-align: left;
            background:black;
            padding:1%;
            margin:0
      }
      div{
                width: 43.81%;
                display: inline-block;
                text-align:center;
      }
      span[class$="score"]{
            padding:0 1rem;
      }
  `
  ]
})
export class PlayersComponent implements OnInit, DoCheck {
  playerName: string;
  computerName: string;
  playerScore: number;
  computerScore: number;
  constructor(private tic: TicTacToeService, public play: PlayGroundService) {}
  ngOnInit() {
    this.playerName = this.tic.player.name;
    this.computerName = this.tic.computer.name;
    this.playerScore = this.play.playerScore;
    this.computerScore = this.play.computerScore;
  }

  ngDoCheck() {
    this.playerScore = this.play.playerScore;
    this.computerScore = this.play.computerScore;
  }
}
