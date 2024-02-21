'use client';
import { Box, Drawer, IconButton } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/app/store/store';
import {
  selectFavoritesProducts,
  selectIsFavoritesOpen,
  toggleFavoritesOpen,
} from '@/app/store/productsSlice';
import Icon from '@/components/Icon';
import { DrawerIcons } from '@/lib/constants';
import FavoritesCard from '@/components/FavoritesCard';
import BasketSummary from '@/components/BasketSummary';
import { getSumPrice } from '@/lib/utils';

export default function FavoritesDrawer() {
  const isFavoriteOpen = useAppSelector(selectIsFavoritesOpen);
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(selectFavoritesProducts);

  const handleDrawerClose = () => {
    dispatch(toggleFavoritesOpen(false));
  };

  const sumPrice = getSumPrice(favorites);

  return (
    <Drawer open={isFavoriteOpen} anchor="right" onClose={handleDrawerClose}>
      <div className="w-96">
        <IconButton
          className="!absolute top-0 right-0"
          onClick={handleDrawerClose}
        >
          <Icon name={DrawerIcons.Close} className="!fill-dark-green" />
        </IconButton>
        <h3 className="text-3xl text-dark-green pt-2 pl-2">Favorites</h3>
        <Box className="!flex justify-center items-center flex-col mt-8">
          {favorites.map((product) => (
            <FavoritesCard
              key={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              id={product.id}
            />
          ))}
          <BasketSummary sumPrice={sumPrice} />
        </Box>
      </div>
    </Drawer>
  );
}
