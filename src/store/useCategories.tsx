import {create} from 'zustand';

interface CategoryListType {
  id: number;
  name: string;
  value: string;
}

interface Categories {
  categorySelected: string;
  categorySelectedId: number;
  categories: CategoryListType[];
  selectCategory: (category: string, id: number) => void;
}
const listCategories: CategoryListType[] = [
    {id: 0, name: 'Popular', value: ''},
    {id: 1, name: 'Deportes', value: 'sports'},
    {
      id: 2,
      name: 'Tecnología',
      value: 'technology',
    },
    {
      id: 3,
      name: 'Negocios',
      value: 'business',
    },
    {
      id: 4,
      name: 'Entretenimiento',
      value: 'entertainment',
    },
    {
      id: 5,
      name: 'General',
      value: 'general',
    },
    {
      id: 6,
      name: 'Galud',
      value: 'health',
    },
    {
      id: 7,
      name: 'Ciencia',
      value: 'science',
    },
  ];
export const useCategories = create<Categories>()(set => ({
  categorySelected: 'Popular',
  categorySelectedId: 0,
  categories: listCategories,
  selectCategory: (category: string, id: number) => {
    set(state => ({categorySelected: category, categorySelectedId: id}));
  },
}));

