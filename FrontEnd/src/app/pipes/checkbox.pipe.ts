import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({ name: 'checkboxFilter' })
export class CheckboxFilterPipe implements PipeTransform {
    transform(items: Array<any>, category: Array<any>): Array<any> {
        let keys = _.keys(category)
        let res: Array<any> = [];
        _.forEach(keys, function (k) {
            if (category[k]){
                _.forEach(items, function (o) {
                    if (o.department == k)
                       res.push(o) 
                })
            }
        })
        console.log(res)
        return res
    }
}
