'use client';
import React from 'react';
import Vercel from '@/components/Vercel';
import { IconButton } from '@mui/material';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/app/store/store';
import {
  selectIsFavoritesOpen,
  toggleFavoritesOpen,
} from '@/app/store/productsSlice';
import Icon from '@/components/Icon';
import { HeaderIcons } from '@/lib/constants';

export default function Header() {
  /**
   Logo-ra rakotni azt, hogy menjek vissza a home page-re

   basket-al meg lehet nezni, hogy mik vannak benne a basketben, ez server side-rol kerodik le
   viszont ami megjeleniti annak a state-jet lehet tarolni reduxban

   favorites-al pedig hogy mi van benne a favoritesben, ez client side-on van eltarolva reduxban,
   hasonloan a basket-hez a isVisible state-t reduxban tarolom
**/
  const dispatch = useAppDispatch();
  const isFavoriteOpen = useAppSelector(selectIsFavoritesOpen);
  const handleCartCheckout = () => {};
  const handleFavorite = () => {
    dispatch(toggleFavoritesOpen(true));
  };

  return (
    <header className="bg-titan-silver w-full ">
      <nav className="w-full">
        <div className="flex max-w-screen-xxl justify-between mx-auto py-6 px-4 sm:px-5 md:px-10 lg:px-16 xxl:px-28">
          <div className="flex">
            <Link href={'/'}>
              <Vercel fillColor="var(--dark-green)" />
            </Link>
          </div>
          <div className="flex items-center gap-1">
            <IconButton className="!bg-light-silver">
              <Icon
                name={HeaderIcons.ShoppingCartCheckout}
                className="!fill-dark-green"
              />
            </IconButton>
            <IconButton className="!bg-light-silver" onClick={handleFavorite}>
              <Icon name={HeaderIcons.Favorite} className="!fill-dark-green" />
            </IconButton>
          </div>
        </div>
      </nav>
    </header>
  );
}
