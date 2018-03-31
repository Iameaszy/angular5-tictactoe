import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { PlayGroundModule } from "./play-ground/play-ground.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { TicTacToeService } from "./play-ground/tic-tac-toe.service";
import { PlayGroundService } from "./play-ground/play-ground.service";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CoreModule,
    AppRoutingModule
  ],
  declarations: [AppComponent],
  providers: [TicTacToeService, PlayGroundService],
  bootstrap: [AppComponent]
})
export class AppModule {}
