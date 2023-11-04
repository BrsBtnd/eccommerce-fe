// import { useAppSelector } from '@/app/store/store';
// import { selectProducts } from '@/app/store/productsSlice';
// import { useSelector } from 'react-redux';
import { getProducts } from '@/lib/utils';
// import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  /**
   * itt majd csak redux-ot kell hivni es onnan az adatokat.
   * getProductId-s selector kell neki, es akkor csak map-elni kell vegig a productId-kon.
   * vagy ha megoldom reduxban, hogy az productId-k legyenek kulon kiszedne akkor csak vissza kell kuldeni
   * **/

  const products = await getProducts();

  /**
   * if no products call notFound()
   * check needed
   * **/
  return products.map((product: any) => product.id);
}

export default function ProductDetails({
  params: { productId },
}: {
  params: { productId: string };
}) {
  console.log('products page props', productId);

  // const products = useAppSelector(selectProducts);
  // console.log(products);

  return <div>product details {productId}</div>;
}
