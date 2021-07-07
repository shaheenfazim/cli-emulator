import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TerminalComponent } from './terminal/terminal.component';
import { MatrixComponent } from './matrix/matrix.component';
import { MainComponent } from './main/main.component';
import { ExperimentalComponent } from './experimental/experimental.component';

const routes: Routes = [
  {path: '', component: TerminalComponent},
  {path: 'terminal', component: TerminalComponent},
  {path: 'matrix', component: MatrixComponent},
  //{path: 'main', component: MainComponent},
  {path: 'experimental', component: ExperimentalComponent},

  {path: '**', pathMatch: 'full', component: TerminalComponent} //important to put ** routing in bottom
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
