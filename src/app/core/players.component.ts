import { Component, OnInit, DoCheck } from "@angular/core";
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

      .computer-score,.computerName{
        color:#e48a8a;
      }
  `
  ]
})
export class PlayersComponent implements OnInit, DoCheck {
  playerName: string;
  computerName: string;
  playerScore: number;
  computerScore: number;
  constructor(private play: PlayGroundService) {}
  ngOnInit() {
    this.playerName = this.play.player.name;
    this.computerName = this.play.computer.name;
    this.playerScore = this.play.playerScore;
    this.computerScore = this.play.computerScore;
  }

  ngDoCheck() {
    this.playerScore = this.play.playerScore;
    this.computerScore = this.play.computerScore;
  }
}
