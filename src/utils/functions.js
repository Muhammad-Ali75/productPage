export function addCommasToNumber(number) {
  return number.toLocaleString("en-US", { maximumFractionDigits: 2 });
}

export function generateQuery(filters) {
  console.log("FIlters", filters);
  const query = {};

  // Add filter conditions to the query object based on the provided filters
  //   if (filters.productCertificates && filters.productCertificates.length > 0) {
  //     query.product_certificate = { $all: filters.productCertificates };
  //   }

  //   if (filters.supplierCertificates && filters.supplierCertificates.length > 0) {
  //     query.supplier_certificate = { $in: filters.supplierCertificates };
  //   }

  //   if (filters.country) {
  //     query.country = filters.country;
  //   }

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

  console.log("query", query);

  // Add more filter conditions if needed

  return JSON.stringify(query);
}
