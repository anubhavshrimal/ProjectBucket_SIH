import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({name: 'checkboxFilter'})
export class CheckboxFilterPipe implements PipeTransform {
   transform(items: Array<any>, category: Array<any>): Array<any> {
       console.log(category)
        return items
    }
}
