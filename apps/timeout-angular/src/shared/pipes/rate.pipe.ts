import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'rate'
})
export class RatePipe implements PipeTransform {

    public transform(milliSeconds: number, rate = 0): string {

        let result = '0';
        if (rate && milliSeconds !== 0) {
            // how much time has passed sinds start
            const hours = milliSeconds / 3600000;
            console.log('hours worked', hours);

            const earnings = hours * rate;
            result = earnings + '';
            console.log('earnings worked', result);
        }
        return result;
    }

}
