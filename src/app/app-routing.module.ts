import { NgModule } from "@angular/core";
import { RouterModule, PreloadAllModules, Routes } from "@angular/router";

const path: Routes = [
  {
    path: "one-player/:id",
    loadChildren: "app/one-player/one-player.module#OnePlayerModule"
  },
  {
    path: "two-player",
    loadChildren: "app/two-player/two-player.module#TwoPlayerModule"
  },
  {
    path: "play-ground",
    loadChildren: "app/play-ground/play-ground.module#PlayGroundModule"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(path, {
      preloadingStrategy: PreloadAllModules,
      enableTracing: false
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
