import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  ParamMap,
  ActivatedRoute,
  Router,
  NavigationExtras
} from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/first';
import { TicTacToeService } from '../play-ground/tic-tac-toe.service';
import { PlayGroundService } from '../play-ground/play-ground.service';
@Component({
  template: `
  <div>
  <p class="name-wrapper">
  <label>Please enter your name: </label><input type="text" on-keyup.enter="next(name)" [(ngModel)] = "name" maxlength='5' autofocus="autofocus"/>
  </p>

   <p>
       <a [routerLink]='["/one-player",1]' routerLinkActive='active'>Back</a>
        <a (click)="next(name)" on-keyup.enter="next(name)" tabindex="0">Next</a>
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
        margin-top: 10rem;
        margin-bottom: 5rem;
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
  }
  input:focus{
    outline:none;
  }
  a{
    font-size: 3rem;
    margin: 0 4rem;
    background: #778899;
    padding: 0 1rem;
    color:green;
    border-radius:5px;
    font-family:normal;
  }

  `
  ]
})
export class EnterNameComponent implements OnInit, OnDestroy {
  name = '';
  msg = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tic: TicTacToeService
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate([{ outlets: { error: null } }], {
        skipLocationChange: true
      });
    }, 100);
  }
  ngOnDestroy() {
    setTimeout(() => {
      this.router.navigate([{ outlets: { error: null } }], {
        skipLocationChange: true
      });
    }, 100);
  }
  next(name) {
    let player;
    this.route.paramMap.subscribe((params: ParamMap) => {
      player = params.get('player');
    });
    if (!name) {
      return this.router.navigate([{ outlets: { error: ['error-log'] } }], {
        skipLocationChange: true
      });
    }

    this.tic.createPlayers(name, player);
    this.router
      .navigateByUrl('/play-ground', { skipLocationChange: true })
      .then(() => {
        this.router.navigate([{ outlets: { players: 'players' } }], {
          skipLocationChange: true
        });
      });
  }
}
