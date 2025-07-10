export default {
  name: 'category',
  title: 'Categoría',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nombre de la Categoría',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
  ],
};
