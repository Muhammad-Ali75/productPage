export function addCommasToNumber(number) {
  return number.toLocaleString("en-US", { maximumFractionDigits: 2 });
}

export function generateQuery(filters) {
  const query = {};

  // Add filter conditions to the query object based on the provided filters
  if (filters.min_price) {
    query.min_price = { $gte: +filters.min_price };
  }

  if (filters.max_price) {
    query.max_price = { $lte: +filters.max_price };
  }

  if (filters.moq) {
    query.moq = { $lte: +filters.moq };
  }

  if (filters.stock_in_usa) {
    query.stock_in_usa = true;
  }

  if (filters.product_certificate && filters.product_certificate.length > 0) {
    query.product_certificate = { $all: filters.product_certificate };
  }

  if (filters.supplier_certificate && filters.supplier_certificate.length > 0) {
    query.supplier_certificate = { $in: filters.supplier_certificate };
  }

  if (filters.country && filters.country.length > 0) {
    query.country = { $in: filters.country };
  }

  return JSON.stringify(query);
}

export function generateSort(sort_by) {
  switch (sort_by) {
    case "Latest":
      return "-createdAt";
    case "Price Low to High":
      return "min_price";
    case "Price High to Low":
      return "-min_price";
    case "MOQ Low to High":
      return "moq";
    case "Ratings High to Low":
      return "-rating";
    default:
      return "";
  }
}
