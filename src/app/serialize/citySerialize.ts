const serialize = ({ _id, city, state }) => ({
  _id,
  city,
  state
});

const paginatedSerialize = ({ docs, total, offset, limit }) => ({
  cities: docs.map(serialize),
  total,
  offset,
  limit
});

export { paginatedSerialize, serialize };
