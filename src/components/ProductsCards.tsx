'use client';
import ProductsCard from '@/components/ProductCard';
import { Grid } from '@mui/material';
import { getBasketByUser, getProducts } from '@/lib/utils';
import { useAppDispatch, useAppSelector } from '@/app/store/store';
import {
  Product,
  selectProducts,
  setProducts,
} from '@/app/store/productsSlice';
import { useEffect, useMemo } from 'react';
import { selectSelectedSideMenuItems } from '@/app/store/sideMenuItemsSlice';
import { faker } from '@faker-js/faker';

export default function ProductsCards() {
  const dispatch = useAppDispatch();
  const selectedSideMenuItems = useAppSelector(selectSelectedSideMenuItems);
  const products = useAppSelector(selectProducts);

  useEffect(() => {
    const getData = async () => {
      const data = await getProducts();

      const basket = await getBasketByUser('6525422c8ea6b5f7d06af9ab');

      console.log('basket', basket);

      const dataWithImage = data.map((product: Product) => ({
        ...product,
        imageSrc: faker.image.urlLoremFlickr({
          category: 'computers',
          width: 320,
          height: 200,
        }),
      }));

      dispatch(setProducts(dataWithImage));
    };

    if (products.length > 0) {
      return;
    }

    getData();
  }, [products.length]);

  // console.log('products', products);

  const filteredProducts = useMemo(() => {
    if (selectedSideMenuItems.length === 0) {
      return products;
    }

    return products?.filter((product) =>
      selectedSideMenuItems.some(
        (item) => item.toLowerCase() === product.category.toLowerCase(),
      ),
    );
  }, [products, selectedSideMenuItems]);

  return (
    <Grid
      container
      spacing={3}
      className="!grid lg:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4"
    >
      {filteredProducts?.map((product: Product, index) => (
        <Grid item key={product.id} className="flex justify-center">
          <ProductsCard
            index={index}
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            imageSrc={product.imageSrc}
          />
        </Grid>
      ))}
    </Grid>
  );
}
