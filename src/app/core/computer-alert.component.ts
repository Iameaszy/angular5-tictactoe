import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, transition, animate, style } from "@angular/animations";

@Component({
  template: `
  <div>
    <p>
      Computer's turn
    </p>
    </div>
  `,
  styles: [`
      div{
          position: absolute;
          top:17rem;
          background:#ef6767b3;
          right: 51rem;
          width: 17rem;
          font-size: 2rem;
          color:aquamarine;
        }

        p{
          padding:1rem;
          margin:0;
        }
  `]
  ,
  animations: [
    trigger('computer', [
      transition(":enter", animate("0.5s ease-in", style({ opacity: 1 }))),
      transition(":leave", animate("0.5s ease-out", style({
        opacity: 0
      })))
    ])
  ]
})
export class ComputerAlertComponent implements OnInit {
  @HostBinding("@computer") computer = true;
  constructor() { }

  ngOnInit() {
  }

}
