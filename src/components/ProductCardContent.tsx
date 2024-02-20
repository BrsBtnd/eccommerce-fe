import Link from 'next/link';
import { CardContent } from '@mui/material';
import { ProductsCardProps } from '@/components/ProductCard';
import { toggleFavoritesOpen } from '@/app/store/productsSlice';
import { useAppDispatch } from '@/app/store/store';

export interface ProductCardContentProps
  extends Omit<ProductsCardProps, 'index' | 'lock'> {}

export default function ProductCardContent({
  name,
  description,
  price,
  id,
}: ProductCardContentProps) {
  const dispatch = useAppDispatch();

  const handleProductLinkClick = () => {
    dispatch(toggleFavoritesOpen(false));
  };

  return (
    <CardContent>
      <h3 className="text-dark-green text-lg font-bold mb-4 hover:cursor-pointer">
        <Link href={`/${id}`} onClick={handleProductLinkClick}>
          {name}
        </Link>
      </h3>
      <p className="text-dark-green text-base overflow-hidden whitespace-nowrap text-ellipsis mb-2">
        {description}
      </p>
      <p className="text-light-green text-base">{price.toFixed(2)}</p>
    </CardContent>
  );
}
