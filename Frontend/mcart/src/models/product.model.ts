export interface ProductModel {
  id?: number; // The '?' means it's optional (backend usually creates this)
  productName: string;
  description: string;
  price: number;
  category: string;
  quantity: number;
  image?: string;
}