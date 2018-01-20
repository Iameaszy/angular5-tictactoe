import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { PlayGroundService } from '../play-ground/play-ground.service';
import { TicTacToeService } from '../play-ground/tic-tac-toe.service';

@Component({
  template: `
  <div>
  <p class="name-wrapper">
  <label>Please enter player two name</label><br>
  <input type="text" on-keyup.enter="next(name)" [(ngModel)] = "name" maxlength='5' autofocus="autofocus"/>
  </p>

   <p>
       <a routerLink="/two-player" routerLinkActive='active'>Back</a>
        <a tabindex="0" on-click="next(name)" on-keyup.enter="next(name)" routerLinkActive="active">Next</a>
   </p>
   </div>
  `,
  styles: [
    `
    :host(){
      font-family: cursive
    }

  .name-wrapper{
        font-size: 4rem;
        margin-bottom: 7rem;
  }
  label{
    font-size: 2.2rem;
    text-align: left;
    position: relative;
    left: -1rem;
  }
  input{
    width: 5rem;
    background: none;
    border: none;
    border-bottom: dashed lightskyblue 2px;
    color:lightskyblue;
    font-size:45%;
    margin-top: 4rem;
  }
  input:focus{
    outline:none;
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
export class EnterName2Component implements OnInit {
  name: string;
  constructor(
    private router: Router,
    private tic: TicTacToeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    return this.router.navigate([{ outlets: { error: null } }]);
  }

  next(name) {
    if (!name) {
      this.router.navigate([{ outlets: { error: 'error-log' } }], {
        skipLocationChange: true
      });
    } else {
      this.route.paramMap.subscribe(data => {
        // conforming to the tictactoe service interface
        this.tic.player = { name: data.get('name'), type: 'X', win: false };
        this.tic.computer = { name, type: 'O', win: false };
        this.router.navigateByUrl('/two-player/versus', {
          skipLocationChange: true
        });
      });
    }
  }
}
