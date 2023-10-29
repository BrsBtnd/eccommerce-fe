import SideMenu from '@/components/SideMenu';
import ProductsCards from '@/components/ProductsCards';

/**
 * itt fogom lekerni az osszes adatot, eltarolom reduxban es majd a page-n a static paramba az id-kkal filterelve
 * kigeneraltatom az oldalt
 *
 * **/

export default function Home() {
  return (
    <div className="flex flex-col justify-center max-w-screen-xl mx-auto py-6 px-4 sm:px-5 md:px-10 lg:px-28 xl:px-28">
      <div className="flex justify-center mb-10">
        <h3 className="text-3xl text-dark-green">Explore our Products</h3>
      </div>
      <div className="flex">
        <SideMenu />
        <ProductsCards />
      </div>
    </div>
  );
}
