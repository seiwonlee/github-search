import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertThousands'
})
export class ConvertThousandsPipe implements PipeTransform {
  transform(value: number): any {
    if (value < 1000) return value;
    const exp = Math.floor(Math.log(value) / Math.log(1000));
    return (value / Math.pow(1000, exp)).toFixed(1) + 'K';
  }
}
