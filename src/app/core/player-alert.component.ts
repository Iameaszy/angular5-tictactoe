import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, state, transition, style, animate } from "@angular/animations";

@Component({
  template: `
    <div class=".alert">
      <p>Player's turn</p>
    </div>
  `,
  styles: [`
        div{
          position: absolute;
          top:17rem;
          left: 51rem;
          width: 17rem;
          font-size: 2rem;
          background: darkcyan;
          color:aquamarine;
        }

        p{
          padding:1rem;
          margin:0;
        }
  `],
  animations: [
    trigger('player', [
      transition(":enter", animate("0.5s ease-in", style({ opacity: 1 }))),
      transition(":leave", animate("0.5s ease-out", style({
        opacity: 0
      })))
    ])
  ]
})
export class PlayerAlertComponent implements OnInit {
  @HostBinding("@player") player = true;
  constructor() { }

  ngOnInit() {
  }

}
