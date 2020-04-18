export const getBucketId = ({categoryId, page, sort, order, priceMax, priceMin}) =>
  [categoryId, page, sort, order, priceMax, priceMin].join('-');
