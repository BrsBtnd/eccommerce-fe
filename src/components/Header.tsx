import {
  Favorite,
  FavoriteBorder,
  ShoppingCartCheckout,
} from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { getProducts } from '@/lib/utils';
import Vercel from '@/components/Vercel';

export default function Header() {
  /**
   Logo-ra rakotni azt, hogy menjek vissza a home page-re

   basket-al meg lehet nezni, hogy mik vannak benne a basketben, ez server side-rol kerodik le
   viszont ami megjeleniti annak a state-jet lehet tarolni reduxban

   favorites-al pedig hogy mi van benne a favoritesben, ez client side-on van eltarolva reduxban,
   hasonloan a basket-hez a isVisible state-t reduxban tarolom
**/
  //
  // const [products, setProducts] = useState([]);
  //
  // useEffect(() => {
  //   async function setData() {
  //     const products = await getProducts();
  //     setProducts(products);
  //   }
  //
  //   setData();
  // }, []);

  return (
    <header className="bg-titan-silver w-full ">
      <nav className="w-full">
        <div className="flex max-w-screen-xl justify-between mx-auto py-6 px-4 sm:px-5 md:px-10 lg:px-28 xl:px-28">
          <div className="flex">
            <Vercel fillColor="var(--dark-green)" />
          </div>
          <div className="flex items-center">
            <Favorite className="!fill-dark-green" />
            <FavoriteBorder className="fill-dark-green" />
            <ShoppingCartCheckout className="fill-dark-green" />
          </div>
        </div>
      </nav>
    </header>
  );
}
