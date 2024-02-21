import { useEffect, useMemo, useState } from 'react';
import { getBasketById } from '@/lib/utils';
import { Basket } from '@/components/BasketDrawer';

export function useBasket() {
  const [basket, setBasket] = useState<Basket>();

  const shouldFetchData = useMemo(() => {
    return !basket || basket.products.length === 0;
  }, [basket]);

  useEffect(() => {
    const getData = async () => {
      const data = await getBasketById('6525422c8ea6b5f7d06af9ab');
      setBasket(data);
    };

    if (shouldFetchData) {
      getData();
    }
  }, [shouldFetchData]);

  return { basket };
}
