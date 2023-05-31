import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexPipe } from './pipes/index.pipe';
import { PilotsComponent } from './components/pilots/pilots.component';
import { TeamsComponent } from './components/teams/teams.component';
import { StructuralDirective } from './directives/structural.directive';

@NgModule({
  declarations: [
    AppComponent,
    IndexPipe,
    PilotsComponent,
    TeamsComponent,
    StructuralDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
