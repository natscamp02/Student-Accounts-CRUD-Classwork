import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

    transform(value: number): unknown {
        let str = value.toString(10);

        str = str.replace(str.slice(0, 3), '(' + str.slice(0, 3) + ') ');
        str = str.replace(str.slice(-4), '-' + str.slice(-4));

        return str;
    }

}
