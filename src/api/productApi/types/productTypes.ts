export interface Product {
  id: number;
  title: string;
  images: any;
  category: string;
}

export interface ISearchedProduct extends Product {
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  thumbnail: string;
}
export interface Products {
  products: Product[] | ISearchedProduct[];
  total: number;
  skip: number;
  limit: number;
}
