import { Component, OnInit } from '@angular/core';
import { PlayGroundService } from '../play-ground/play-ground.service';

@Component({
  template: `
      <header>
        <div class="playerName">{{playerName|uppercase}}</div>
        <span class="computer-score">0</span>
        <span>VS</span>
        <span class="player-score">0</span>
        <div class="computerName">{{computerName|uppercase}}</div>
      </header>
  `,
  styles: [`
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
  `]
})
export class PlayersComponent implements OnInit {
  playerName: string;
  computerName: string;

  constructor(private play: PlayGroundService) {
  }
  ngOnInit() {
    this.playerName = this.play.player.name;
    this.computerName = this.play.computer.name;
  }
}
