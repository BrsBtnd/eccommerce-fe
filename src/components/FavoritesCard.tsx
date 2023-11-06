import { Card } from '@mui/material';
import { ProductsCardProps } from '@/components/ProductCard';
import ProductCardContent from '@/components/ProductCardContent';

export default function FavoritesCard({
  name,
  description,
  price,
  id,
}: ProductsCardProps) {
  return (
    <Card className="!rounded-2xl !bg-light-silver max-w-xs mb-4">
      <ProductCardContent
        id={id}
        name={name}
        description={description}
        price={price}
      />
    </Card>
  );
}
