import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'index'
})
export class IndexPipe implements PipeTransform {
  position: string = 'forma 1 pilot';
  transform(value: string, index?: number): string {
    console.log(value);
    switch (index) {
      case 0:
        return `First pilot is: ${value}`;
      default:
        return value
    }
  }

}
