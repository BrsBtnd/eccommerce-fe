import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/app/store/store';
import {
  Product,
  selectProducts,
  setProducts,
} from '@/app/store/productsSlice';
import { getLock, getProducts } from '@/lib/utils';

export function useProducts() {
  const dispatch = useDispatch();
  const products = useAppSelector(selectProducts);

  useEffect(() => {
    const getData = async () => {
      if (products.length > 0) return;

      const data = await getProducts();

      const dataWithImage = data.map((product: Product) => {
        const lock = getLock();
        return {
          ...product,
          lock,
        };
      });

      dispatch(setProducts(dataWithImage));
    };

    getData();
  }, [products.length, dispatch]);

  return { products };
}
