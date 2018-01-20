import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  template: `
  <div>
  <p class="name-wrapper">
  <label>Please enter player one name</label><br>
  <input type="text" on-keyup.enter="next(name)" [(ngModel)] = "name" maxlength='5' autofocus="autofocus"/>
  </p>

   <p>
       <a routerLink="/" routerLinkActive='active'>Back</a>
        <a tabindex="0" on-click="next(name)" on-keyup.enter="next(name)">Next</a>
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
export class EnterNameComponent implements OnInit {
  name: string;
  constructor(private router: Router) {}

  ngOnInit() {}
  next(name) {
    if (!name) {
      this.router.navigateByUrl('/two-player(error:error-log)', {
        skipLocationChange: true
      });
    } else {
      this.router.navigate(['/two-player/player2-name', { name }], {
        skipLocationChange: true
      });
    }
  }
}
