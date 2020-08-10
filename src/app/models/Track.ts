import * as moment from 'moment'

export interface Track{
    address: string;
    purshaseDate: moment.Moment;
    purshasePrice: number;
    rehabBudgetUsed: number;
    saleDate: moment.Moment;
    salePrice: number;
}