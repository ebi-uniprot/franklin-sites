
async function fetchPage (page, size) {
  let totalItems = 27;
  // totalItems += (page * 3);     // changing page size
  const itemsPerPage = (totalItems < page * size)
    ? totalItems % size     // last page
    : size;

  if (itemsPerPage < 1) {
    return null;
  }

  const items = Array(itemsPerPage)
    .fill(null)
    .map((x, i) => ({
      a: ((page - 1) * size) + i + 1,
      b: (() => page + i * 2)()
    }));

  const results = {
    total: totalItems,
    items
  }

  const promise = new Promise(resolve => {
    setTimeout(() => resolve(results), 1000);
  });

  return promise;
}

module.exports = {
  fetchPage
}
