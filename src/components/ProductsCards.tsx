import ProductsCard from '@/components/ProductCard';
import { faker } from '@faker-js/faker';
import { Grid } from '@mui/material';

export default function ProductsCards() {
  return (
    <Grid container spacing={3} className="!grid grid-cols-4">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <Grid item key={item}>
          <ProductsCard
            name={faker.commerce.productName()}
            description={faker.commerce.productDescription()}
            price={parseFloat(faker.commerce.price())}
          />
        </Grid>
      ))}
    </Grid>
  );
}
