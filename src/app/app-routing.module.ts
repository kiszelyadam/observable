import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PilotsComponent } from './components/merge/merge.component';
import { TeamsComponent } from './components/teams/teams.component';

const routes: Routes = [
  {
    path: 'pilot',
    component: PilotsComponent,
    children: [
      {
        path: 'teams',
        component: TeamsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
