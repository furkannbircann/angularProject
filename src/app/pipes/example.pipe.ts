import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'example'
})
export class ExamplePipe implements PipeTransform {

  transform(value: string,a?: number,b?:number): string {
    return value.slice(a,b); // return value.slice(0,5) => 'John '
  }
}
