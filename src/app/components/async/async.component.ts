import { Component, OnInit } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.scss']
})
export class AsyncComponent {

  colors$?: Observable<string[]> = this.getColor$().pipe(
    map((color) => color.filter((color) => color.includes('e'))),

    tap((color: string[]) => {
      console.log(color);
      this.showColor(color)
    }))

  firstColor?: string;

  getColor$(): Observable<string[]> {
    return of(['red', 'green', 'blue', 'yellow'])
  }

  showColor(color: string[]): void {
    console.log('ideee');
    this.firstColor = color[0];
  }
}
