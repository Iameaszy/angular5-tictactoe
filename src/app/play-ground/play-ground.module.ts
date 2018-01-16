import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { PlayGroundComponent } from "./play-ground.component";
import { PlayGroundService } from "./play-ground.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: PlayGroundComponent
      }
    ])
  ],
  declarations: [PlayGroundComponent],
  exports: [RouterModule]
})
export class PlayGroundModule {}
