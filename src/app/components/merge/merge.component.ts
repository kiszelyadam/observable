import { Component, OnInit } from '@angular/core';
import { interval, mapTo, merge } from 'rxjs';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit {

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
