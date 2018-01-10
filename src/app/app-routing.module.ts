import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules, Routes } from "@angular/router";


const path: Routes = [
  { path: 'one-player/:id', data: { name: "Yusuf" }, loadChildren: "app/one-player/one-player.module#OnePlayerModule" },
  { path: "play-ground", loadChildren: "app/play-ground/play-ground.module#PlayGroundModule" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(path, { preloadingStrategy: PreloadAllModules, enableTracing: false })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
