import { Component, OnInit } from '@angular/core';
import { interval, mapTo, merge } from 'rxjs';

@Component({
  selector: 'app-pilots',
  templateUrl: './pilots.component.html',
  styleUrls: ['./pilots.component.scss']
})
export class PilotsComponent implements OnInit {

  route = 'teams'


  first = interval(2500);
  //emit every 2 seconds
  second = interval(2000);
  //emit every 1.5 seconds
  third = interval(1500);
  //emit every 1 second
  fourth = interval(1000);

  example = merge(
    this.first.pipe(mapTo('FIRST!')),
    this.second.pipe(mapTo('SECOND!')),
    this.third.pipe(mapTo('THIRD')),
    this.fourth.pipe(mapTo('FOURTH'))
  );

  ngOnInit(): void {
    this.example.subscribe((value) => console.log(value));
  }

  
}
