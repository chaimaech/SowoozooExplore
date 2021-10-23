import React, { createContext, useEffect, useState } from "react";
import { WP_REST_API_Categories } from "wp-types";
import { getWpCategories } from "../Services/WpService";

interface CategoryProviderProps {
  categories?: Category[];
}

export const CategoryContext = createContext<CategoryProviderProps>({} as CategoryProviderProps);
export const useCategoryContext = (): CategoryProviderProps => React.useContext(CategoryContext);

export const CategoryProvider = ({ children }: React.PropsWithChildren<{}>): JSX.Element => {
  const [categories, setCategories] = useState<Category[] | undefined>(undefined);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const categories = await getWpCategories();
    setCategories(transformToFrontendCategory(categories));
  };

  return <CategoryContext.Provider value={{ categories }}>{children}</CategoryContext.Provider>;
};

export interface Category {
  id: number;
  name: string;
}
const transformToFrontendCategory = (categories: WP_REST_API_Categories): Category[] =>
  categories.map((category) => ({ id: category.id, name: category.name }));
