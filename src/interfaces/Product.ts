interface IProduct {
  id: number;
  name: string;
  description: string;
  rating: number;
  image: string;
  promo: boolean;
  active: boolean;
}
interface ISearchParams {
  search?: string;
  limit?: number;
  page?: number;
  promo?: boolean;
  active?: boolean;
}
interface IProductsMeta {
  currentPage: number;
  itemCount: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}
export type { IProduct, ISearchParams, IProductsMeta };
