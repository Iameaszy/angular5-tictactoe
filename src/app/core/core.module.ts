import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EnterNameComponent } from './enter-name.component';
import { AppHomeComponent } from './app-home.component';
import { ErrorLogComponent } from './error-log.component';
import { FormsModule } from '@angular/forms';
import { PlayersComponent } from './players.component';


@NgModule({
  imports: [
    CommonModule, FormsModule,
    RouterModule.forChild([
      { path: '', component: AppHomeComponent, pathMatch: 'full' },
      { path: "enter-name/:player", component: EnterNameComponent },
      { path: "error-log", outlet: 'error', component: ErrorLogComponent },
      { path: 'players', component: PlayersComponent, outlet: 'players' }
    ])
  ],
  declarations: [EnterNameComponent, AppHomeComponent, ErrorLogComponent, PlayersComponent],
  exports: [RouterModule]
})
export class CoreModule { }
