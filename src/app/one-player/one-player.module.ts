import { NgModule } from '@angular/core';

import { OnePlayerRoutingModule } from './one-player-routing.module';
import { OnePlayerComponent } from './one-player.component';


@NgModule({
  imports: [
    OnePlayerRoutingModule
  ],
  declarations: [OnePlayerComponent]
})
export class OnePlayerModule { }
