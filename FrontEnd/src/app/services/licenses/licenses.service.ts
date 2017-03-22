import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { LICENSES } from './licenses';

@Injectable()
export class LicensesService {
    getLicenses(): Promise<Object[]> {
        return Promise.resolve(_.map(LICENSES, 'name'));
    }
}