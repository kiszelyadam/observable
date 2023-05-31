import { Component, OnDestroy } from '@angular/core';
import { Observable, Observer, Subject, Subscription, filter, of, takeUntil } from 'rxjs';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnDestroy {
  destroy$: Subject<boolean> = new Subject();
  counter = 0;
  subscription?: Subscription;
  f1Pilots$: Observable<Array<string>> = this.getF1Pilots$().pipe(
    takeUntil(this.destroy$),
    filter((pilots) => pilots.length >= 3),
  );

  constructor() {
    this.subscription = this.timer$.subscribe((value) => {
      console.log(value);
    }, (error) => console.log(error),
      () => console.log('Subscription is completed'))

    this.f1Pilots$.subscribe((pilots) => {
      console.log(pilots);
      console.log(pilots.filter((pilot) => pilot === 'Fernando Alonso'))
    });
    
  }

  timer$: Observable<number> = Observable.create((observer: Observer<number>) => {
    const asd = setInterval(() => {
      this.counter++;
      observer.next(this.counter);

      if (this.counter === 10) {

        observer.complete();
      } else if (this.counter === 5) {
        observer.error('The value is 5 and it causes error!');
      }
    }, 1000)
  });

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  getF1Pilots$(): Observable<Array<string>> {
    return of(
      ['Fernando Alonso', 'Lewis Hamilton', 'Carlos Sainz']
    )
  }
}
