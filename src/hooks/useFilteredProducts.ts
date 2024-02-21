import { useMemo } from 'react';
import { useAppSelector } from '@/app/store/store';
import { selectSelectedSideMenuItems } from '@/app/store/sideMenuItemsSlice';
import { useProducts } from '@/hooks/useProducts';

export default function useFilteredProducts() {
  const selectedSideMenuItems = useAppSelector(selectSelectedSideMenuItems);
  const { products } = useProducts();

  return useMemo(() => {
    if (selectedSideMenuItems.length === 0) {
      return products;
    }

    return products?.filter((product) =>
      selectedSideMenuItems.some(
        (item) => item.toLowerCase() === product.category.toLowerCase(),
      ),
    );
  }, [products, selectedSideMenuItems]);
}
