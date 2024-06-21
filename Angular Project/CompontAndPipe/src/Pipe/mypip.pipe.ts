import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypip',
  standalone: true
})
export class MypipPipe implements PipeTransform {

  transform(values: any[], ...args: string[]): unknown {
    return values.filter
    (value=>value[args[0]]==args[1]);
  }

}
