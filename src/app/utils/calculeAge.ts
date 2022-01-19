import moment from 'moment';

export class Age {
  calculateAge(birthdate: string) {
    let date = birthdate;

    date = moment(date, 'DD/MM/YYYY').format('DD/MM/YYYY');

    date = moment(date, 'DD/MM/YYYY').toISOString();

    const age = moment().diff(date, 'years');

    return age;
  }
}
