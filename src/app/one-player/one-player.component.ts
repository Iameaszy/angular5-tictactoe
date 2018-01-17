import { Component, OnInit, DoCheck } from "@angular/core";
import { Router, ActivatedRoute, RouterEvent } from "@angular/router";

@Component({
  template: `
      <h1>Choose your player</h1>
      <nav>
          <a [routerLink]='["/enter-name/X"]' skipLocationChange="true" routerLinkActive="active" on-click="next('/enter-name/X')">X</a>
          <a [routerLink]='["/enter-name/O"]' routerLinkActive="active" on-click="next('/enter-name/O')">O</a>
      </nav>
        <a class="difficulty" routerLink="/difficulty">Back</a>
  `,
  styles: [
    `
      :host(){
        font-family: cursive;
      }
      h1{
            font-size: 3rem;
            margin-top: 4rem;
            margin-bottom:5rem
      }

      .difficulty{
        font-size: 3rem;
        line-height: 4;
      }

      a{
        margin: 2rem;
      }
  `
  ]
})
export class OnePlayerComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(val => {
      console.log(val);
    });
  }

  next(url) {
    this.router.navigateByUrl(url, { skipLocationChange: true });
  }
}
