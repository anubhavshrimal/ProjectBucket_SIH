import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tabsFilter'
})
export class TabsFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
