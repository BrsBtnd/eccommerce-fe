import { faker } from '@faker-js/faker';
import Image from 'next/image';
import { Card, CardContent, IconButton } from '@mui/material';
import Icon from '@/components/Icon';
import { ProductsCardIcons } from '@/lib/constants';

interface ProductsCardProps {
  name: string;
  description: string;
  price: number;
}
export default function ProductsCard({
  name,
  description,
  price,
}: ProductsCardProps) {
  return (
    <Card className="!rounded-2xl !bg-light-silver max-w-xs relative">
      <Image
        src={faker.image.urlLoremFlickr({ category: 'computers' })}
        width={320}
        height={200}
        alt="product"
        className={'rounded-t-2xl'}
      />
      <div className="flex gap-5 translate-x-[110px] translate-y-[-45px] absolute ">
        <IconButton className="!bg-light-silver">
          <Icon
            name={ProductsCardIcons.ShoppingCart}
            className="!fill-dark-green"
          />
        </IconButton>
        <IconButton className="!bg-light-silver">
          <Icon
            name={ProductsCardIcons.FavoriteBorder}
            className="!fill-dark-green"
          />
        </IconButton>
      </div>
      <CardContent>
        <h3 className="text-dark-green text-lg font-bold mb-4">{name}</h3>
        <p className="text-dark-green text-base overflow-hidden whitespace-nowrap text-ellipsis mb-2">
          {description}
        </p>
        <p className="text-light-green text-base">{price.toFixed(2)}</p>
      </CardContent>
    </Card>
  );
}
