import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'entries'
})
export class EntriesPipe implements PipeTransform {

    transform(value: any, args?: string[]): any {
        const keys = [];
        for (const key in value) {
            keys.push({key: key, value: value[key]});
        }
        return keys;
    }
}
