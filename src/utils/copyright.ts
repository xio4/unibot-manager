import * as moment from 'moment';

const year = moment().format('YYYY');

export const copyrightText = `Copyright(C) 2016${+year > 2016 ? '-' + year : ''} xio4`;
