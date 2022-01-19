import { Age } from '../utils/calculeAge';
import { FormatDate } from '../utils/format.Date';

const agee = new Age();
const formatDate = new FormatDate();
const serialize = ({ id, name, gender, birthdate, city_home: idCity, city:{city,state} }) => ({
  id,
  name,
  gender,
  birthdate: formatDate.formatDateToRequest(birthdate),
  age: agee.calculateAge(birthdate),
  city_home: idCity ,
  city:{city,state}
});

const paginatedSerialize = ({ docs, total, offset, limit }) => ({
  clients: docs.map(serialize),
  total,
  offset,
  limit
});

export { paginatedSerialize, serialize };
