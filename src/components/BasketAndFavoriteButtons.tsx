import { IconButton } from '@mui/material';
import Icon from '@/components/Icon';
import { API_URL, ProductsCardIcons } from '@/lib/constants';
import { useAppDispatch, useAppSelector } from '@/app/store/store';
import {
  addToBasket,
  addToFavorites,
  removeFromBasket,
  removeFromFavorites,
  selectBasket,
  selectFavorites,
} from '@/app/store/productsSlice';
import { useBasket } from '@/hooks/useBasket';

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
  const { basket } = useBasket();
  const isFavorite = favorites.includes(id);
  const isInBasket = basket?.products.some((product) => product.id === id);

  const handleAddToCart = async () => {
    // const patch = await fetch(`${API_URL}/carts/${basket?.id}`, {
    //   method: 'PATCH',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     products: ['64e720002b3b3d651305a23b'],
    //   }),
    // });

    // console.log(await patch.json());

    if (isInBasket) {
      dispatch(removeFromBasket(id));
      return;
    }

    // dispatch(addToBasket([...basket, id]));
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
