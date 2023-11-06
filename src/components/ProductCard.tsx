'use client';
import { faker } from '@faker-js/faker';
import Image from 'next/image';
import { Card, CardContent, IconButton } from '@mui/material';
import Icon from '@/components/Icon';
import { ProductsCardIcons } from '@/lib/constants';
import {
  addToBasket,
  addToFavorites,
  Product,
  removeFromBasket,
  removeFromFavorites,
  selectBasket,
  selectFavorites,
} from '@/app/store/productsSlice';
import { useAppDispatch, useAppSelector } from '@/app/store/store';
import ProductCardContent from '@/components/ProductCardContent';

export interface ProductsCardProps
  extends Omit<Product, 'category' | 'manufacturer'> {
  index?: number;
}

export default function ProductsCard({
  name,
  description,
  price,
  index,
  imageSrc,
  id,
}: ProductsCardProps) {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(selectFavorites);
  const basket = useAppSelector(selectBasket);
  const isFavorite = favorites.includes(id);
  const isInBasket = basket.includes(id);

  const handleAddToCart = () => {
    if (isInBasket) {
      dispatch(removeFromBasket(id));
      return;
    }
    dispatch(addToBasket([...basket, id]));
  };

  const handleAddToFavorites = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(id));
      return;
    }
    dispatch(addToFavorites([...favorites, id]));
  };

  return (
    <Card className="!rounded-2xl !bg-light-silver max-w-xs relative">
      <Image
        src={imageSrc || faker.image.urlLoremFlickr()}
        priority={index === 0}
        width={320}
        height={200}
        alt="product"
        className={'rounded-t-2xl'}
      />
      <div className="flex gap-5 translate-x-[110px] translate-y-[-45px] absolute ">
        <IconButton className="!bg-light-silver" onClick={handleAddToCart}>
          {isInBasket ? (
            <Icon
              name={ProductsCardIcons.ShoppingCart}
              className="!fill-dark-green"
            />
          ) : (
            <Icon
              name={ProductsCardIcons.AddShoppingCart}
              className="!fill-dark-green"
            />
          )}
        </IconButton>
        <IconButton className="!bg-light-silver" onClick={handleAddToFavorites}>
          {isFavorite ? (
            <Icon
              name={ProductsCardIcons.Favorite}
              className="!fill-dark-green"
            />
          ) : (
            <Icon
              name={ProductsCardIcons.FavoriteBorder}
              className="!fill-dark-green"
            />
          )}
        </IconButton>
      </div>
      <ProductCardContent
        name={name}
        description={description}
        price={price}
        id={id}
      />
    </Card>
  );
}
