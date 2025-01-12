export type SimplifiedProduct = {
    _id: string;
    name: string;
    description: string;
    price: number;
    slug: string;
    image: {
      _key: string;
      asset: {
        _id: string;
        url: string;
      };
    }[];
  };