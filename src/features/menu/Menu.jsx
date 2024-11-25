import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menuData = useLoaderData();
  console.log("menuData:", menuData);
  return (
    <ul>
      {menuData?.map((pizza) => {
        return <MenuItem pizza={pizza} key={pizza.id} />;
      })}
    </ul>
  );
}

export async function loader() {
  const menuData = await getMenu();
  return menuData;
}
export default Menu;
