import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({name: 'tabsFilter'})
export class TabsFilterPipe implements PipeTransform {
   transform(items: Array<any>, category: string): Array<any> {
        return items.filter(item => item.source[0] == _.toLower(category));
    }
}
