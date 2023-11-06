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
  Close,
  ShoppingCartCheckout,
} from '@mui/icons-material';
import {
  DrawerIcons,
  HeaderIcons,
  ProductsCardIcons,
  SideMenuItems,
} from '@/lib/constants';

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
  Close,
  ShoppingCartCheckout,
};

interface IconProps {
  name: SideMenuItems | ProductsCardIcons | DrawerIcons | HeaderIcons;
  className?: string;
}

export default function Icon({ name, className }: IconProps) {
  const IconComponent = IconMapper[name];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent className={`${className} `} />;
}
