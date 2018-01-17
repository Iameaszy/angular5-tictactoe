import { Component, OnInit, HostBinding } from "@angular/core";

import {
  trigger,
  state,
  transition,
  style,
  animate
} from "@angular/animations";

@Component({
  template: ` <div>
  <p>How do you want to play?</p>
  <nav>
  <a [routerLink]='["/difficulty"]' routerLinkActive="active">One Player</a>
  <a>Two Player</a>
  </nav>
  </div> `,
  styles: [
    ` div {
        text-align: center;
        margin-top: 4rem;
        font-style: oblique;
        color: lightskyblue;
    }
    p {
        font-size: 4.5rem;
    }
    nav a {
        font-size: 2.5rem;
        color: darkseagreen;
        font-style: normal;
        margin: 1rem;
        cursor: pointer;
        text-shadow: 2px 5px 3px #800b0b;
    }
    nav a:hover {
        transition: ease-in 0.6s;
        color: #00ffffc2;
        text-decoration: underline;
        font-style: inherit;
        text-shadow: none;
        opacity: 1
    }

    nav a:active{
      color:lime;
    }
    `
  ],
  animations: [
    trigger("in", [
      state(
        "*",
        style({
          opacity: 1,
          transform: "translateX(0)"
        })
      ),
      transition(":enter", [
        style({
          opacity: 0,
          transform: "translateX(-100%)"
        }),
        animate("10s ease-in")
      ]),
      transition(
        ":leave",
        style({
          transform: "translateX(100%)"
        })
      )
    ])
  ]
})
export class AppHomeComponent implements OnInit {
  @HostBinding("@in") in = true;
  constructor() {}
  ngOnInit() {}
}
