import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicTacToeService } from '../play-ground/tic-tac-toe.service';

@Component({
  template: `
  <div>
  <div class="main-container">
  <h3 class="player">{{this.tic.player.name|uppercase}} ( {{this.tic.player.type}} )</h3>
          <p>Versus</p>
  <h3 class="computer">{{this.tic.computer.name|uppercase}} ( {{this.tic.computer.type}} ) </h3>
  </div>
   <p>
       <a routerLink="/two-player" routerLinkActive='active'>Back</a>
        <a tabindex="0" on-click="next()" on-keyup.enter="next()"  routerLinkActive="active">Next</a>
   </p>
   </div>
  `,
  styles: [
    `
    :host(){
      font-family: cursive
    }
  .main-container{
    margin:4rem 0;
  }
  div{
    font-size:3rem;
   }
   .player{
         position: relative;
         right: 6rem;

   }
   .computer{
     position:relative;
     left:6rem;
   }

   h3{
     margin:2rem 0;
     font-family:serif;
   }

p{
  margin:0;
}
  a{
    font-size: 3rem;
    margin: 0 4rem;
    background: darkgreen;
    padding: 0 1rem;
    border-radius:5px;
    font-family:normal;
  }

  `
  ]
})
export class VersusComponent implements OnInit {
  name: string;
  constructor(private router: Router, readonly tic: TicTacToeService) {}

  ngOnInit() {}

  next() {
    this.router
      .navigate(['/two-player/playground'], { skipLocationChange: true })
      .then(() => {
        this.router.navigate([{ outlets: { players: 'players' } }], {
          skipLocationChange: true
        });
      });
  }
}
