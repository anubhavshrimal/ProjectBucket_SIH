import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkbox'
})
export class CheckboxPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
