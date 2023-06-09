import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Observer, Subject, Subscription, debounceTime, delay, filter, fromEvent, merge, of, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})


export class TeamsComponent implements OnDestroy, AfterViewInit, OnInit {

  @ViewChild('searchInput', {
    read: ElementRef,
    static: false
  }) searchInput?: ElementRef;

  @ViewChild('clickButton', {
    read: ElementRef,
    static: false
  }) clickButton?: ElementRef;

  // unsubscribe
  destroy$: Subject<boolean> = new Subject();
  counter = 0;
  subscription?: Subscription;

  // filtering if array.length is bigger then 2
  f1Pilots$: Observable<Array<string>> = this.getF1Pilots$().pipe(
    takeUntil(this.destroy$),
    filter((pilots) => pilots.length >= 3),
  );

  /* mergedF1Pilot$: Observable<Array<string>> = merge(this.getF1Pilots$().pipe(take(1)), this.getF1Pilots2$); */

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

  ngOnInit(): void {
    
  }

  // key and click event observable
  ngAfterViewInit(): void {
    fromEvent(this.searchInput?.nativeElement, 'keyup')
    .pipe(delay(3000))
    .subscribe((value) => console.log('keyUp value:' ,value));

    fromEvent(this.clickButton?.nativeElement, 'click').subscribe((value) => console.log('click value:', value))
  }

  // traditional observer and observable
  timer$: Observable<number> = Observable.create((observer: Observer<number>) => {
    const asd = setInterval(() => {
      this.counter++;
      observer.next(this.counter);

      if (this.counter === 1) {

        observer.complete();
      } else if (this.counter === 5) {
        observer.error('The value is 5 and it causes error!');
      }
    }, 1000)
  });

  // usubscribe observable
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  // observable from
  getF1Pilots$(): Observable<Array<string>> {
    return of(
      ['Fernando Alonso', 'Lewis Hamilton', 'Carlos Sainz']
    )
  }

  getF1Pilots2$(): Observable<Array<string>> {
    return of(
      ['Nico Hulkenberg', 'Max Verstappen']
    )
  }
}
