// import Vercel from '@/components/Vercel';

export default function Home() {
  /**
   * export const revalidate = 60;  will be revalidated in 60 seconds
   *
   * with this solution if some data is added in the db/API then in 60 seconds we cannot se the changes, but
   * after 60 seconds the changes will be fetched, but not visible in the site, just if we reload the page
   *
   * background revalidation means that in the background will be revalidated if some changes happened, but
   * in the background, but next return the old page for the browser first so the user does not need to wait for the
   * response, and generates the new page in the background for subsequent requests
   * So if we reload the page the changes will be visible
   *
   * Important that next makes the fetch happens indifferent if we added new data or not to the API
   *
   * **/

  return (
    <div className="flex justify-center max-w-screen-xl mx-auto py-6 px-4 sm:px-5 md:px-10 lg:px-28 xl:px-28">
      <div>Exclusive Deals of Furniture Collection nagy kep szoveggel</div>
      <div>
        <div>balrol filtering</div>
        <div>kartyak sorban</div>
      </div>
    </div>
  );
}
