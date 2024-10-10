export interface Category {
  categoryId: string;
  name: string;
  description: string;
}

export interface CategoryResponse {
  dto: {
    listCategory: Category[]
  };
  messages: string[];
  type: string
}