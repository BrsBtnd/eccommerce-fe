'use client';
import ProductsCard from '@/components/ProductCard';
import { faker } from '@faker-js/faker';
import { Grid } from '@mui/material';
import { getProducts } from '@/lib/utils';
import { useAppDispatch } from '@/app/store/store';
import {
  Product,
  setProducts as setReduxProducts,
} from '@/app/store/productsSlice';
import { useEffect, useState } from 'react';

export default function ProductsCards() {
  const [products, setProducts] = useState<Product[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getData = async () => {
      const data = await getProducts();
      setProducts(data);
      dispatch(setReduxProducts(data));
    };

    getData();
  }, []);

  return (
    <Grid
      container
      spacing={3}
      className="!grid lg:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4"
    >
      {products?.map((product: Product, index) => (
        <Grid item key={product.id} className="flex justify-center">
          <ProductsCard
            index={index}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        </Grid>
      ))}
    </Grid>
  );
}
