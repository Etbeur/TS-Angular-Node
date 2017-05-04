import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'exemple'})
export class ExemplePipe implements PipeTransform {

    transform(value: any, ...args: any[]) {
        return value + ' my exemple pipe';
    }
}