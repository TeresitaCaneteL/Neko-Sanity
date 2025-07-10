// schemas/menuItem.ts
export default {
  name: 'menuItem',
  title: 'Plato',
  type: 'document',
  fields: [
    { name: 'name', title: 'Nombre', type: 'string' },
    { name: 'description', title: 'Descripción', type: 'text' },
    { name: 'price', title: 'Precio', type: 'string' },
    { name: 'image', title: 'Imagen', type: 'image' },
    {
      name: 'category',
      title: 'Categoría',
      type: 'reference',
      to: [{ type: 'category' }],
    },
  ],
};



