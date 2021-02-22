const roleToRoute = {
  coustomer: [
    {
      name: 'Product',
    },
    {
      name: 'ProductList',
    },
    {
      name: 'ProductAdd',
    },
  ],
  admin: [
    {
      name: 'Product',
    },
    {
      name: 'ProductList',
    },
    {
      name: 'ProductAdd',
    },
    {
      name: 'Category',
    },
  ],
};

export default function getMenuRoutes(role, routes) {
  const allowRoutesName = roleToRoute[role].map((item) => item.name);
  const resultRoutes = routes.filter((item) => {
    const child = item;
    if (allowRoutesName.indexOf(item.name) !== -1) {
      const { children } = child;
      child.children = children.filter((r) => allowRoutesName.indexOf(r.name) !== -1);
      return true;
    }
    return false;
  });
  return resultRoutes;
}
