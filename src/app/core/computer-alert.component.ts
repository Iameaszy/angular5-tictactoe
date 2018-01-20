import { Component, OnInit, HostBinding } from "@angular/core";
import { trigger, transition, animate, style } from "@angular/animations";
import { ActivatedRoute } from "@angular/router";

@Component({
  template: `
  <div>
    <p>
      {{player|uppercase}}
    </p>
    </div>
  `,
  styles: [
    `
      div{
          position: absolute;
          top:17rem;
          right: 51rem;
          width: 19rem;
          font-size: 2rem;
          color:aquamarine;
          background: darkcyan;
        }

        p{
          padding:1rem 0;
          margin:0;
        }
  `
  ],
  animations: [
    trigger("computer", [
      transition(":enter", animate("0.5s ease-in", style({ opacity: 1 }))),
      transition(
        ":leave",
        animate(
          "0.5s ease-out",
          style({
            opacity: 0
          })
        )
      )
    ])
  ]
})
export class ComputerAlertComponent implements OnInit {
  player: string;
  @HostBinding("@computer") computer = true;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(data => {
      this.player = data.get("turn");
    });
  }
}
