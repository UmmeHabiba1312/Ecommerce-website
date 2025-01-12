// src/sanity/schemas/category.js

const categorySchema = {
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Category Title',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title', // Automatically generate the slug from the title
          maxLength: 96, // Limit the slug length
        },
      },
      {
        name: 'image',
        title: 'Category Image',
        type:'array',
        of:[{type:'image'}]
      },
      {
        name: 'productCount',
        title: 'Number of Products',
        type: 'number',
      },
    ],
  };
  export default categorySchema;
    