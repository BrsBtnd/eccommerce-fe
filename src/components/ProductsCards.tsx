'use client';
import ProductsCard from '@/components/ProductCard';
import { Grid } from '@mui/material';
import { Product } from '@/app/store/productsSlice';
import useFilteredProducts from '@/hooks/useFilteredProducts';

export default function ProductsCards() {
  const filteredProducts = useFilteredProducts();

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
            lock={product.lock}
          />
        </Grid>
      ))}
    </Grid>
  );
}
