import { Component, OnInit } from "@angular/core";

@Component({
  template: `
    <h3>Difficulty</h3>
   <nav>
       <a routerLink="">Easy</a>
       <a routerLink="/one-player/1">Hard</a>
   </nav>

    <a class="home" routerLink="/">Back</a>
  `,
  styles: [
    `
    h3{
      font-size: 4rem;
      margin-top: 3rem;
     font-family: cursive;
    }
   nav a{
      display:block;
      font-size: 3rem;
      font-family: cursive;
      margin-bottom: 0.5rem;
    }
   nav a:hover{
      background:dimgrey;
    }

    .home{
      font-size: 3rem;
      line-height:5;
     background: #778899;
    }
  `
  ]
})
export class DifficultyComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
