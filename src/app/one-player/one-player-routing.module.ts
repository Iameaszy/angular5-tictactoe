import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';
import { OnePlayerComponent } from './one-player.component';


const path: Routes = [
  {
    path: '',
    component: OnePlayerComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(path)
  ],
  exports: [RouterModule]
})
export class OnePlayerRoutingModule { }
