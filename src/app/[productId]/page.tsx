'use client';
import Image from 'next/image';
import { useAppSelector } from '@/app/store/store';
import { selectProductById } from '@/app/store/productsSlice';
import { faker } from '@faker-js/faker';
import { getImageSrc } from '@/lib/utils';
import { Container, IconButton } from '@mui/material';
import Icon from '@/components/Icon';
import { ProductsCardIcons } from '@/lib/constants';
import BasketAndFavoriteButtons from '@/components/BasketAndFavoriteButtons';
// import { notFound } from 'next/navigation';

export default function ProductDetails({
  params: { productId },
}: {
  params: { productId: string };
}) {
  const product = useAppSelector((state) =>
    selectProductById(state, productId),
  );

  return (
    <Container className="!flex justify-center mt-12">
      <Image
        src={
          getImageSrc(674, 784, product?.lock) || faker.image.urlLoremFlickr()
        }
        alt={'akarmi'}
        width={674}
        height={784}
      />
      <Container className="!flex !bg-light-silver flex-col justify-between items-center pt-20 pb-20">
        <div className="flex flex-col items-center">
          <h3 className="text-3xl text-dark-green mb-8">{product?.name}</h3>

          <p className="text-center text-light-green font-normal text-base">
            {product?.description}
          </p>
        </div>

        <div>
          <div className="p-4 mb-2 border-2 border-solid border-light-green">
            <p className="text-dark-green font-normal">
              Free delivery and free returns
            </p>
          </div>
          <div className="p-4 mb-2 border-2 border-solid border-light-green">
            <p className="text-dark-green font-normal">
              1-3 working days Standard delivery
            </p>
          </div>
          <div className="p-4 border-2 border-solid border-light-green">
            <p className="text-dark-green font-normal">100 day return policy</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <BasketAndFavoriteButtons id={productId} />
          <p className="text-dark-green font-bold">{product?.manufacturer}</p>

          <p className="text-light-green text-base">{`$${product?.price}`}</p>
        </div>
      </Container>
    </Container>
  );
}
