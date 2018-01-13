import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EnterNameComponent } from './enter-name.component';
import { AppHomeComponent } from './app-home.component';
import { ErrorLogComponent } from './error-log.component';
import { FormsModule } from '@angular/forms';
import { PlayersComponent } from './players.component';
import { PlayerAlertComponent } from './player-alert.component';
import { ComputerAlertComponent } from './computer-alert.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    CommonModule, BrowserAnimationsModule, FormsModule,
    RouterModule.forChild([
      { path: '', component: AppHomeComponent, pathMatch: 'full' },
      { path: "enter-name/:player", component: EnterNameComponent },
      { path: "error-log", outlet: 'error', component: ErrorLogComponent },
      { path: 'players', component: PlayersComponent, outlet: 'players' },
      { path: 'player-alert', component: PlayerAlertComponent, outlet: 'player' },
      { path: 'computer-alert', component: ComputerAlertComponent, outlet: 'computer' }
    ])
  ],
  declarations: [EnterNameComponent, AppHomeComponent, ErrorLogComponent, PlayersComponent, PlayerAlertComponent, ComputerAlertComponent],
  exports: [RouterModule]
})
export class CoreModule { }
