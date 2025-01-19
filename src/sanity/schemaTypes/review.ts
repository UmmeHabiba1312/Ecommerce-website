export default {
    name: 'review',
    title: 'Review',
    type: 'document',
    fields: [
      {
        name: 'product',
        title: 'Product',
        type: 'reference',
        to: [{ type: 'product' }],
      },
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
      },
      {
        name: 'rating',
        title: 'Rating',
        type: 'number',
      },
      {
        name: 'comment',
        title: 'Comment',
        type: 'text',
      },
      {
        name: 'approved',
        title: 'Approved',
        type: 'boolean',
        description: 'Reviews won\'t show on the site without approval',
      },
    ],
  };