import * as moment from 'moment'

export interface PhoneBoockElement{
    fio: string;
    phone: string;
    date: moment.Moment;
    comment: string;
    select: boolean;
}