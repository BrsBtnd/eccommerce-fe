'use client';
import { faker } from '@faker-js/faker';
import Image from 'next/image';
import { Card } from '@mui/material';
import { Product } from '@/app/store/productsSlice';
import ProductCardContent from '@/components/ProductCardContent';
import { getImageSrc } from '@/lib/utils';
import BasketAndFavoriteButtons from '@/components/BasketAndFavoriteButtons';

export interface ProductsCardProps
  extends Omit<Product, 'category' | 'manufacturer'> {
  index?: number;
}

export default function ProductsCard({
  name,
  description,
  price,
  index,
  lock,
  id,
}: ProductsCardProps) {
  return (
    <Card className="!rounded-2xl !bg-light-silver max-w-xs relative">
      <Image
        src={getImageSrc(320, 200, lock) || faker.image.urlLoremFlickr()}
        priority={index === 0}
        width={320}
        height={200}
        alt="product"
        className={'rounded-t-2xl '}
        style={{ height: 'auto' }}
      />
      <BasketAndFavoriteButtons
        id={id}
        className="flex gap-5 translate-x-[110px] translate-y-[-45px] absolute"
      />

      <ProductCardContent
        name={name}
        description={description}
        price={price}
        id={id}
      />
    </Card>
  );
}
