'use client';
import { Box, Card, CardContent, Drawer, IconButton } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/app/store/store';
import {
  selectFavoritesProducts,
  selectIsFavoritesOpen,
  toggleFavoritesOpen,
} from '@/app/store/productsSlice';
import Icon from '@/components/Icon';
import { DrawerIcons } from '@/lib/constants';
import FavoritesCard from '@/components/FavoritesCard';
import ProductCardContent from '@/components/ProductCardContent';

export default function FavoritesDrawer() {
  const isFavoriteOpen = useAppSelector(selectIsFavoritesOpen);
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(selectFavoritesProducts);

  const handleDrawerClose = () => {
    dispatch(toggleFavoritesOpen(false));
  };

  const sumPrice = favorites.reduce((acc, curr) => acc + curr.price, 0);
  console.log(favorites);

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
          <Card className="!rounded-2xl !bg-light-silver max-w-xs w-full mb-4">
            <CardContent className="!flex !justify-between items-baseline !p-2">
              <h4 className="text-lg font-medium text-dark-green">Summary:</h4>
              <span className="font-bold text-light-green">
                {sumPrice.toFixed(2)}
              </span>
            </CardContent>
          </Card>
        </Box>
      </div>
    </Drawer>
  );
}
