import { Component } from '@angular/core';
import { f1Pilots } from './mock/pilots';
import { Observable, Observer, interval } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pipes-and-route';

  pilots = f1Pilots; // ctrl + space = auto import

  allowed = false;
  today = new Date();


  pilotClick() {
    console.log('click')
  }
}
