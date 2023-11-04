import {
  Laptop,
  Phone,
  Tablet,
  Keyboard,
  Mouse,
  FavoriteBorder,
  ShoppingCart,
  Favorite,
  AddShoppingCart,
} from '@mui/icons-material';
import { ProductsCardIcons, SideMenuItems } from '@/lib/constants';

const IconMapper = {
  Laptop,
  Phone,
  Tablet,
  Keyboard,
  Mouse,
  FavoriteBorder,
  ShoppingCart,
  Favorite,
  AddShoppingCart,
};

interface IconProps {
  name: SideMenuItems | ProductsCardIcons;
  className?: string;
}

export default function Icon({ name, className }: IconProps) {
  const IconComponent = IconMapper[name];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent className={`${className} `} />;
}
