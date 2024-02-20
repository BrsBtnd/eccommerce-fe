import { IconButton } from '@mui/material';
import Icon from '@/components/Icon';
import { ProductsCardIcons } from '@/lib/constants';
import { useAppDispatch, useAppSelector } from '@/app/store/store';
import {
  addToBasket,
  addToFavorites,
  removeFromBasket,
  removeFromFavorites,
  selectBasket,
  selectFavorites,
} from '@/app/store/productsSlice';

export interface BasketAndFavoriteButtonsProps {
  id: string;
  className?: string;
}

export default function BasketAndFavoriteButtons({
  id,
  className,
}: BasketAndFavoriteButtonsProps) {
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
    <div className={className}>
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
  );
}
