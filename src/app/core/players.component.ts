import { Component, OnInit } from '@angular/core';
import { PlayGroundService } from '../play-ground/play-ground.service';


@Component({
  template: `
    <h1>
        <span class="playerName">{{playerName|uppercase}}</span>
        <span class="playerScore score">0</span> VS
        <span class="computerScore score">0</span>
        <span class=computerName>{{computerName|uppercase}}</span>
    </h1>
  `,
  styles: [`
      :host(){
            font-size: 173%;
            background: black;
            position: absolute;
            width: 100%;
            top: 0rem;
            left: 0;
      }
      .playerName{
            display: inline-block;
            position: relative;
            right: 14rem;
      }
      .computerName{
            display: inline-block;
            position: relative;
            left: 14rem;
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
