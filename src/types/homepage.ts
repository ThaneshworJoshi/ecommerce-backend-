export interface ProductMedia {
  imageUrl: string;
  altText: string;
}

export interface Product {
  id: number;
  title: string;
  media: ProductMedia;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  category: string;
  productLink: string;
  description: string;
}

export interface FeaturedProduct extends Omit<Product, 'description'> {
  isHot: boolean;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  imageUrl: string;
  productCount: number;
}

export interface HeroBanner {
  title: string;
  media: ProductMedia;
}

export interface ProductsData {
  toys: Product[];
  collars: Product[];
  beds: Product[];
}

export interface HomepageData {
  categories: Category[];
  productsData: ProductsData;
  heroBanner: HeroBanner;
  featuredProducts: FeaturedProduct[];
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
} 