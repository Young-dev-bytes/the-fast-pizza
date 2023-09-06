import { useEffect } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';

function Menu() {
  const menu = useLoaderData();
  const navigation = useNavigation();
  console.log('menu');
  console.log('menu-navigation', navigation);
  console.log('menu-loaderdata', menu);

  useEffect(() => {
    console.log('menu effect');
  }, []);
  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => {
        return <MenuItem key={pizza.id} pizza={pizza} />;
      })}
    </ul>
  );
}

export async function loader() {
  console.log('menu loader');
  const menuList = await getMenu();
  return menuList;
}

export default Menu;
