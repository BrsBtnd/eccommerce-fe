// import { useAppSelector } from '@/app/store/store';
// import { selectProducts } from '@/app/store/productsSlice';
// import { useSelector } from 'react-redux';
// import { getProductIds } from '@/lib/utils';
// import { notFound } from 'next/navigation';

// export async function generateStaticParams() {
/**
 * itt majd csak redux-ot kell hivni es onnan az adatokat.
 * getProductId-s selector kell neki, es akkor csak map-elni kell vegig a productId-kon.
 * vagy ha megoldom reduxban, hogy az productId-k legyenek kulon kiszedne akkor csak vissza kell kuldeni
 * **/

// const products = await getProducts();
// console.log(products);
/**
 * if no products call notFound()
 * check needed
 * **/
// console.log(products);
// console.log('111111111111111111111111111111111111111111111111111111');
// return products.map((product: any) => product.id);
// }

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
