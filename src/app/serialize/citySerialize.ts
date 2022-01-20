const serialize = ({ id, city, state }) => ({
  id,
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
