// similer products
const similerItems = (currentItem: any, allItems: any, slug: string) => {
  let categories: [] = [];

  // set categories
  if (currentItem.data.categories.length > 0) {
    categories = currentItem.data.categories;
  }

  // filter by categories
  const filterByCategories = allItems.filter(
    (item: { data: { categories: string } }) =>
      categories.find((category) => item.data.categories.includes(category))
  );

  // filter by slug
  const filterBySlug = filterByCategories.filter(
    (product: any) => product.slug !== slug
  );

  return filterBySlug;
};

export default similerItems;
