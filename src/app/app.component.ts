import { Component, OnInit, HostBinding, DoCheck } from "@angular/core";
import { PlayGroundService } from "./play-ground/play-ground.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent implements OnInit, DoCheck {
  constructor(public play: PlayGroundService) {}
  ngOnInit() {}
  ngDoCheck() {
    if (this.play.computerWon) {
      setTimeout(() => {
        this.play.computerWon = false;
      }, 2000);
    }
    if (this.play.playerWon) {
      setTimeout(() => {
        this.play.computerWon = false;
      }, 2000);
    }
  }
}
