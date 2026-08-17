export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  category: string;
  subcategory: string;
  proof: number;
  age: string;
  volume: string;
  shortDescription: string;
  fullDescription: string;
  tastingNotes: {
    nose: string;
    palate: string;
    finish: string;
  };
  badge?: string;
  featured?: boolean;
  images: string[];
  stock: number;
  caskType: string;
  distilleryLocation: string;
}

export interface CategorySeo {
  titleTag: string;
  h1: string;
  metaDescription: string;
  definitionHook: string;
  transactionalCTA?: string;
  faqs: { question: string; answer: string }[];
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  image: string;
  subcategories: string[];
  seo?: CategorySeo;
}

export interface SubcategoryHub {
  categorySlug: string;
  hubSlug: string;
  subcategoryName: string;
  name: string;
  seo: CategorySeo;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'shipping' | 'ordering' | 'products' | 'payment' | 'wholesale';
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface OrderDraft {
  items: { slug: string; quantity: number; price: number }[];
  customerName: string;
  email: string;
  phone: string;
  address: string;
  paymentMethod: string;
  cryptoDiscountApplied: boolean;
  notes?: string;
}
