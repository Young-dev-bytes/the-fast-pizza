import { Outlet, useLoaderData, useNavigation } from 'react-router-dom';
import { useEffect } from 'react';
import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import Loader from './Loader';

function AppLayout() {
  const navigation = useNavigation();
  const loaderData = useLoaderData();
  const isLoading = navigation.state === 'loading';
  console.log('applayout');
  console.log('applayout-navigation', navigation);
  console.log('applayout-loaderdata', loaderData);

  useEffect(() => {
    console.log('appplayout effect');
  }, []);

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
