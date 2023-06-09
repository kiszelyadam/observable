import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexPipe } from './pipes/index.pipe';
import { MergeComponent } from './components/merge/merge.component';
import { TeamsComponent } from './components/teams/teams.component';
import { StructuralDirective } from './directives/structural.directive';
import { AsyncComponent } from './components/async/async.component';
import { SubjectsComponent } from './components/subjects/subjects.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexPipe,
    MergeComponent,
    TeamsComponent,
    StructuralDirective,
    AsyncComponent,
    SubjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
