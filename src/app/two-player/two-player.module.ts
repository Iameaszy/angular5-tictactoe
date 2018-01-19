import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { EnterName2Component } from "./enter-name2.component";
import { EnterNameComponent } from "./enter-name.component";
import { PlayGroundComponent } from "./playGround.component";
import { VersusComponent } from "./versus.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: "",
        component: EnterNameComponent
      },
      {
        path: "player2-name",
        component: EnterName2Component
      },
      {
        path: "playground",
        component: PlayGroundComponent
      },
      {
        path: "versus",
        component: VersusComponent
      }
    ])
  ],
  declarations: [
    EnterName2Component,
    EnterNameComponent,
    PlayGroundComponent,
    VersusComponent
  ],
  exports: [RouterModule]
})
export class TwoPlayerModule {}
