import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TerminalComponent } from './terminal/terminal.component';
import { MatrixComponent } from './matrix/matrix.component';
import { MainComponent } from './main/main.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { ExperimentalComponent } from './experimental/experimental.component';

@NgModule({
  declarations: [
    AppComponent,
    TerminalComponent,
    MatrixComponent,
    MainComponent,
    KeyboardComponent,
    ExperimentalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
