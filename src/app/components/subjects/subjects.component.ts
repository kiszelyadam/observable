import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from "rxjs";

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  number = 1;
  subject$: ReplaySubject<number> = new ReplaySubject<number>(4);
 

  ngOnInit(): void {

    // subscribing subjects

    this.subject$.next(1);
    this.subject$.next(2);
    this.subject$.next(3);
    this.subject$.next(4);

    this.subject$.subscribe((value) => console.log('first subscribe',value));

    this.subject$.next(5);
    this.subject$.next(6);

    this.subject$.subscribe((value) => console.log('second subscribe', value));

    this.subject$.next(7);

    
    setTimeout(() => { 
      this.subject$.subscribe((value) => {
        console.log(value);
      });
      this.addValueToSubject();
    }, 8000);

    setTimeout(() => {
      this.subject$.next(20);
    }, 4000);

  }

  addValueToSubject() {
    setInterval(() => {
      console.log('giving value')
      this.number++;
      this.subject$.next(this.number);
    }, 1000)
  }
}
