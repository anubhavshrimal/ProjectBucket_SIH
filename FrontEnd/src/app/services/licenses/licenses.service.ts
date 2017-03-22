import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { LICENSES } from './licenses';

@Injectable()
export class LicensesService {
    getLicenses(): void {
        console.log(_.map(LICENSES, 'name'))
    }
}